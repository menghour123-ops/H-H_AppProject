function clickIt(event){
    event.preventDefault();
    console.log("HELLO SECOND TIME")
}

// get ul from html
const UL = document.querySelector("ul");
// get button and add evenlistener
const  sendIt = document.getElementById("submit");
sendIt.addEventListener("click", clickIt);