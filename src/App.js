import React from 'react';
import styled from 'styled-components';

import { connect } from 'react-redux';


import Header from './main/header';
import Main from "./main/main";

const App = (props) => {

  const App = styled.div`
    margin: 0 auto;
  `;

  return (
    <App className="app">
      <Header onNoneFilter={props.onNoneFilter}
              onDoneFilter={props.onDoneFilter}
              onUnDoneFilter={props.onUnDoneFilter} />
      <Main onAddPlan={props.onAddPlan} 
            onDonePlan={props.onDonePlan}
            onRemovePlan={props.onRemovePlan} 
            plansList={props.plansList} />      
    </App>
    )
}

function filterPlans( listOfPlans, filterType ) {
  switch (filterType) {
    case "NONE":
      return listOfPlans;

    case "DONE":
      return listOfPlans.filter( item => item.done );

    case "NOT_DONE":
      return listOfPlans.filter( item => !item.done );
  
    default:
      return listOfPlans;
  }
}

export default connect(
  state => ({
    store: state,
    plansList: filterPlans(state['planReducer'], state['filters'] )
  }),
  dispatch => ({
    // ===== Header ========
    onNoneFilter: () => { dispatch({ type: "NONE" }) },
    onDoneFilter: () => { dispatch({ type: "DONE" }) },
    onUnDoneFilter: () => { dispatch({ type: "NOT_DONE" }) },
    // ===== Header ========

    // ===== Main ========
    onAddPlan: (name) => {

      const payload = {
        id: Date.now().toString(),
        done: false,
        name: name
      };

      dispatch({ type: 'ADD_PLAN', payload: payload });

    },
    onRemovePlan: (id) => { dispatch({ type: 'REMOVE_PLAN', payload: id }) },
    onDonePlan: (id) => {  dispatch({ type: "MARK_AS_DONE", payload: id }) },
    // ===== /Main ========
  })
)(App);