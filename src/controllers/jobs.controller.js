import JobsModel from "../models/jobs.models.js"
import ApplicantModel from "../models/applicant.model.js";

export  default class JobController{
    getJob(req,res){
        const jobLists = JobsModel.getAll()
        // console.log(jobLists)
        res.render("jobs",{jobLists:jobLists})
    }
    getJobdata(req,res){
        const id = req.params.number;
        // console.log(id);
        const jobDetails = JobsModel.getJobData(id)
        const applicantCount = ApplicantModel.getApplicantCount(id)
        // console.log(jobData)

        if(req.session.userName){
            const user = req.session.userName
            res.render("jobview",{jobDetails:jobDetails,applicantCount,user})
        } else {
        res.render("jobview",{jobDetails:jobDetails,applicantCount,user:null})
        }
        
    }
    getPost(req,res){
        
        res.render("postjob")
    }
    postPost(req,res){
        // console.log(req.body)
        JobsModel.addJob(req.body.company_name,req.body.job_category,req.body.job_designation,req.body.job_location,req.body.salary,req.body.apply_by,req.body.number_of_openings,req.body.skills_required)
        const jobLists = JobsModel.getAll()
        // console.log(jobLists)
        res.render("jobs",{jobLists:jobLists})
    }

    getUpdate(req,res){
        const id = req.params.id;
        const jobDetails = JobsModel.getJobData(id)
        console.log(jobDetails)
        res.render("updateJob",{jobDetails:jobDetails})
    }
    updateJob(req,res){
        const id = req.params.id;
        const jobDetails = JobsModel.update(id,req.body)
        const jobLists = JobsModel.getAll()
        // console.log(jobLists)
        res.render("jobs",{jobLists:jobLists})
        
    }
    getDelete(req,res){
        const id = req.params.id
        JobsModel.delete(id)
        const jobLists = JobsModel.getAll()
        // console.log(jobLists)
        res.render("jobs",{jobLists:jobLists})
    }
}