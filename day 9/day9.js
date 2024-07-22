//Task 1

document.getElementById("text").innerHTML = "changed text";

//Task 2

document.getElementsByClassName("color")[0].style.backgroundColor = "red";

//Task 3

let newDiv = document.createElement("div");
newDiv.id = "task3";
newDiv.textContent = "30 days of JS"
document.body.appendChild(newDiv)

// Task 4

const list = document.getElementById("list")
const li = document.createElement("li")
li.innerHTML = "JavaScript"
list.appendChild(li)

// Task 5

const rem = document.getElementById("rem")
rem.remove()

// Task 6

const second = document.getElementById("second-child")
second.remove()

// Task 7

const func = () =>{
    document.getElementById("myinp").setAttribute("type","button")
}

// Task 8

document.getElementById("type1").classList.remove("red")
document.getElementById("type2").classList.add("red")

// Task 9

const change = () =>{
    document.getElementById("para1").textContent = "voila changed"
}

// Task 10 

const border = document.getElementById("border")
border.onmouseover = function(){
    document.getElementById("border").classList.remove("redbd")
    document.getElementById("border").classList.add("bluebd")
}
border.onmouseout = function(){
    document.getElementById("border").classList.add("redbd")
    document.getElementById("border").classList.remove("bluebd")
}