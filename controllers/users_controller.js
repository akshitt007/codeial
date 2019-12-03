const User = require('../models/user');


module.exports.profile =function(req,res){
    // res.end ('<h1> User controller </h1>');
    return res.render('user_profile',{
         title: "Profile page"
    });
}
//get the sign up data
module.exports.signUp = function(req,res){
    if(req.isAuthenticated()){
       return res.redirect('/users/profile');
    }

    return res.render('user_sign_up',{
        title: "Codeial|Sign up"
    })
}
module.exports.signIn = function(req,res){
    if(req.isAuthenticated()){
        return res.redirect('/users/profile');
    }

    return res.render('user_sign_in',{
        title: "Codeial|Sign In"
    })
}


module.exports.create = function(req,res){
    if (req.body.password != req.body.confirm_password){
        return res.redirect('back');
    }
    User.findOne({email: req.body.email},function(err,user){
       if(err){console.log('error in finding user in signing up');return}
    
    if(!user){
        User.create(req.body,function(err,user){
            if(err){console.log('error in finding user in signing up');return}

            return res.redirect('/users/sign-in');
})           
         
 } else{
            return res.redirect('back');
    }

    
});
}

//get the sign in data
module.exports.createSession = function(req,res){
    return res.redirect('/');
}

module.exports.destroySession = function(req,res){
    req.logout();
    return res.redirect('/');
}
