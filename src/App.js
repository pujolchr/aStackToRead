import React, { Component } from 'react';
import './App.css';
import Stack from './Stack'
import ControlButton from './ControlButton'

//import stack from '../public/stack.json';

var newStack;
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




function getNewArticle() {
    alert("ask for a new article");
    return { name:"new one",
             url:"#" };
}

class App extends Component {

    saveStack() {
        localStorage.setItem('stack', JSON.stringify(this.state.list));
    }

    pushArticle() {
        let newArticle = getNewArticle();
        let newList = this.state.list.slice(0);
        newList.push(newArticle);
        this.setState({list:newList});
    }

    unshiftArticle() {
        let newArticle = getNewArticle();
        let newList = this.state.list.slice(0);
        newList.unshift(newArticle);
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
            this.state = {list: newStack.slice(0)};
    }

    render() {
        /* TODO pass buttons in an child element */
        return (
            <div>
                <ControlButton text="read" onClick={this.readArticle}/>
                <hr/>
               <div>
                    <button onClick={(e) =>this.saveStack(e)}>
                      save
                    </button>
                    <button onClick={(e) =>this.unshiftArticle(e)}>
                      add in top
                    </button>
                    <button onClick={(e) =>this.pushArticle(e)}>
                      add in bottom
                    </button>
                    <button onClick={(e) =>this.readArticle()}>
                    read
                    </button>
                </div>

               <hr/>
                <Stack stack={this.state.list}/>
            </div>
        );
    }
}

export default App;
