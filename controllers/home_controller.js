module.exports.home =function(req,res){
     //res.end ('<h1> Express is up for website </h1>');
     console.log(req.cookies);
     res.cookie('user_id', 25);
    return res.render('home',{
         title:"Home"
    });



}