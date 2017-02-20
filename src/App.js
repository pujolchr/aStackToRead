import React, {
    Component
} from 'react';
import './App.css';
import stack from '../public/stack.json';

function getNewArticle() {
    return {
        name:"newone",
        url:"don't try this at home"
    };
}

function listTheStack(article, i) {
    i++;
    return (
        <li key={"stack"+i}>
          {article.name} <a href={article.url}>{article.url}</a>
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
        return (
            <div>
              <StackHead article={this.props.stack[0]}/>
              <StackBody list={this.props.stack.slice(1)}/>
            </div>
        );
    }
}
class App extends Component {

    pushArticle(){
        let newArticle = getNewArticle();
        let newList = this.state.list.slice(0);
        newList.push(newArticle);
        this.setState({list:newList});
    }
    unshiftArticle(){
        let newArticle = getNewArticle();
        let newList = this.state.list.slice(0);
        newList.unshift(newArticle);
        this.setState({list:newList});
    }
    readArticle(){
        /* open new window */
        window.open(this.state.list[0].url);
        /* update list */
          let newList = this.state.list.slice(1);
          this.setState({list:newList});
    }
    constructor(props) {
            super(props);
            this.state = {list: stack.slice(0)};
            console.log("cons");
            console.log(this.state);
    }
    render() {
        return (
            <div>
            <button onClick={this.unshiftArticle.bind(this)}>add in top</button>
            <button onClick={this.pushArticle.bind(this)}>add in bottom</button>
            <button onClick={this.readArticle.bind(this)} >
                read
            </button>
              
            <Stack stack={this.state.list}/>
            </div>
        );
    }
}

export default App;
