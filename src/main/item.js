import React, { Component } from 'react';

import styled from 'styled-components';

import constants from '../styles/constants'


class MainItem extends Component {

    constructor (props) {
        super(props);
        this.state = {
            checked: this.props.data.done
        }
    }

    render() {
        const planText = this.props.data.name,
            done = this.props.data.done,
            id = this.props.data.id;

        const onClickCheckbox = () => {
            this.props.onDonePlan(id);
            this.setState({ checked: !this.state.checked });
        };


        /*
        *   @params: id
        *   @type: function
        *   @description: removes this element
        */
        const remove = this.props.removeThisElement;


        const Item = styled.li`
            position: relative;
            max-width: ${constants.maxInputWidth};
            padding: 20px 35px 20px 60px;
            border-top: 1px solid lightgrey;
            font-weight: 600;
            color: darkgrey;
            transition: background .2s ease, text-decoration .2s .2s ease;
            &:hover {
                button {
                    opacity: 1;
                }
            }
            &.done_plan {
                color: lightgrey;
                text-decoration: line-through;
                background: #f9f9f9;
            }
        `;
        const Checkbox = styled.span`
            display: block;
            position: absolute;
            content '';
            left: 10px;
            top: 50%;
            transform: translate(0%, -50%);
            width: 30px;
            height: 30px;
            border-radius: 50%; 
            box-shadow: 0 0 0 1px grey;
            cursor: pointer;
            line-height: 32px;  
            font-size: 23px;
            text-align: center;
            color: ${constants.darkGreen};
            transition: box-shadow .1s ease;   
            user-select: none;     
            &.done_plan {
                opacity: 1;
                box-shadow: 0 0 2px 1px ${constants.darkGreen};
            }
        `;
        const Button = styled.button`
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            right: 10px;
            outline: none;
            border: none;
            background: none;
            font-size: 27px;
            color: ${constants.niceRed};
            opacity: 0;
            transition: opacity .2s ease, transform .2s ease;
            cursor: pointer;
            &:hover {
                transform: translateY(-50%) rotateZ(90deg);
            }
        `;

        return (
            <Item className={'main__item ' + (done? 'done_plan' : '') } 
             data-id={id}>
                <input style={{display: "none"}} type="checkbox" onChange={onClickCheckbox}
                    checked={done} ref={ (input) => { this.checkbox = input } } />
                <Checkbox className={ done ? 'done_plan' : '' } 
                    onClick={ () => this.checkbox.click() } >{ done ? '✓' : '' }</Checkbox>
                <div className="item_text">{planText}</div>
                <Button onClick={remove.bind(this, id)}
                    className="item_remove">×</Button>
            </Item>
        );
    }

}

export default MainItem;