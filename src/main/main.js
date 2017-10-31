import React, { Component } from 'react';
import styled from 'styled-components';

import MainItem from './item';

import constants from '../styles/constants'

export class Main extends Component {

    // static props = {
    //     plansList: this.props.plansList,
    //     onAddPlan: this.props.onAddPlan,
    //     onDonePlan: this.props.onDonePlan,
    //     onRemovePlan: this.props.onRemovePlan,
    // }

    // static propTypes = {
    //     plansList: PropTypes.arrayOf(
    //         PropTypes.shape({
    //             id: PropTypes.number.isRequired,
    //             done: PropTypes.bool.isRequired,
    //             name: PropTypes.string.isRequired
    //         }).isRequired
    //     ).isRequired,
    //     onAddPlan: PropTypes.func.isRequired,
    //     onDonePlan: PropTypes.func.isRequired,
    //     onRemovePlan: PropTypes.func.isRequired,
    // }

    addPlan() {
        if ( this.mainInput.value.length > 0 ) {
            this.props.onAddPlan(this.mainInput.value);            
        }   
    }

    onSubmitFun(event) {
        event.preventDefault();
        if (this.mainInput.value.length > 0) {
            this.props.onAddPlan(this.mainInput.value);
        }
        return false;
    }

    render() {
        return (
            <Body className="main">
                <form className="main__form" onSubmit={ this.onSubmitFun.bind(this) }>
                    <Input className="main__input"
                        ref={ (input) => { this.mainInput = input } } />
                    <Button className="main__btn"
                        onClick={ this.addPlan.bind(this) }
                        type="button" >Add</Button>
                </form>
                <TodoList className="main__list">{
                    this.props.plansList.map( (plan, index) => {
                        return <MainItem data={ plan } 
                                onDonePlan={this.props.onDonePlan}
                                removeThisElement={ this.props.onRemovePlan } 
                                key={ index } />;
                    } )
                }</TodoList>
            </Body>
        )
    }
}

const Body = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center; 
    margin-top: 20px;       
`;
const TodoList = styled.ul`
    padding: 0;
    margin: 0;
    width: 80vw;
    max-width: ${constants.maxInputWidth};
`;
const Input = styled.input`
    width: 80vw;
    max-width: ${constants.maxInputWidth};
`;
const Button = styled.button`
    position: relative;
`;

export default Main;

