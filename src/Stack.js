import React from 'react';


function listTheStack(article, i) {

    i++;
    return (
        <li key={"stack"+i}>
          <strong>{article.name}</strong> {article.url}
        </li>
    );
}


function StackBody(props) {
    return (
        <ul className="text-center list-unstyled">
          {props.list.map(listTheStack)}
        </ul>
    );
}

class StackHead extends React.Component {

    constructor(props) {
            super(props);
            this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event) {
        console.log("eee");
        this.props.onClick();
    }

    render() {
        return (
            <span key="stack-head"
                  className="text-center"
                  onClick={this.handleClick}
                  style={{cursor:"pointer", color:"red"}}>

              <h2>{this.props.article.name} 
                <small>{this.props.article.url}</small>
              </h2>
            </span>
        );
    }
}

function Stack(props) {
        if (props.stack.length === 0) {
            return (
                <div>
                  <h1>
                    Nothing in your stack
                  </h1>
                </div>
            );
        };

        let head = props.stack[0];
        let body = props.stack.slice(1);

        return (
            <div>
              <StackHead article={head} onClick={props.onClick}/>
              <StackBody list={body}/>
            </div>
        );
}

export default Stack;
