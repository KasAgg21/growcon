const express=require("express");
const mongoose=require('mongoose');
const cros=require("cors");
const {dburl}=require("./dbconfig/dbconfig")
var fileuploader = require("express-fileupload");
var bodyparser=require("body-parser");

const app=express();

const routergrower=require("./routers/grower");
const routeruser=require("./routers/user_sen");
const routerprod=require("./routers/item")


app.use("/public", express.static("public"));
app.use("/uploads", express.static("uploads"));
app.use(express.urlencoded({extended:true}));
app.use(cros());
app.use(fileuploader());
app.use(bodyparser.json());

const server=dburl;

//Connecting Database
mongoose.connect(server).then(()=>{
    console.log("Connected to Database")
}).catch(function(err){
    console.log(err)
})

//Port
app.listen(2007,function()
{
    console.log("Server Started at 2007")
})

//Declaring a parent
app.use("/grower",routergrower)

app.use("/user",routeruser)

app.use("/prod",routerprod)