import React from 'react';
import logo from './logo.svg';
import './App.css';
import { SSL_OP_TLS_ROLLBACK_BUG } from 'constants';
const fs = require('fs')
const path = require('path')
const fs_ = require('./fs.js')

const styles = {borderWidth: "400px", background: "green", width: "400px", borderHeight: "400px" };
/*
function App() {
  const colors = ['red','blue','green','magenta','pink','purple',]
    return (
      <div className = "background">
        <div id = "app" className="App" style = { {background: this.state.color} }>
          <button onClick = {this.randomColor}>New Quote</button>
        </div>
      </div>
    );
}
function changingColor(){
  console.log('hi');
  const a = document.querySelector("#app");
  console.log(a);
}
function BuildingQuotes(){
  fs.readFile( 
    path.join(__dirname, '../output.txt'),{encoding: 'utf-8' },
function(error,data){if(error)
    return console.error(error)
    console.log(data)} 
)
}
*/
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
    return (
        <div className = "background">
        <div id = "app" className="App" style = { {background: this.state.color} }>
          <button onClick = {this.changeColor}>New Quote</button>
        </div>
      </div>
    );
  }
}
export default Car;
