// Day 6 ARRAYS
// Task 1

let arr = [1,2,3];
console.log(arr)

// Task 2

let arry = ['a','b','c','d','e'];
console.log(arry[0])
console.log(arry[4])

// Task 3

arry = ['a','b','c','d','e'];
arry.push('abc')
console.log(arry)

// Task 4

arry = ['a','b','c','d','e'];
arry.pop();
console.log(arry)

// Task 5

arry = ['a','b','c','d','e'];
arry.shift();
console.log(arry)

// Task 6

arry = ['a','b','c','d','e'];
arry.unshift('lol');
console.log(arry)

// Task 7

const double = (value,index,array) =>{
    return value * 2;
}

//let num = [1,2,3,4,5,6]
let newarr = num.map(double);
console.log(newarr)

// Task 8

const even = (value,index,array) =>{
    if(value % 2 == 0){
        return value;
    }
}

num = [1,2,3,4,5,6]
let evennum = num.filter(even);
console.log(evennum)

// Task 9

const add = (total,value,index,array) =>{
    return total + value;
}

num = [1,2,3,4,5,6]
let addnum = num.reduce(add);
console.log(addnum)

// Task 10

let text = "";
num = [1,2,3,4,5,6]

for(let i  = 0; i < num.length; i++){
    text = num[i]
    console.log(text)
}

// Task 11

const each = (value,index,array) =>{
    txt += value + '\n';
    }
    let txt = "";
    num = [1,2,3,4,5,6]
    num.forEach(each)
    console.log(txt)

// Task 12

let multiarray = [
    ['hi', 2],
    ['bye',5],
    ['lol',420]
];

console.log(multiarray)

// Task 13

multiarray = [
    ['hi', 2],
    ['bye',5],
    ['lol',420]
];

console.log(multiarray[1])