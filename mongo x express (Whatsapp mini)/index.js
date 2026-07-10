const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const Chat = require("./models/chat.js");
const methodOverride = require("method-override")
const  ExpressError = require("./ExpressError");

app.set("views",path.join(__dirname,"views"));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname,"public")));
app.use(express.urlencoded({extended: true}));
app.use(methodOverride("_method"));



main()
.then(() => {
    console.log("connection sucessfull")
}).catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/fakewhatsapp');

 
}


//INDEX ROUTE 
app.get("/chats", async (req, res) => {
    try {
     let chats = await Chat.find();
 //console.log(chats);
 res.render("index.ejs",{chats});
    } catch (err) {
        next(err);
    }


});



//NEW ROUTE  
app.get("/chats/new", (req,res) => {
   // throw new  ExpressError(404, "page not found");
    res.render("new.ejs");
      
});

//CREATE ROUTE 
app.post("/chats",
    
    asyncWrap( async  (req,res, next) => {
            let{from, to, msg} = req.body;
    let newChat =new Chat({
        from: from,
        to: to,
        msg: msg,
        created_at: new Date(),
    });
    await newChat.save();
    res.redirect("/chats");
    }  
    
  
    
));


function asyncWrap(fn) {
     return function(req, res, next) {
        fn(req, res, next).catch((err) => next(err));
     };
}

/////////////////////NEW-SHOW ROUTE/////////////////////////// 
app.get("/chats/:id", 
    
    asyncWrap( async (req, res, next) => {
    let {id} = req.params;
    let chat = await Chat.findById(id);
    if(!chat) {
    next(new ExpressError(404,"Chat not found"));
 }
   res.render("edit.ejs",{chat});
}));

//////////////////////EDIT ROUTE///////////////////////// 
app.get("/chats/:id/edit", async (req,res) => {
    
   try {
       let { id } = req.params;
    let chat = await Chat.findById(id);

    res.render("edit.ejs" ,{chat});
   } catch(err) {
    next(err);
   }
   
});

//////////////UPDATE ROUTE ////////////////
app.put("/chats/:id", 

    asyncWrap( async (req,res) => {  
         let { id } = req.params;
     let { msg:newmsg } = req.body;
     let updatedchat = await Chat.findByIdAndUpdate(
         id,
         {msg: newmsg},
        {runValidators : true, new: true}
     );
     console.log(updatedchat);
     res.redirect("/chats");
}));
 ////////////////DESTORY ROUTE //////////////////
app.delete("/chats/:id", 
    
    asyncWrap(async (req,res) => {
        let { id } = req.params;
      let deletechat= await Chat.findByIdAndDelete(id);
      console.log(deletechat);
      res.redirect("/chats");   
    
    }));


app.get("/",(req,res) => {
    res.send("root is working ");
  
});

let chat1 = new Chat({
    from:"neha",
    to:"priya",
    msg:"send me ur sheets",
    created_at: new Date(), 
});

chat1.save().then((res) => {
    console.log(res);
})


const handleValidationErr = (err) => {
     console.log("Type a longer message");
     console.dir(err.message);
     return err;
}



app.use((err, req, res, next) => {
    console.log(err.name);
    if(err.name === "ValidationError"){
      err =   handleValidationErr(err);
    }
    next(err);
});


//--------ERROR HANDLING MIDDLEWARE---------//
app.use((err, req, res, next) => {
let {status = 500, message = "some error occured"} = err;
res.status(status).send(message);
});
3

app.listen(8080, () => {
    console.log("server is listening on port 8080");

}); 