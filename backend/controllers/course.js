import Course from "../model/courses.js"
import User from "../model/users.js";
import Invoice from "../model/invoice.js"
import pdf from "html-pdf";
import fs from "fs";
const options  = {format : 'A4'};

export let getCourseDetails = async (req,res) => {
    try {
        let subject = req.query.sub;
        let exam = req.query.exam;
        Course.findOne({subject : subject, exam : exam}, (err,course)=>{
            if(err){
                console.log(err);
            }else{
                if(course){
                    return res.status(200).json({auth:true, result : course});
                }else{
                    return res.status(200).json({ auth: false, msg : "No course exist" })
                }
            }
        })        
    } catch (error) {
        console.log(error);        
    }
}

export let enrollSuccess = async (req,res) =>{
    try {
        let course = req.body.course;
        let user1 = req.body.user;
        User.findById(user1._id, (err,user) =>{
            if(err){
                console.log(err);
            }else{
                user.exam = course.exam;
                let obj = {
                    subjectName : course.subject,
                    CourseID : course._id,
                };
                user.courses.push(obj);
                user.save();
                Course.findById(course._id,(err,found)=>{
                    if(err){
                        console.log(err);
                    }else{
                        found.studentList.push(user._id);
                        found.save();
                        let invoice = new Invoice({
                            userID : user._id,
                            courseID : found._id
                        });
                        invoice.save();
                        return res.status(200).json({auth: true, result : invoice});
                    }
                })
            }
        })
        
    } catch (error) {
        console.log(error);        
    }
}

export let generatePDF = async (req,res) => {
    try {
        let course = req.body.course;
        let user = req.body.user;
        let transID = req.body.transID;
        let method = req.body.method;

        res.render("paydone", {course : course, user: user, paymentType : method, transID : transID}, async (err,html) => {
            let fn = './public/uploads/'+ transID + '.pdf';
            await pdf.create(html,options).toFile(fn,(err,result)=>{
                if(err){
                    console.log(err);
                }else{
                    var file = fs.readFileSync(fn);
                    
                    res.header('content-type','application/pdf');
                    console.log('receipt generated');
                   // res.send(file);
                    
                //    return res.status(201).json({auth:true, result : file});
                }
            });
        });
        
    } catch (error) {
        console.log(error);        
    }
}

export let getStudentDetails = async (req,res) =>{ 
    try {
        
        let id = req.query.id;
        Course.findById(id,(err,found)=>{
            if(err){
                console.log(err);
            }else{
                User.find({}).where('_id').in(found.studentList).exec((err, records) => {
                    if(err){
                        console.log(err);
                    }else{
                        console.log(records);
                        return res.status(201).json({auth:true, result: records});
                    }
                });
            }
        })
        

    } catch (error) {
        console.log(error);
        
    }
}

export let addCourse = async (req,res) =>{
    try {
        
        console.log(req.body);
        console.log(req.files);
        let id = req.user;
        User.findById(id, (err,user)=>{
            if(err){
                console.log(err);
            }else{
                user.exam = req.body.exam;
                user.save();
                let course = new Course({
                    exam : req.body.exam,
                    subject : req.body.subject,
                    mentor : req.body.mentor,
                    desc : req.body.desc,
                    coursePlan : req.files.file,
                    Fees : req.body.fees,
                    slots : req.body.slots,
                });
                course.save();
                return res.status(200).json({auth: true, result : course});
            }
        })
        

    } catch (error) {
        console.log(error);
        
    }
}