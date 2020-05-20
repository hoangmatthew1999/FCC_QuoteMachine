import React from 'react';
import logo from './logo.svg';
import { render, createPortal } from "react-dom";
import './App.css';
//import txt from "./data.txt";
import JSONdata from './data.json';
//import 'bootstrap/dist/css/bootstrap.min.css';
//import { faTwitter } from '@fortawesome/free-brands-svg-icons';import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const fs = require('fs')
const path = require('path')
const fs_ = require('./fs.js')

const styles = {borderWidth: "400px", background: "green", width: "400px", borderHeight: "400px" };
let data = JSONdata;
class Car extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      color: "#39D1B4",
      text: ''
    };
  }
  parseJSON = () => {
    console.log(data[Math.floor(Math.random())].text);
    let quoteTemp = data[Math.floor(Math.random() * 10)].text;
    this.setState({text: quoteTemp});
    console.log( Math.floor( Math.random() * 10) );
  



  }
  changeColor = () => {
    let random_array = ['1','2','3','4','5','6','7','8','9','0','a','b','c','d','e','f'];
    let random_index = Math.floor(Math.random() * random_array.length );
    let bgColor = `#${random_array[random_index]}${random_array[random_index]}${random_array[random_index]}${random_array[random_index]}${random_array[random_index]}${random_array[random_index]}`
    this.setState({color: bgColor});
    // fetch('/data.txt')
    // .then((r) => r.text())
    // .then(text  => {
    //   console.log(text);
    // })  
  }
  render() {
    //let randomizer = quote[1];
    return (  
        <div className = "background">
        <div id = "app" className="App" style = { {background: this.state.color} }>
          <button onClick = {this.parseJSON}>Testing text file</button>
          <button onClick = {this.changeColor}>New Quote</button>
          <a href = "https://en.wikipedia.org/wiki/Vietnamese_Americans#Income" class="fa fa-twitter"></a>
          <a href = "https://en.wikipedia.org/wiki/Vietnamese_Americans#Income" class="fa fa-tumblr"></a>
          {/*<FontAwesomeIcon icon = {faTwitter}/>*/}
          {/* {JSONdata.map((object,index)=> {return <h1>{object.text}</h1>
        })} */}
        <h1>{this.state.text}</h1>
        </div>
      </div>
    );
  }
}
export default Car;
