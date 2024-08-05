// Task 1

function outerFunc() {
    const a = 7
    return function(b) {
        console.log(a + b)
    };
}

const innerFunc = outerFunc()
innerFunc(10)

// Task 2

function createCounter() {
    let count = 0;

    function increment() {
        count++;
    }

    function decrement() {
        count--;
    }

    function getCurrentValue() {
        return count;
    }

    return {
        increment,
        decrement,
        getCurrentValue
    };
}

const myCounter = createCounter();

myCounter.increment()
console.log(myCounter.getCurrentValue())

// Task 3

function IdGenerator() {
    let lastId = 0

    function generateUId() {
        lastId++
        return `id_${lastId}`
    }

    return generateUId
}

const generateId = IdGenerator()

console.log(generateId())
console.log(generateId())
console.log(generateId())

// Task 4

function greetUser(userName) {
    return function() {
        console.log(`Hello, ${userName}!`)
    }
}

const per1 = greetUser("Jack")
const per2 = greetUser("alex")

per1()
per2()

// Task 5

function FunctionsArray(count) {
    const funcs = [];

    for (let i = 0; i < count; i++) {
        funcs.push(function() {
            console.log(`Function at index ${i} was called.`)
        })
    }

    return funcs
}

const num = 5
const index = FunctionsArray(num)

index.forEach(funcs => funcs())

// Task 6

function Item() {
    const items = [];

    function addItem(item) {
        items.push(item)
    }

    function removeItem(item) {
        const index = items.indexOf(item)
        if (index !== -1) {
            items.splice(index, 1)
        }
    }

    function listItems() {
        return items.slice()
    }

    return {
        addItem,
        removeItem,
        listItems
    }
}

const itemEdit = Item()

itemEdit.addItem("Apple")
itemEdit.addItem("Banana")
itemEdit.addItem("Orange")

console.log(itemEdit.listItems())

itemEdit.removeItem("Banana")
console.log(itemEdit.listItems())


// Task 7

function memoize(fnToMemoize) {
    const memoizedCache = {}; // A closure object

    return function(...args) {
        const propToCheck = constructPropertyFromArgs(fnToMemoize, args);
        if (!memoizedCache[propToCheck]) {
            memoizedCache[propToCheck] = fnToMemoize(...args);
        } else {
            console.log('Fetching from cache');
        }
        return memoizedCache[propToCheck];
    };
}

// Example usage:
const expensiveFunction = (n) => {
    // Expensive calculations here
    return n * 2;
};

const memoizedExpensiveFunction = memoize(expensiveFunction);

console.log(memoizedExpensiveFunction(5)); // Calculating result and logs 10
console.log(memoizedExpensiveFunction(5)); // Fetching from cache and logs 10


// Task 8

function factorial(n, cache = {}) {
    if (n in cache) {
        return cache[n]; // Return cached result
    }
    if (n === 0) {
        return 1; // Base case: factorial of 0 is 1
    }
    cache[n] = n * factorial(n - 1, cache); // Calculate and cache result
    return cache[n];
}

console.log(factorial(5)); // Calculated once and cached
console.log(factorial(5)); // Fetching from cache
console.log(factorial(8)); // Calculated once and cached
