var express=require("express");
var cors=require("cors");
var mongoClient=require("mongodb").MongoClient;
var conString="mongodb://127.0.0.1:27017";
var app=express();
app.use(cors());
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.get("/",(req,res)=>{
    res.send("Hello World");
})
app.get("/getusers",(req,res)=>{
    mongoClient.connect(conString).then((ClientObj)=>{
        var DataBase=ClientObj.db("REACTDB");
        DataBase.collection("tblusers").find({}).toArray().then((docs)=>{
            res.send(docs);
            res.end();
        });
    });
});
app.post("/setusers",(res,res)=>{
    var userdetail={
        UserId:req.body.UserId,
        UserName:req.body.UserName,
        Password:req.body.Password,
        Age:parseInt(req.body.Age),
        Mobile:req.body.Mobile,
        Gmail:req.body.Gmail
        
    }
    MongoClient.connect(conString).then((ClientObj)=>{
        var Database=ClientObj.db("PortFolio");
        Database.collection("tblusers").insertOne(userdetail).then(()=>{
            res.redirect("/getusers");
            res.end();
        })
    })

})
app.listen(4000,()=>{
    console.log("Server start at 4000 port no.");
});