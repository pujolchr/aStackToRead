import React, { Component } from 'react';
import './App.css';
import Stack from './Stack'
import NewArticle from './NewArticle'


class App extends Component {

    // Click handler

    addArticle(newUrl, bottom) {
        // set the title
        const newArticle = { name: "new",
                             url: newUrl};

        let newList = this.state.list.slice(0);
        if (bottom) {
            newList.push(newArticle);
        } else {
            newList.unshift(newArticle);
        }
        this.setState({list:newList});
    }

    readArticle() {
        /* open new window */
        console.log(this);
        window.open(this.state.list[0].url);
        /* update list */
          let newList = this.state.list.slice(1);
          this.setState({list:newList});
    }

    constructor(props) {
            super(props);

            let  newStack;

            // Local Storage
            if (typeof(Storage) !== "undefined") {
                // Code for localStorage/sessionStorage.
                newStack = localStorage.getItem("stack");
                newStack = JSON.parse(newStack);
            } else {
                // Sorry! No Web Storage support..
                alert("Local storage not suported");
                newStack = [];
            }


            this.state = {list: newStack.slice(0)};
            this.readArticle = this.readArticle.bind(this);
            this.addArticle = this.addArticle.bind(this);
    }

    componentDidUpdate() {
        localStorage.setItem('stack', JSON.stringify(this.state.list));
    }

    render() {
            // all the button in a <ControlZone/> ?
        return (
            <div className="container well">
               <hr/>
                <NewArticle onSubmit={this.addArticle} onClick={this.readArticle}/>
               <hr/>
               <Stack stack={this.state.list} onClick={this.readArticle}/>
            </div>
        );
    }
}

export default App;
