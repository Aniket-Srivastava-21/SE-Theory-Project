import User from "../model/users.js";
import jwt from "jsonwebtoken";

export let registerUser = async (req,res) => {
    try {
        let email = req.body.email;
        let name = req.body.name;
        let username = req.body.username;
        let password = req.body.password;
        let cpassword = req.body.cpassword;
        let role = req.body.role;
        //console.log(req.body);

        if(cpassword == password){
            User.findOne({email: email, role : role}).then((user)=>{
                if(user){
                    return res.status(201).json({auth:false,msg:"email already exists!!"});
                }else{
                    User.findOne({username : username}, (err,found)=>{
                        if(err){
                            console.log(err);
                        }else if(found){
                            return res.status(201).json({auth:false,msg:"username already exists!!"});
                        }else{
                            const user = new User({
                                email: email,
                                username: username,
                                name : name,
                                role : req.body.role,
                            });
                            user.password = user.generateHash(password);
                            user.save();
                            console.log(user);
                            const id = user._id;
                            const token = jwt.sign({id},"jwtSecret");
                            req.session.user = user;
                            return res.status(200).json({result: user, auth: true, token: token});

                        }
                    })
                    
                }
            });     
        }else{
            console.log("Passwords not matching");
            return res.status(201).json({auth: false, msg : "Passwords are not matching!!"});
        }
        
    } catch (error) {
        console.log(error);
        res.status(404).send('Error');        
    }
}

export let loginUser = async (req,res) => {
    try {
        let email = req.body.email;
        User.findOne({email: email}).then((result)=>{        
            if(result){
                if(!result.validPassword(req.body.password)) {
                    console.log('Incorrect password');
                    res.status(201).json({auth:false, msg: "Incorrect password"});
                  } else {
                      console.log(result);
                      const id = result._id;
                      const token = jwt.sign({id},"jwtSecret");
                      req.session.user = result;
                    return res.status(200).json({result: result, auth: true, token: token});
                  }
            }else{
                return res.status(201).json({auth:false, msg:"email doesn't exists!!"});
            }

        }).catch((err)=>console.log(err));
        
    } catch (error) {
        console.log(error);
        res.status(404).json({auth: false});        
    }
}