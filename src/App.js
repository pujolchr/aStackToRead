import React, { Component } from 'react';
import './App.css';
import Stack from './Stack'
import NewArticle from './NewArticle'


class App extends Component {

    // Click handlers
    addArticle(newUrl, bottom) {
        // set the title
        const name = new URL(newUrl);
        const newArticle = { name: name.hostname,
                             url:  newUrl};

        let newstack = this.state.stack.slice(0);

        if (bottom) {
            newstack.push(newArticle);
        } else {
            newstack.unshift(newArticle);
        }

        this.setState({stack:newstack});
    }

    readArticle() {

        /* open new window */
        console.log(this);
        window.open(this.state.stack[0].url);

        /* update stack */
          let newstack = this.state.stack.slice(1);
          this.setState({stack:newstack});
    }

    constructor(props) {
            super(props);

            let  newStack = [];

            // Local Storage
            if (typeof(Storage) !== "undefined") {
                // Code for localStorage/sessionStorage.
                newStack = localStorage.getItem("stack");
                newStack = JSON.parse(newStack);
            } 

            // the stack
            this.state = {stack: newStack === null ? [] : newStack.slice(0)};
            
            // bind the events handler
            this.readArticle = this.readArticle.bind(this);
            this.addArticle = this.addArticle.bind(this);
    }

    componentDidUpdate() {
        // save the stack on change
        localStorage.setItem('stack', JSON.stringify(this.state.stack));
    }

    render() {
        return (
            <div className="container well rounded" style={{borderRadius:"100%"}}>
            <h1 className="text-center">
                <span
                    className="text-center bg-primary"
                    style={{margin:"0 auto", borderRadius:"100%",padding:"0 2em"}}>
                A stack to read</span></h1>
                <NewArticle onSubmit={this.addArticle} onClick={this.readArticle}/>
               <hr/>
               <Stack stack={this.state.stack} onClick={this.readArticle}/>
            </div>
        );
    }
}

