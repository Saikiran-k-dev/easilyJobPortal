export const auth = (req,res,next)=>{
    if(req.session.userName){
        console.log(req.session)
        next()
      } else {
        res.redirect("/failure")
      }

} 