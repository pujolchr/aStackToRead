import React, { Component } from 'react';


class ControlButton extends Component {

    handleClick(e) {
        console.log(this.props);
        this.props.onClick();
    }
    render() {
        return (
                <button onClick={(e) => this.handleClick()}>
                {this.props.text}
                </button>
               );
    }
};
 
export default ControlButton;
