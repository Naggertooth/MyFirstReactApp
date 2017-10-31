import React, { Component } from 'react';

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

        return (
            <li className="main__item" data-id={id}>
                <input type="checkbox" onChange={onClickCheckbox}
                    checked={done} />
                <div className="item_text">{planText}</div>
                <button onClick={remove.bind(this, id)}
                    className="item_remove">remove</button>
            </li>
        );
    }

}

export default MainItem;