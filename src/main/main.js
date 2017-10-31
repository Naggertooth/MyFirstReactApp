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
        console.log(this)
        if (this.mainInput.value.length > 0) {
            this.props.onAddPlan(this.mainInput.value);
        }
        return false;
    }

    render() {
        const Body = styled.main`
            display: flex;
            flex-direction: column;
            align-items: center;  
            margin-bottom: 60px;
        `;
        const Form = styled.form`
            position: relative;
            width: 80vw;
            max-width: ${constants.maxInputWidth};
            background: white;
        `;
        const TodoList = styled.ul`
            position: relative;
            list-style: none;
            padding: 0;
            margin: 0;
            width: 80vw;
            max-width: ${constants.maxInputWidth};
            background: white;
            box-shadow: 0 2px 3px 0px rgba(128,128,128, .2); 
            &:before, &:after {
                display: block;
                position: absolute;
                content '';
                z-index: -1;
                width: 98%;
                height: 90%;
                bottom: -4px;
                left: 1%;
                background: white;
                box-shadow: 0 0px 3px 0px rgba(128,128,128, .3); 
            }    
            &:after {
                bottom: -7px;
                z-index: -10;
                width: 96%;
                left: 2%;
            }       
        `;
        const Input = styled.input`
            padding: 0 15px;
            min-height: 60px;
            width: 80vw;
            max-width: ${constants.maxInputWidth};
            vertical-align: top;
            font-size: 21px;
            outline: none;
            border: none;
            box-shadow: 0 0px 3px 1px rgba(128,128,128, .2);
        `;
        const Button = styled.button`
            position: absolute;
            top: 21px;
            right: 9px;
            font-size: 16px;
            border: none;
            background: none;
            color: grey;
            outline: none;
        `;


        return (
            <Body className="main">
                <Form className="main__form" onSubmit={ this.onSubmitFun.bind(this) }>
                    <Input className="main__input"
                        innerRef={ (input) => { this.mainInput = input } }
                        placeholder="What needs to be done?" />
                    <Button className="main__btn"
                        onClick={ this.addPlan.bind(this) }
                        type="button" >↓</Button>
                </Form>
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


export default Main;

