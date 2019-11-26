const express = require('express');
const app = express();
const port = 8000;

//express layout library 
const expressLayouts = require('express-ejs-layouts');

//use express layouts and it should be before views
app.use(expressLayouts);
 
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