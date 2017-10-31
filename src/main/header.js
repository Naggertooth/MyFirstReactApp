import React from 'react';
import styled from 'styled-components';

import constants from '../styles/constants'

const Header = (props) => {

    const onAllClick = () => {
        props.onNoneFilter();
    }
    const onDoneClick = () => {
        props.onDoneFilter();
    }
    const onUnDoneClick = () => {
        props.onUnDoneFilter();
    }


    const Header = styled.header`
        text-align: center;
    `;

    const Title = styled.h1`
        color: grey;
        margin: 0;
        padding: 20px 0;
        color: ${constants.niceRed};
    `;
    const Filters = styled.div`
        display: flex;
        justify-content: center;
        width: 80vw;
        max-width: ${constants.maxInputWidth};
        margin: 0 auto;
        background: white;
        padding: 20px 0;
        margin-bottom: 1px;
        border-radius: 1px;
        button {
            display: inline-block;
            padding: 5px 15px;
            margin: 0 15px;
            background: white;
            border: 1px solid ${constants.lightRed};
            border-radius: 3px;
            color: grey;
            cursor: pointer;
            box-shadow: 0 0 3px -2px grey,
                        inset 0 0 2px -2px grey;
            outline: none;
            transition: color .2s ease;
            &:hover {
                color: black;
            }
        }
    `;
    return (
        <Header className="header">
            <Title className="header_title">My todo list</Title>
            <Filters className="header_filters">
                <button onClick={onAllClick}>All</button>
                <button onClick={onDoneClick}>Done</button>
                <button onClick={onUnDoneClick}>Not done</button>                
            </Filters>
        </Header>
    )
}

export default Header;
