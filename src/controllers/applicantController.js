import JobsModel from "../models/jobs.models.js"
import ApplicantModel from "../models/applicant.model.js"
import nodemailer from "nodemailer"

export default class ApplicantController{
    postApplicantDetails(req,res){
        const applicantData = req.body
        const resumeUrl =  'resumes/'+req.file.filename
        // console.log(resumeUrl)
        // console.log(applicantData)
        ApplicantModel.addApplicant(req.body.id,req.body.name,req.body.email,req.body.contact,resumeUrl)
        // ApplicantModel.getApplicant(req.body.id)
        const jobLists = JobsModel.getAll()
        const transporter = nodemailer.createTransport({
            service:"gmail",
            auth:{
              user:"codingninjas2k16@gmail.com",
              pass:"slwvvlczduktvhdj"
            },
          }) ;
          const mailOptions = {
            from: "codingninjas2k16@gmail.com", // Sender's email address
            to: req.body.email, // Recipient's email address (can be an array for multiple recipients)
            subject: `${req.body.jobName}`, // Subject of the email
            text: `Hi ${req.body.name},\n\nWe received your application for the job in "${req.body.jobName}".\n\nThank you for applying!\n\nBest regards,\n${req.body.jobName}`, // Email body text
          };
          try {
            const result =  transporter.sendMail(mailOptions);
            console.log("Success Email sent to "+req.body.email)
          } catch (error) {
            console.log("mail not sent"+error)
          }
        res.render("jobs",{jobLists:jobLists})
    }
    getApplicant(req,res){
        const applications = ApplicantModel.getApplicant(req.params.id)
        // console.log(req.params.id)
        console.log(applications)
        if(applications){
        res.render("application",{applications:applications})
        } else {
            res.render("application",{applications:null})
        }
    }
}