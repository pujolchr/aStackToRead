import React, {
    Component
} from 'react';
import './App.css';
import stack from '../public/stack.json';

function listTheStack(article, i) {
    return (
        <li key={"stack" + i}>
            {article.name} <a href={article.url}>{article.url}</a>
        </li>);
}

class Control extends Component {
    render() {
        return ( <div>
            <button>add in top</button>
            <button>add in bottom</button>
            <button>read</button>
            </div>
        );
    }
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
        {console.log(this.props)}
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
    render() {
        return ( <div>
            <Control />
            <Stack stack={stack}/>
            </div>
        );
    }
}

console.log(stack);
export default App;
