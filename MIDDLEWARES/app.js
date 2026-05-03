
const express  = require("express");
const app = express();
const ExpressError = require("./ExpressError");

//middlewares

// app.use((req,res, next) => {
    
//   console.log(" 1st middleware working");
  
//   next();
// });


// app.use((req,res, next) => {
    
//   console.log(" 2nd middleware working");
  
//   next();
// });

// //logger
// app.use((req,res,next) => {
//     req.time = new Date(Date.now()).toString();
//     console.log(req.method,req.hostname, req.path, req.time)
//     next();
// });

const checkToken = (req,res, next) => {

 let {token} = req.query;
 if (token === "giveaccess")  {
   next();
 }
 throw new ExpressError(401,"ACCESS DENIED!");
};

app.get("/api",checkToken,(req, res) => {
    res.send("data");
});

app.use("/random", (req,res,next) => {
    console.log("i am onnly for random ");
    next();
});


app.get("/",(req,res) => {
    res.send("hii iam root");

});

app.get("/random", (req,res) => {
    res.send("this is an random page");
});


app.get("/err",(res,req) => {
   abcd=abs
});

app.get("/admin", (req,res) => {
    throw new ExpressError(403, "Access to admin is forbidden");
});

app.use((err,req,res,next) => {
 let {status = 500, message ="Some error occured"} = err;
 res.status(status).send(message);
})

app.use((err,req,res,next) => {
 console.log("------------ERROR 502--------------"); 
 next(err);
})


//   
app.listen(8080, () => {
    console.log("server listening to port 8080");
});