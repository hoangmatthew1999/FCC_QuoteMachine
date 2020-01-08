const fetch = require("node-fetch");
fetch('https://github.com/')
    .then(r => r.text() )
    // .then(t => console.log(t) )
    .catch(error => console.log(error) )


