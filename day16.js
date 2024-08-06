// Task 1

function factorial(num) {
    if (num === 0 || num === 1) {
        return 1
    }
    return num * factorial(num - 1)
}

console.log(factorial(5))
console.log(factorial(4))
console.log(factorial(8))


// Task 2

function fibonacci(n) {
    if (n < 2) {
        return n
    }
    return fibonacci(n - 1) + fibonacci(n - 2)
}

console.log(fibonacci(3))
console.log(fibonacci(5))
console.log(fibonacci(8))

// Task 3

function sumArray(arr, index) {
    if (index === arr.length) {
        return 0;
    }
    return arr[index] + sumArray(arr, index + 1)
}

const myArray = [1, 2, 3, 4, 5, 6]
console.log("Sum is " + sumArray(myArray, 0))

// Task 4

function findMax(arr) {
    if (arr.length === 1) {
        return arr[0];
    }
    const subMax = findMax(arr.slice(1))
    return arr[0] > subMax ? arr[0] : subMax;
}

console.log(findMax([5, 5, 5, 8, 6, 7, 4, 7]))
console.log(findMax([1, 2, 3, 4]))
console.log(findMax([-10, -5, -8, -3]))

// Task 5

function reverseString(str) {
    if (str === "") {
        return "";
    }
    return reverseString(str.slice(1)) + str[0]
}

console.log(reverseString("hello"))
console.log(reverseString("world"))
console.log(reverseString("racecar"))

// Task 6

function isPalindrome(str) {
    if (str.length <= 1) {
        return true;
    }
    if (str[0] !== str[str.length - 1]) {
        return false;
    }
    return isPalindrome(str.substring(1, str.length - 1));
}


let str = "studies";
if (isPalindrome(str)) {
    console.log("Yes, it is a palindrome");
} else {
    console.log("No, it is not a palindrome");
}

// Task 7

function recursiveBinarySearch(arr, target, start, end) {
    if (start > end) {
        return -1; // Base case: element not found
    }
    const mid = Math.floor((start + end) / 2);
    if (arr[mid] === target) {
        return mid; // Found the target
    } else if (arr[mid] > target) {
        return recursiveBinarySearch(arr, target, start, mid - 1); // Search left half
    } else {
        return recursiveBinarySearch(arr, target, mid + 1, end); // Search right half
    }
}

const sortedArray = [1, 2, 6, 7, 11, 13, 15, 18];
const targetElement = 15;
const index = recursiveBinarySearch(sortedArray, targetElement, 0, sortedArray.length - 1);

if (index === -1) {
    console.log(targetElement + " is not present in the given array");
} else {
    console.log(targetElement + " is present at index: " + index);
}

// Task 8

function countOccurrences(arr, target, index = 0, counts = {}) {
    if (index === arr.length) {
        return counts; // Base case: reached end of array
    }
    const currentElement = arr[index];
    counts[currentElement] = (counts[currentElement] || 0) + 1; // Increment count
    return countOccurrences(arr, target, index + 1, counts); // Recursive step
}

// Example usage:
const myArray1 = [5, 5, 5, 2, 2, 2, 2, 2, 9, 4];
const result = countOccurrences(myArray1);

console.log(result); // Output: { '5': 3, '2': 5, '9': 1, '4': 1 }
console.log(result[5]); // Output: 3 (count of 5)
console.log(result[2]); // Output: 5 (count of 2)
