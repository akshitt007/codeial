const User = require('../models/user');


module.exports.profile =function(req,res){
    // res.end ('<h1> User controller </h1>');
    return res.render('user_profile',{
         title: "Profile page"
    });
}

module.exports.signUp = function(req,res){
    return res.render('user_sign_up',{
        title: "Codeial|Sign up"
    })
}
module.exports.signIn = function(req,res){
    return res.render('user_sign_in',{
        title: "Codeial|Sign In"
    })
}

//get the sign up data
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
    //steps to authenticate
    //find the user
    User.findOne({email: req.body.email},function(err,user){
        if(err){console.log('error in finding user in signing ip');return}
        //handle user found
        if (user){
                 //password which doesn't match
                 if(user.password != req.body.password){
                 return res.redirect('back');
                 }
                 //handle session creation
                 res.cookie('user_is',user.id);
                 return res.redirect('/users/profile');

                }
        else{
                 //user not found
                 return res.redirect('back');


        }
    });
}