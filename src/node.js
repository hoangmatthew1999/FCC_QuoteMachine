const fs = require('fs');

let library = [];
var data = fs.readFileSync('quotes.txt', 'utf8');
//console.log(data);
let quotes = data.split(" ");
//console.log(quotes);
for(let i = 0; i < quotes.data; i++){
    console.log(quotes[i]);
}

