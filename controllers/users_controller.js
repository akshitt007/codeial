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