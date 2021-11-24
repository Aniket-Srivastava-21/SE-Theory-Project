import Course from "../model/courses.js";
import Exam from "../model/exams.js";
import TimeTable from "../model/timetable.js";


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

export let getExamDetail = async (req,res)=>{
    try {
        
        let exam = req.query.exam;
        Exam.findOne({alt : exam}, (err,found) => {
            if(err){
                console.log(err);
            }else{
                return res.status(200).json({auth: true, result : found});
            }
        })

    } catch (error) {
        console.log(error);
        
    }
}

export let getTT = async (req,res) => {
    try {
        let exam = req.query.exam;
        TimeTable.findOne({exam : exam}, (err,found)=>{
            if(err){
                console.log(err);
            }else{
                return res.status(200).json({auth:true, result : found});
            }
        })     
    } catch (error) {
        console.log(error);     
    }
}

export let checkMentor = async (req,res) => {
    try {
        
        let exam = req.query.exam;
        let subject = req.query.subject;
        Course.findOne({exam : exam, subject : subject}, (err,found) => {
            if(err){
                console.log(err);
            }else{
                if(found){
                    return res.status(200).json({ auth : true, result : found });
                }else{
                    return res.status(200).json({auth: false, msg : "No mentor assigned"});
                }
            }
        })

    } catch (error) {
        console.log(error);        
    }
}