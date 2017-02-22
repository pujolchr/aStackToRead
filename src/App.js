import React, { Component } from 'react';
import './App.css';
import Stack from './Stack'
import ControlButton from './ControlButton'

//import stack from '../public/stack.json';


function getNewArticle() {
    alert("ask for a new article");
    return { name: "new one",
             url:  "#" };
}

class App extends Component {

    // Click handler
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
    }

    componentWillUpdate() {
    }

    render() {
            // all the button in a <ControlZone/> ?
        return (
            <div>
               <hr/>
                <input type="textarea" />
                <ControlButton text="add on top" onClick={(e) =>this.unshiftArticle(e)}/>
                <ControlButton text="add on bottom"  onClick={(e) =>this.pushArticle(e)}/>
               <hr/>
                <ControlButton text="read" onClick={this.readArticle}/>
                <ControlButton text="save" onClick={(e) =>this.saveStack(e)}/>
               <hr/>
                
                <Stack stack={this.state.list}/>
            </div>
        );
    }
}

export default App;
