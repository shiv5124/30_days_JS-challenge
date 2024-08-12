// Task 1
/*
const myString = "Hello, world!"; // Your string value
localStorage.setItem("myKey", myString);

const retrievedString = localStorage.getItem("myKey");
console.log("Retrieved value:", retrievedString);

// Task 2

const user = { name: "John Doe", age: 30 }; // Your object
localStorage.setItem("user", JSON.stringify(user));

const userJson = localStorage.getItem("user");
const retrievedUser = JSON.parse(userJson);
console.log("Retrieved object:", retrievedUser);

// Task 3

const form = document.getElementById('myForm');
        const inputName = document.getElementById('inputName');
        const displaySavedName = document.getElementById('displaySavedName');

        // Save input value to localStorage
        form.addEventListener('submit', function (e) {
            e.preventDefault();
            const name = inputName.value;
            localStorage.setItem('userName', name);
            inputName.value = ''; // Clear input field
        });

        // Retrieve and display saved name on page load
        window.addEventListener('load', function () {
            const savedName = localStorage.getItem('userName');
            if (savedName) {
                displaySavedName.textContent = `Saved Name: ${savedName}`;
            }
        });

// Task 4

// Initial data in localStorage
localStorage.setItem('myKey', 'myValue');
localStorage.setItem('anotherKey', 'anotherValue');

// Log content before removal
console.log('Before removal:');
for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    const value = localStorage.getItem(key);
    console.log(`${key}: ${value}`);
}

// Remove an item
localStorage.removeItem('myKey');

// Log content after removal
console.log('After removal:');
for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    const value = localStorage.getItem(key);
    console.log(`${key}: ${value}`);
}


// Task 5

// Save a string value to sessionStorage
sessionStorage.setItem('myKey', 'Hello, world!');

// Retrieve and log the value
const retrievedValue = sessionStorage.getItem('myKey');
console.log('Retrieved value:', retrievedValue);


// Task 6

// Create an object
const user = {
    name: 'John Doe',
    email: 'john.doe@example.com'
};

// Convert the object to a JSON string
const userString = JSON.stringify(user);

// Save the stringified object in sessionStorage
sessionStorage.setItem('user', userString);

// Retrieve the stringified object from sessionStorage
const retrievedUserString = sessionStorage.getItem('user');

// Parse the string back into an object
const retrievedUser = JSON.parse(retrievedUserString);

// Log the retrieved object
console.log(retrievedUser);


// Task 7

document.getElementById("myForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission
    const userName = document.getElementById("fname").value;
    localStorage.setItem("lastName", userName);
});

// Retrieve and display saved data on page load
window.addEventListener("load", function () {
    const savedName = localStorage.getItem("lastName");
    if (savedName) {
        document.getElementById("fname").value = savedName;
    }
});

// Task 8

const itemBeforeRemoval = sessionStorage.getItem('myKey');
console.log('Content before removal:', itemBeforeRemoval);

// Remove an item with the key 'myKey'
sessionStorage.removeItem('myKey');

const itemAfterRemoval = sessionStorage.getItem('myKey');
console.log('Content after removal:', itemAfterRemoval);


// Task 9

function saveToStorage(key, value) {
    // Save to localStorage
    localStorage.setItem(key, JSON.stringify(value));

    // Save to sessionStorage
    sessionStorage.setItem(key, JSON.stringify(value));
}

// Example usage:
const myKey = 'myData';
const myValue = { name: 'John', age: 30 };

// Save the value
saveToStorage(myKey, myValue);

// Retrieve and log the values
const valueFromLocalStorage = JSON.parse(localStorage.getItem(myKey));
const valueFromSessionStorage = JSON.parse(sessionStorage.getItem(myKey));

console.log('Value from localStorage:', valueFromLocalStorage);
console.log('Value from sessionStorage:', valueFromSessionStorage);


// Task 10

function clearAllStorage() {
    // Clear localStorage
    localStorage.clear();

    // Clear sessionStorage
    sessionStorage.clear();
}

// Call the function to clear storage
clearAllStorage();

// Verify that both storages are empty
console.log('localStorage is empty:', localStorage.length === 0);
console.log('sessionStorage is empty:', sessionStorage.length === 0);
*/