import express from "express"
import path from "path"
import ejsLayout from "express-ejs-layouts"
import HomepageController from "./src/controllers/home.controller.js"
import JobController from "./src/controllers/jobs.controller.js"
import ApplicantController from "./src/controllers/applicantController.js"
import { uploadFile } from "./src/middleware/resume.middleware.js"
import UserController from "./src/controllers/user.controller.js"
import session from "express-session"
import { auth } from "./src/middleware/auth.middleware.js"

const jobController = new JobController
const homepageController = new HomepageController()
const applicantController  =  new ApplicantController
const userController = new UserController
const app = express()

app.use(session({
  secret:"key",
  resave:false,
  saveUninitialized:true,
  cookie:{secure:false}
}))
// To convert req . body data into readable form 
app.use(express.urlencoded({extended:true}))
 
// saying am gonna use ejslayout here
app.use(ejsLayout)
app.use(express.static("images"))

// Setting the view engine and path for views
app.set("view engine","ejs")
app.set("views",path.join(path.resolve(),"src","views"))


// getting the request
app.get("/", homepageController.getHomepage)
app.get("/jobs",jobController.getJob)
app.get("/job/:number",jobController.getJobdata)
app.get("/login",userController.getLogin)
app.get("/postjob",auth,jobController.getPost)
app.get("/failure",userController.getFailure)
app.get("/logout",userController.getLogout)
app.get("/job/applicants/:id",auth,applicantController.getApplicant)
app.get("/job/update/:id",auth,jobController.getUpdate)
app.get("/job/delete/:id",auth,jobController.getDelete)
// Posting the request
app.post("/apply/:id",uploadFile.single("resume"), applicantController.postApplicantDetails)
app.post("/register", userController.postRegister)
app.post("/login",userController.postLogin)
app.post("/job",auth,jobController.postPost)
app.post("/updateJob/:id",auth,jobController.updateJob)

app.use(express.static("src/views"));
app.use(express.static("public"))


app.listen(3200, () => {
    console.log("Server is listening at port 3200");
  });

