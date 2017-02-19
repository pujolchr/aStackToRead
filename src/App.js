import React, {
    Component
} from 'react';
import './App.css';
import stack from '../public/stack.json';

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

class FirstInLine extends Component {

    render() {
        return (
                <h2>first</h2>
               );
    }
}

class NextInLine extends Component {
    render() {
        return (
                <ul>
                    Line
                </ul>
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
                <div>
                    <FirstInLine />
                    <NextInLine />
                    ldfkjsl
                </div>
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
