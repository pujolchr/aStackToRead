import React, { Component } from 'react';


class NewArticle extends Component {

    constructor(props) {
        super(props);
        this.state = {value: 'https://',
                      onBottom: false };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleClick(e) {
        this.props.onClick();
    }


    handleSubmit(event) {
        event.preventDefault();
        this.props.onSubmit(this.state.value, this.state.onBottom);
        this.setState({value: 'https://'});
    }

    handleChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        this.setState({[name]:value});
    }
    
    render() {
        return (
                <form className="" onSubmit={this.handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="new-url">url&nbsp;</label>
                    <input type="url" name="value" id="new-url" value={this.state.value} onChange={this.handleChange}/>
                  </div>
                  <div className="checkbox">
                  <label>
                    <input type="checkbox" name="onBottom" checked={this.state.onBottom} onChange={this.handleChange}/>
                    add in bottom of the stack
                    </label>
                  </div>
                    <input type="submit" className="btn btn-primary" value="Add to Stack" />
                </form>
       );
    }

};

export default NewArticle;
