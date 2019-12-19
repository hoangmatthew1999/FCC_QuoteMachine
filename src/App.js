import React from 'react';
import logo from './logo.svg';
import { render } from "react-dom";
import './App.css';
import './quotes.js';

import 'bootstrap/dist/css/bootstrap.min.css';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const fs = require('fs')
const path = require('path')
const fs_ = require('./fs.js')

const styles = {borderWidth: "400px", background: "green", width: "400px", borderHeight: "400px" };
class Car extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      color: "#39D1B4",
    };
  }
  changeColor = () => {
    let random_array = ['1','2','3','4','5','6','7','8','9','0','a','b','c','d','e','f'];
    let random_index = Math.floor(Math.random() * random_array.length );
    let bgColor = `#${random_array[random_index]}${random_array[random_index]}${random_array[random_index]}${random_array[random_index]}${random_array[random_index]}${random_array[random_index]}`
    this.setState({color: bgColor});
  }
  render() {
    console.log(data.slice(0,14));
    return (
        <div className = "background">
        <div id = "app" className="App" style = { {background: this.state.color} }>
          <button onClick = {this.changeColor}>New Quote</button>
          <a href = "https://en.wikipedia.org/wiki/Vietnamese_Americans#Income" class="fa fa-twitter"></a>
          <a href = "https://en.wikipedia.org/wiki/Vietnamese_Americans#Income" class="fa fa-tumblr"></a>
          <FontAwesomeIcon icon = {faTwitter}/>
        </div>
      </div>
    );
  }
}
export default Car;
