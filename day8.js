// Day 8 ES6+ FEATURES
// Task 1

//const name = "person"
const age = "20"
const greetings = `hello ${name}, welcome your age is ${age}`;
console.log(greetings)

// Task 2

const multi = `hello!
how are you?
have a nice day.`
console.log(multi)

// Task 3

const arr = [1,2,,3,4,5]
//const [arr1, arr2] =  arr;
console.log(arr1, arr2)

// Task 4

const obj = {
    "title": "meaning",
    "author": "obama",
    "year": "1890",
    "publications": "omega"
}

let {title:name , author:writer} = obj;
console.log(name,writer)

// Task 5

let arr1 = [1,2,3,4];
let arr2 = [5,6,7,8];
let arr3 = [...arr1,...arr2]
console.log(arr3)

// Task 6

const sum = (...theArgs) =>{
    let result = 0;
    for (const arg of theArgs){
        result += arg
    }
    return result;
}
const numbers = sum(1,2,3,4)
console.log(numbers)

// Task 7

const multiply = (a, b = 2) =>{
    return a * b;
}

console.log(multiply(4))

// Task 8

const car = {
    "model":"BMW",
    "wheels": "4",
    cars: function(){
        return `car model is ${this.model} and it has ${this.wheels} wheels`;
    }
}
console.log(car)
console.log(car.cars)

// Task 9

let book = "title"
let year = "year of book"
const obej ={
    [book]:"life",
    [year]:"1000"
}

console.log(obej)