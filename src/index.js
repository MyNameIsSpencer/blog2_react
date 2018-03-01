import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const poster = {
  title: "Dinotron: Ressurrection",
  author: "Mecha Rex",
  body: "His battery is at 8%, but he's giving it 110%",
  comments: [
    "First Comment",
    "Changed my LIFE!!",
    "I related so much to this robotic dinosaur"
  ]
}


ReactDOM.render(
  <App
  title = {poster.title}
  author = {poster.author}
  body = {poster.body}
  comments = {poster.comments}
  />,
   document.getElementById('root'));
registerServiceWorker();
