import React, { Component } from 'react';
import './App.css';

//import stack from '../public/stack.json';

var newStack;
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
    alert("ask for a new artyicle");
    return { name:"new one",
             url:"#" };
}

function listTheStack(article, i) {

    i++;
    return (<li key={"stack"+i}>
              <strong>{article.name}</strong> {article.url}
            </li>);
}

class StackBody extends Component {

    render() {
        return (
            <ul>
              {this.props.list.map(listTheStack)}
            </ul>
        );
    }
}
class StackHead extends Component {

    render() {
        return (
            <h2 key={"stack-head"}>
              {this.props.article.name}<br/>
              <a href={this.props.article.url}>
                {this.props.article.url}
              </a>
            </h2>);}
}

class Stack extends Component {

    render() {
        if (this.props.stack.length === 0) {
            return (
                <div>
                  <h1>
                    Nothing in you stack
                  </h1>
                </div>);
        };

        let head = this.props.stack[0];
        let body = this.props.stack.slice(1);

        return (
            <div>
              <StackHead article={head}/>
              <StackBody list={body}/>
            </div>
        );
    }
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
                    <button onClick={(e) =>this.readArticle(e)}>
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
