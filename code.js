const inputvalue = document.getElementById("input-value")
const tasklist = document.getElementById("task-list")

function addtask(){
    if(inputvalue.value  === ""){
        alert("you have enter the task")
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputvalue.value;
        tasklist.appendChild(li)
        // creating "X" symble using js
        let span = document.createElement("span")
        span.innerHTML = "\u00d7"
        li.appendChild(span)
        
    }
    // to clear input box field
    inputvalue.value = " "
    datastorge()

}

tasklist.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("taskline");
        datastorge()
    }
    else if (e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        datastorge()
    }
}, false)


// to store data locally
function datastorge(){
    localStorage.setItem("data", tasklist.innerHTML)
}

function showdatabase(){
    tasklist.innerHTML = localStorage.getItem("data")
 }

showdatabase()