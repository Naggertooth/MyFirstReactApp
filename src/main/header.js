import React from 'react';
import styled from 'styled-components';

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
    `;
    return (
        <Header className="header">
            <Title className="header_title">My todo list</Title>
            <div className="header_filters">
                <button onClick={onAllClick}>All</button>
                <button onClick={onDoneClick}>Done</button>
                <button onClick={onUnDoneClick}>Not done</button>                
            </div>
        </Header>
    )
}

export default Header;
