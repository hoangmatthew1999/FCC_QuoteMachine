import React from 'react';
import logo from './logo.svg';
import './App.css';
const fs = require('fs')

const styles = {borderWidth: "400px", background: "green", width: "400px" };

function App() {
  return (
    <div className="App">
      <div style = {{styles}}>
        <button>New Quote</button>
      </div>
    </div>
  );
}
/*
function BuildingQuotes(){
  fs.readFile('quotes.txt', (err, data) => { 
    if (err) throw err; 
  
    // Converting Raw Buffer to text 
    // data using tostring function. 
    );
}
*/
export default App;
