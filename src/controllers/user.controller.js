import UserModel from "../models/user.model.js"

export default class UserController{
    postRegister(req,res){
        const {name,email,password} = req.body
        UserModel.registerUser(name,email,password)
        // console.log(userDetails)
        res.render("login",{message:null})

    }

    getLogin(req,res){ 
        res.render("login",{message:null})
    }

    postLogin(req,res){
        const {email,password} = req.body
        const user = UserModel.isValidUser(email,password)
        if(user){
        req.session.userName = user.name;
        res.render("homePage",{name:user.name})

        } else {
            res.render("login",{message:"Invalid UserName or Password"})
        }
    }
    getLogout(req,res){
        req.session.destroy((err)=>{
            if (err){
                console.log(err)
            }
            else{
                res.redirect("/login")
            }
        })
    }
    getFailure(req,res){
        res.render("failure")
    }

   
}