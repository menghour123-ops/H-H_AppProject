const PORT = 3000;
const IP = "192.168.88.2";
const URL = "http://"+ IP +":"+PORT;
const express = require("express");
const app = express();
app.listen(PORT, function (){
    console.log("HELLO ON PORT  " + PORT)
})
app.use(express.static("PUBLIC"));