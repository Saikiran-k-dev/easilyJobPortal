export default class JobsModel{
    constructor(id,name,pp,tech,address,salary,appliedBy,noOA,skills){
        this.id = id  
        this.name = name
        this.pp = pp
        this.tech = tech
        this.address = address
        this.salary = salary
        this.appliedBy = appliedBy
        this.noOA = noOA
        this.skills = skills
        
    }
    static getAll(){
        if(jobList.length==0){
            return null
        }
        else{
            return jobList
        }
    }
    static getJobData(id){
        if(this.getAll()!=null){
            const data = jobList.find((jobData)=>jobData.id==id)
            return data
        }
        else{
            return null;

        }
    }
    static addJob(name,pp,tech,address,salary,appliedBy,noOA,skills){
        console.log(name,pp)
        const newPost = new JobsModel(jobList.length+1,name,pp,tech,address,salary,appliedBy,noOA,skills)
        jobList.push(newPost)
    }
    static update(id,data){
        const index = jobList.findIndex(p=>p.id==data.id)
        const updatedList = new JobsModel(parseInt(data.id),data.company_name,data.job_category,data.job_designation,data.job_location,data.salary,data.apply_by,data.number_of_openings,data.skills_required)
        // console.log(jobList)
        jobList[index] = updatedList
        // console.log(jobList)
    }
    static delete(id){
        const index = jobList.findIndex(p=>p.id==id)
        jobList.splice(index,1)
    }
}

const jobList = [new JobsModel(1,"Coding Ninjas","Tech","SDE","Gurgaon HR IND Remote","14-20lpa","30 Aug 2023","5",["REACT","NodeJs","JS","SQL","MongoDB","Express","AWS"]),
new JobsModel(2,"Go Digit","Tech","Angular Developer","Pune IND on-Site","6-10lpa","30 Aug 2023","5",["Angular","JS","SQL","Mongo"]),
new JobsModel(3,"Juspay","Tech","SDE","Bangalore IND","20-26lpa","30 Aug 2023","5",["REACT","NodeJs","JS","SQL","MongoDB","Express","AWS"])
]