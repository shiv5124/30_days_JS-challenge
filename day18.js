// Task 1
/*
function bubbleSort(arr) {
    const arrayLength = arr.length;
    let isSwapped;

    for (let i = 0; i < arrayLength; i++) {
        isSwapped = false;

        for (let j = 0; j < arrayLength - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                // Swap elements
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                isSwapped = true;
            }
        }

        if (!isSwapped) break;
    }

    return arr;
}

const unsortedArray = [234, 43, 55, 63, 5, 6, 235, 547];
const sortedArray = bubbleSort(unsortedArray);
console.log("Sorted array:", sortedArray);


// Task 2

function selectionSort(arr) {
    const n = arr.length;
    for (let i = 0; i < n - 1; ++i) {
        let min = i;
        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[min]) min = j;
        }
        if (min !== i) {
            // Swap elements
            [arr[i], arr[min]] = [arr[min], arr[i]];
        }
    }
}

const inputArray = [64, 25, 12, 22, 11];
console.log("Original array: " + inputArray);
selectionSort(inputArray);
console.log("After sorting: " + inputArray);


// Task 3

function quickSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }

    const pivot = arr[0];
    const leftArr = [];
    const rightArr = [];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < pivot) {
            leftArr.push(arr[i]);
        } else {
            rightArr.push(arr[i]);
        }
    }

    return [...quickSort(leftArr), pivot, ...quickSort(rightArr)];
}

// Example usage:
const inputArray = [64, 25, 12, 22, 11];
console.log("Original array: " + inputArray);
const sortedArray = quickSort(inputArray);
console.log("After sorting: " + sortedArray);


// Task 4

function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return i; // Found the target value at index i
        }
    }
    return -1; // Target value not found in the array
}

// Example usage:
const myArray = [10, 20, 30, 40, 50];
const targetValue = 50;
const resultIndex = linearSearch(myArray, targetValue);

if (resultIndex !== -1) {
    console.log(`Target value ${targetValue} found at index ${resultIndex}.`);
} else {
    console.log(`Target value ${targetValue} not found in the array.`);
}

// Task 5

function binarySearchRecursive(arr, target, start, end) {
    if (start > end) return -1; // Target not found
    const mid = Math.floor((start + end) / 2);
    if (arr[mid] === target) return mid; // Found the target value
    if (arr[mid] > target) return binarySearchRecursive(arr, target, start, mid - 1);
    else return binarySearchRecursive(arr, target, mid + 1, end);
}

const sortedArray = [1, 3, 5, 7, 8, 9];
const targetValue = 5;
const resultIndex = binarySearchRecursive(sortedArray, targetValue, 0, sortedArray.length - 1);

if (resultIndex !== -1) {
    console.log(`Element found at index ${resultIndex}.`);
} else {
    console.log(`Element not found.`);
}


// Task 6

function countOccurrences(str) {
    const result = {};
    for (let i = 0; i < str.length; i++) {
        const char = str[i];
        if (!result[char]) {
            result[char] = 1;
        } else {
            result[char]++;
        }
    }
    return result;
}

const inputString = "appleapricot";
const charCounts = countOccurrences(inputString);
console.log("Character occurrences:", charCounts);


// Task 7

function findLongestSubstring(s) {
    let maxLength = 0; // Initialize the maximum length
    let start = 0; // Starting index of the current substring
    const charMap = new Map(); // Map to store character indices

    for (let end = 0; end < s.length; end++) {
        const char = s[end];

        if (charMap.has(char)) {
            // If the character is already in the map, update the start index
            start = Math.max(start, charMap.get(char) + 1);
        }

        // Update the character index in the map
        charMap.set(char, end);

        // Calculate the current substring length
        maxLength = Math.max(maxLength, end - start + 1);
    }

    return maxLength;
}

// Example usage:
const inputString = "abcbbccdd";
const length = findLongestSubstring(inputString);
console.log(`Longest substring length without repeating characters: ${length}`);


// Task 8

const rotateArray2 = function(nums, k) {
    k %= nums.length; // Handle large k values
    const reverse = (arr, start, end) => {
        while (start < end) {
            [arr[start], arr[end]] = [arr[end], arr[start]];
            start++;
            end--;
        }
    };
    reverse(nums, 0, nums.length - 1);
    reverse(nums, 0, k - 1);
    reverse(nums, k, nums.length - 1);
    return nums;
};

const originalArray2 = [1, 2, 3, 4, 5];
const rotatedArray2 = rotateArray2(originalArray2, 3);
console.log("Rotated array (reversal):", rotatedArray2);


// Task 9

function mergeSortedArraysConcat(arr1, arr2) {
    return arr1.concat(arr2).sort((a, b) => a - b);
}

// Example usage:
const array1 = [1, 3, 5];
const array2 = [2, 4, 6];
const mergedArrayConcat = mergeSortedArraysConcat(array1, array2);
console.log("Merged array :", mergedArrayConcat);
*/