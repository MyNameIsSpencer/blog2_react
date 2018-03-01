import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Post from './Post.js';
import Comment from './Comment.js';
import Author from './Author.js';

class App extends Component {
  constructor(props) {
    super()
    this.state={
      body: props.body
    }
  }

  changeBody(e) {
    let newBody = prompt("God dammnit, just put something here");
    this.setState({
      body: newBody
    })
  }

  render() {
    let comments = this.props.comments.map(comment =>
      <Comment commentBody= {comment}/>
    )

    // let comments = this.props.comments.map(function (comment) {
    //   return <Comment commentBody= {comment}/>
    // })

    return(

      <div>
        <h1> {this.props.title} </h1>
        <h2 className="slogan"> {this.state.body} </h2>
        <button className="bodyButton" onClick={(e) => this.changeBody(e)}> Click for Happy </button>
        <h2> {this.props.author} </h2>
        <h2> COMMENTS: </h2>
        <pre>{comments}</pre>

        <style> {`
          .slogan {
            color: dodgerblue;
            text-shadow: 10px 10px 3px lavender;
          }
          `}</style>

        <style> {`
          .bodyButton {
            font-size: 20px;
            border-width: 5px;
            border-style: inset;
            border-background: lightgrey;
          }
          `} </style>
      </div>
    )
  }
}

export default App;
