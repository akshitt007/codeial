const express = require('express');
const app = express();
const port = 8000;
const db = require('./config/mongoose');

//express layout library 
const expressLayouts = require('express-ejs-layouts');

//use express layouts and it should be before views
app.use(expressLayouts);

//extract style and scripts for subpages from layout
app.set('layout extractStyles',true);
app.set('layout extractScripts',true);
 
//use static files
app.use(express.static('./assets'));

//use express router
app.use('/',require('./routes'));

//setup view engine ejs
app.set('view engine', 'ejs');
app.set('views', './views');




 
app.listen(port,function(err){
    if(err){
        console.log(`Error in running the server ${err}`);
    }
    console.log(`server is running on port: ${port}`);

});