const mongoosse = require('mongoose');

//mongoDB is already installed in my system

mongoosse.connect('mongodb://localhost/codeial_developement');

const db =mongoosse.connection;

db.on('error', console.error.bind(console ,"Error connecting to mongoDB"));
db.once('open',function(){
console.log("connect to database :: MongoDB");

});

module.exports =db;