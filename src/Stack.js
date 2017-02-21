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
        <ul>
          {props.list.map(listTheStack)}
        </ul>
    );
}

function StackHead(props) {

        return (
            <h2 key={"stack-head"}>
              {props.article.name}<br/>
              <a href={props.article.url}>
                {props.article.url}
              </a>
            </h2>
        );
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
              <StackHead article={head}/>
              <StackBody list={body}/>
            </div>
        );
}

export default Stack;
