const { json } = require("express");
const { getusermodel } = require("../models/user_sen_model")
const { error } = require("console");

const user_sen_model = getusermodel();


function doadduser(req,resp)
{
    const udoc=new user_sen_model(req.body);
    udoc.save().then((retDoc)=>{
        resp.set(json);
        resp.json({status:true,retDoc});
    })
}

function dologin(req,resp){
    console.log(req.query.email);
    const email= req.query.email;
    const pass=req.query.pass;
    user_sen_model.find({email:email,pass:pass})
        .then((result)=>{
            if(result[0].allowence==0){
                resp.json({status:true});
            }else if(result[0].allowence==2){
                resp.json({status:"pending"});
            }else if(result[0].allowence==1){
                resp.json({status:false});
            }
        })
        .catch((error)=>{
            resp.json({status:"fail",msg:error.message});
        })
}

module.exports = { doadduser,dologin };