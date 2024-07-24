// Task 1

const change = () =>{
    document.getElementById("para").innerHTML = "changed para"
}

// Task 2

const visible = () =>{
    document.getElementById("image").style.visibility = "hidden";
}

// Task 3

const bgcolor = document.getElementById("bgcolor")
bgcolor.onmouseover = function(){
    document.getElementById("bgcolor").classList.add("bgcolor")
    document.getElementById("bgcolor").classList.remove("bgcolor1")
}

// Task 4

bgcolor.onmouseout = function(){
    document.getElementById("bgcolor").classList.remove("bgcolor")
    document.getElementById("bgcolor").classList.add("bgcolor1")
}

// Task 5

document.addEventListener('keydown', (event) => {
    console.log('Key pressed:', event.key);
});


// Task 6

document.addEventListener('keyup', (up) => {
    document.getElementById("upkey").innerHTML = ('key pressed:', up.key);
})

// Task 7

document.getElementById("form").addEventListener("submit", (sub) => {
    const fname = document.getElementById("Fname").value
    const sname = document.getElementById("Sname").value
    console.log(fname, sname)
    sub.preventDefault()
})

// Task 8

const listfunc = () =>{
    var x = document.getElementById("myselect").value
document.getElementById("parag").innerHTML = "you selected:" + x
}

// Task 9

document.getElementById('list').addEventListener('click', function(event) {
    if (event.target.tagName === 'LI') {
        console.log('Clicked item:', event.target.textContent);
    }
})

// Task 10

document.getElementById("parent").addEventListener('click', function(){
    document.getElementById("parg").classList.add("blackbor")
})

var newchild = document.createElement("button")
newchild.textContent = "Button 3"

var target = document.getElementById("parent")

target.appendChild(newchild)

  
