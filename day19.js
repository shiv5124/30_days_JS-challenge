// Task 1 
/*
const text = "An apple a day keeps the doctor away. I love apples!";
const wordToMatch = "apple";

const regex = new RegExp(wordToMatch, "gi");
const matches = text.match(regex);

console.log(matches); // Output: ["apple", "apples"]

// Task 2

const text = "123 apples and 456 oranges.";
const regex = /\d+/g;
const matches = text.match(regex);

console.log(matches); // Output: ["123", "456"]

// Task 3 

const text = "I Am A Header: adf  asf as f. I Am A Tab- aet aesergsr we fae.";
const regex = /\b[A-Z][a-zA-Z]*\b/g;
const matches = text.match(regex);

console.log(matches); // Output: ["I", "Am", "A", "Header", "I", "Am", "A", "Tab"]


// Task 4 

const text = "123 apples and 456 oranges.";
const regex = /\d+/g;
const matches = text.match(regex);

console.log(matches); // Output: ["123", "456"]


// Task 5 

const phoneNumber = "(212) 555-1234"; // Example phone number
const regex = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;

const match = phoneNumber.match(regex);
if (match) {
  const [_, areaCode, centralOffice, lineNumber] = match;
  console.log("Area Code:", areaCode);
  console.log("Central Office Code:", centralOffice);
  console.log("Line Number:", lineNumber);
} else {
  console.log("Invalid phone number format.");
}

// Task 6 

const email = "john@example.com"; // Replace with the actual email address
const regex = /^([a-zA-Z0-9_.-]+)@([a-zA-Z0-9.-]+)\.([a-zA-Z]{2,6})$/;

const match = email.match(regex);
if (match) {
  const username = match[1];
  const domain = match[2];
  console.log(`Username: ${username}`);
  console.log(`Domain: ${domain}`);
} else {
  console.log("Invalid email address.");
}


// Task 7 

const inputString = "This is the best moth";
const regex = /\bth/gi;

const matches = inputString.match(regex);
if (matches) {
  console.log("Matches:", matches);
} else {
  console.log("No matches found.");
}


// Task 8 

const inputString = "This is the best moth";
const regex = /th\b/gi;

const matches = inputString.match(regex);
if (matches) {
  console.log("Matches:", matches);
} else {
  console.log("No matches found.");
}


// Task 9

function isValidPassword(password) {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&])[A-Za-z\d@.#$!%*?&]{8,}$/;
    return regex.test(password);
  }
  
  const password1 = "LoooooL@123";
  const password2 = "LoL11111";
  const password3 = "lol11123";
  
  console.log(password1, isValidPassword(password1)); 
  console.log(password2, isValidPassword(password2)); 
  console.log(password3, isValidPassword(password3)); 
 

// Task 10 

let expression = /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/gi;
let regex = new RegExp(expression);
let url = 'www.geekforgeeks.org';

if (url.match(regex)) {
    console.log('Valid URL');
} else {
    console.log('Invalid URL');
}
 */