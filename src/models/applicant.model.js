export default class ApplicantModel{
    constructor(jobId,applicantID,name,email,contact,resume){
        this.jobId = jobId
        this.applicantID = applicantID
        this.name = name
        this.email = email
        this.contact = contact
        this.resume = resume
    }

    static addApplicant(jobId,name,email,contact,resume){
        const applicant = new ApplicantModel(jobId,applicantLists.length+1,name,email,contact,resume)
        applicantLists.push(applicant)
        // console.log(applicantLists)

    }
    static getApplicant(jobId){

        const applicantDetails = []
        applicantLists.forEach(element => {
            if(element.jobId==jobId){
                applicantDetails.push(element)
            }
        
        
        });
        console.log(applicantDetails)
        return applicantDetails
    }
    static getApplicantCount(id){
        const lengthForJobId1 = applicantLists.filter(element => element.jobId === id).length;
        return lengthForJobId1
    }
}
const applicantLists = []