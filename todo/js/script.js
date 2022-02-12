const userInput = document.querySelector("input[type='text']");
const submitBtn = document.querySelector(".submit");
const taskList = document.querySelector("ul");
const listElement = taskList.children;  
const allBtn = document.querySelector(".all");
const activeBtn = document.querySelector(".active");
const completedBtn = document.querySelector(".complete");

const taskLeft = document.querySelector("#taskLeft");

function checkTaskLeft() {
    let ourList = [];
    for (var i = 0; i < listElement.length; i ++ ) {
        if (!listElement[i].classList.contains("done")) {
            ourList.push(listElement[i])
        }
    }

    // store the task to be on the local storage which will allow us easily to get them
    localStorage.setItem("taskLeft", ourList);
    return ourList.length
}

submitBtn.addEventListener("click", function() {
    // create the li element where we are going to store the tast
    const task = document.createElement("li");

    // element of each task
    const text = document.createElement("p");
    let checkBtn = document.createElement("input"); 
    const btn = document.createElement("button");

    checkBtn.setAttribute("type", "checkbox");
    checkBtn.onclick = function() {
        if (checkBtn.checked) {
            this.parentElement.classList.add("done");
        }
        else {this.parentElement.classList.remove("done")};
        taskLeft.textContent = checkTaskLeft();
    } 

    text.textContent = userInput.value;

    btn.textContent = "X";
    btn.className = "delete";
    btn.onclick = function() {
        console.log(btn.parentElement.remove());
        taskLeft.textContent = checkTaskLeft();
    }

    task.appendChild(checkBtn);
    task.appendChild(text);
    task.appendChild(btn);

    // add the li inside our list
    taskList.appendChild(task)

    // reset our input
    userInput.value = "";

    // get the number of task left
    taskLeft.textContent = checkTaskLeft();
})


allBtn.addEventListener("click", function() {
    console.log("here");
    allBtn.classList.add("filter");
    
    if (activeBtn.classList.contains("filter")) {
        activeBtn.classList.remove("filter");
    }
    if (completedBtn.classList.contains("filter")) {
        completedBtn.classList.remove("filter");
    }
    // we need to filter the data
    for (var i = 0; i < listElement.length; i ++ ) {
        listElement[i].classList.remove("hide");
    }

})

activeBtn.addEventListener("click", function() {
    console.log("here")
    activeBtn.classList.add("filter");
    
    if (allBtn.classList.contains("filter")) {
        allBtn.classList.remove("filter");
    }
    if (completedBtn.classList.contains("filter")) {
        completedBtn.classList.remove("filter");
    }
    // we need to filter the data
    for (var i = 0; i < listElement.length; i ++ ) {
        if (listElement[i].classList.contains("done")) {
            listElement[i].classList.add("hide");
        }

        else {
            listElement[i].classList.remove("hide");
        }
    }
})

completedBtn.addEventListener("click", function() {
    console.log("here")
    completedBtn.classList.add("filter");
    
    if (activeBtn.classList.contains("filter")) {
        activeBtn.classList.remove("filter");
    }
    if (allBtn.classList.contains("filter")) {
        allBtn.classList.remove("filter");
    }

    // we need to filter the data    
    for (var i = 0; i < listElement.length; i ++ ) {
        if (listElement[i].classList.contains("done")) {
            listElement[i].classList.remove("hide");
        }

        else {listElement[i].classList.add("hide");}
    }
})

// test local storage
window.onload = function() {
    const taskLeftData = localStorage.getItem("taskLeft");
    console.log(taskLeftData);}









