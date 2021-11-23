import Exam from "../model/exams.js";


export let addExam = async (req,res) => {
    try {
        console.log(req.body);
        
        let exam = new Exam({
            name : req.body.name,
            desc : req.body.desc,
            subjects : req.body.sub,
            alt : req.body.alt,
            startDate : req.body.startDate,
            endDate : req.body.endDate,
        })
        exam.save();
        return res.status(200).json({auth:true, result : exam});
                
    } catch (error) {
        console.log(error);
    }
}

export let getExams = async (req,res) =>{
    try {
        Exam.find({}, (err,results)=>{
            if(err){
                console.log(err);
            }else{
                console.log(results);
                return res.status(200).json({auth :true, result : results});
            }
        })        
    } catch (error) {
        console.log(error);
        
    }
}