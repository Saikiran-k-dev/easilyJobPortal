export default class UserModel{
    constructor(id,name,email,password){
        this.id=id
        this.name=name
        this.email=email
        this.password = password
    }

    static registerUser(name,email,password){
        const userEntry = new UserModel(userData.length+1,name,email,password)
        userData.push(userEntry)
        console.log(userData)
    }

    static isValidUser(email,password){
        const user = userData.find(u=>u.email==email && u.password==password)
        if (user){
            return user
        } else {
            return null
        }
    }
}

var userData = [new UserModel( 1,  'sai', 'sai@g.c',  'sai')]