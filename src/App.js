import React, {
    Component
} from 'react';
import './App.css';
import stack from '../public/stack.json';

function listTheStack(article, i) {
    if (i === 0) return (
        <h2 key={"stack" + i}>
            <a href={article.url}>{article.name} {article.url}</a>
        </h2>);

    return (
        <li key={"stack" + i}>
            <a href={article.url}>{article.name} {article.url}</a>
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


class Stack extends Component {
    constructor(props) {
            super(props);
            this.state = {"stack": stack}
            }

    render() {
        return (
                <ul>
                    {this.state.stack.map(listTheStack)}
                </ul>
                );
    }
}
class App extends Component {
    render() {
        return ( <div>
            <Control />
            <Stack />
            </div>
        );
    }
}

console.log(stack);
export default App;
