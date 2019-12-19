const fs = require('fs');

let quote = [];
var data = fs.readFileSync('data.txt', 'utf8');
let string = data.split(" ");
//console.log(string);
let i = 0;
let machine = "";
/*
if string includes is true
    run the code
else
    continue to concatenate
*/
while (string[i].includes("\n\n") != true){
    machine = machine + " " + string[i];
    i++
    console.log(machine);
}

machine = machine + " " + string[i]
console.log(machine)





