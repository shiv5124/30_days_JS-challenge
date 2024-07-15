// Day 3 CONTROL STRUCTRES

//Task 1

let num = prompt("enter the number");
num = parseInt(num);

if (num > 0) {
    console.log("number is positive")
} else if (num < 0) {
    console.log("number is negative")
} else {
    console.log("number is zero")
}

//Task 2

let age = prompt("enter your age")
age = parseInt(age)

if (age >= 18) {
    console.log("you are eligible to vote")
} else if (age < 18 && age >= 1) {
    console.log("you are not eligible to vote")
} else {
    console.log("invalid age")
}

//Task 3

let num1 = 5
let num2 = 2
let num3 = 10
let largest;

if (num1 >= num2 && num1 >= num3) {
    largest = num1
} else if (num2 >= num1 && num2 >= num3) {
    largest = num2
} else if (num3 >= num2 && num3 >= num1) {
    largest = num3
}

console.log("largest number is", largest);

//Task 4

let week = prompt("enter value between 1 to 7")
week = parseInt(week)
let day;

switch (week) {

    case 1:
        day = "Today is Sunday"
        break;
    case 2:
        day = "Today is Monday"
        break;
    case 3:
        day = "Today is Tuesday"
        break;
    case 4:
        day = "Today is Wednesday"
        break;
    case 5:
        day = "Today is Thursday"
        break;
    case 6:
        day = "Today is Friday"
        break;
    case 7:
        day = "Today is Saturday"
        break;
    default:
        day = "invalid number"
}

console.log(text)

//Task 5

let marks = prompt("enter your marks")
marks = parseInt(marks)
let grade;

switch (marks) {

    case 90:
        grade = "A"
        break;
    case 80:
        grade = "B"
        break;
    case 70:
        grade = "C"
        break;
    case 60:
        grade = "D"
        break;
    case 50:
        grade = "F"
        break;
        default:
        grade = "Failed"
            
}
console.log(grade)

//Task 6

let x = 4;

let z = (x%2 == 0) ? "even number" : "odd number";
console.log(z)

//Task 7

let year = prompt("enter year")
year = parseInt(year)

if (year%4 == 0){
    if (year%100 ==0 && year%400 ==0){
        console.log("leap year")
    }
    else{
        console.log("not a leap year")
    }
}
else{
    console.log("not a leap year")
}