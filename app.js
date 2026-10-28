

const express = require("express")

const app = express();


app.use("/hello", (req, res)=>{
    res.send("server is connect...")
})

app.use("/test", (req, res)=>{
    res.send("Hello from the server...pakka")
})

app.get("/signup", (req, res)=>{
    res.send({
        name : "Bala",
        wife: "mangai"
    })
})


app.use("/", (req, res)=>{
    res.send("Hello this is home page")
})

app.listen(7777, ()=>{
      console.log("server is Successfully listening on port...")
})


