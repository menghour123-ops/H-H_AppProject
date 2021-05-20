const PORT = 3000;
const IP = "192.168.88.2";
const URL = "http://"+ IP +":"+PORT;
const express = require("express");
const app = express();
app.listen(PORT =>{
    console.log("HELLO ON PORT " + PORT)
})
app.get("/login",(req,res) =>{
    res.send("PUBLIC");
})