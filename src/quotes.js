import React from 'react';
import {readFileSync} from "react";
const fs = require('fs');


let quote = [];
var data = fs.readFileSync('data.txt', 'utf8');
let string = data.split(" ");
let i = 0;
let machine = "";
/*
if string includes is true
    run the code
else
    continue to concatenate
*/
for(i in string){
    if(string[i].includes("\n\n")){
        machine = machine + " " + string[i];
        i++
        //console.log(machine);
        quote.push(machine);
        machine = "";
    }
    else{
        machine = machine + " " + string[i];
        i++;
    }
}

console.log(quote[Math.floor(Math.random() * 10)]);

class Randomizer extends React.Component {
    render() {
    let generator = quote[0];
      console.log(quote[1]);
      return (
          <div>
              <h1>ad</h1>
          </div>
      );
    }
  }
  export default Randomizer;



