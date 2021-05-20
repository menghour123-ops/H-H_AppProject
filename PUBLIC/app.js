const PORT = 3000;
const IP = "192.168.88.2";
const URL = "http://"+ IP +":"+PORT;
function clickIt(event){
    event.preventDefault();
    console.log("HELLO SECOND TIME");
    let li = document.createElement("li");
    UL.appendChild(li);
    let p = document.createElement("p");
    li.appendChild(p);
    p.className = "chart";
    p.textContent = text.value;

}

// get ul from html
let UL = document.querySelector(".container ul");
var text = document.querySelector("#text");
var  sendIt = document.getElementById("submit");
sendIt.addEventListener("click", clickIt);