// Day 5 FUNCTIONS

// Task 1

function even(x){
if(x % 2 == 0){
    console.log("its a even number")
}
else{
    console.log("its a odd number")
}
}
let num = even(3);
console.log(num)

// Task 2

function sqr(y){
    return y*y;
}

let square = sqr(5);
console.log(square)

// Task 3

function maximum(a,b){
    if(a > b){
        console.log(a , "is greater than" , b )
    }
    else{
        console.log(b , "is greater than" , a)
    }
}

let m = 5
    let p = 10
    console.log(maximum(m,p))

// Task 4

function conc(l,o){
    return l+o
}

console.log(conc("hello","world"))

// Task 5

const add = (a,b) =>{
    return a + b;
}

console.log(add(5,5))

// Task 6

const check = (a) =>{
    console.log(str.includes(a))
    }
    let str = "30 days JS challenge"
    console.log(check('35'))

// Task 7

const multi = (a, b = 2) =>{
    return a * b;
}

console.log(multi(4))

// Task 8

function greetings(name, age = 18){
    return 'hello you are eligible to drive ${name} as you are of ${age} age';
    }
    
    const greet = greetings("mohan", 19)
    console.log(greet)

// Task 9

const func = (a) =>{
  console.log('executed')
}
let i =1;
const highfunc = (func, b) =>{
  do{
    func(b);
    i++;
  }while(i <= b)
}

const result = highfunc(func,5)

// Task 10

const mainfunc = (z) =>{
    return func1(func2(z));
}

const func1 = (x) =>{
return x + 1;
}

const func2 = (x) =>{
    return x + 2;
}

const results = mainfunc(5)
console.log(results)