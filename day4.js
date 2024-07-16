// Day 4 LOOPS

// TASK 1

for (let i = 1; i <= 10; i++){
    console.log(i)
}

// TASK 2

for (let i = 1; i <= 10; i++){
    console.log(i * 5)
}

// TASK 3

let i = 1;
let sum = 0;

while(i <= 10){
  sum += i;
  i++
}

console.log(sum)

// TASK 4

//let i = 10;

while(i >= 1){
  console.log(i)
  i--;
}

// TASK 5

//let i = 1; 

do{
    console.log(i);
    i++;
}
while(i<=5);


// TASK 6

let n = 5;
let factorial = 1;
do{

    factorial *= n;
    n--;
}
while(n != 0);
console.log(factorial)

// TASK 7

for (let i = 1; i <= 5; i++) {
    let str = "";
    for (let j = 0; j < i; j++) {
        str += "*";
    }
    console.log(str);
}


// TASK 8

for (let i = 1; i <= 10; i++){
    if(i ===5) continue;
    console.log(i)
}

// TASK 9

for (let i = 1; i <= 10; i++){
    if(i ===7) break;
    console.log(i)
}
