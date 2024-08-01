// Task 1

/*try{
    throw new Error("some error occured")
}catch(error){
    console.log(error)
}*/

// Task 2

/*const divison = (a,b) =>{
    return a/b 
}
let a = 5;
let b = 0;
let c = divison(a,b)
if(b === 0){
    
    try{
        throw new Error("denominator cannot be zero")  
    }catch(error){
        console.log(error)
    }
}

// Task 3

try{
throw new Error("some error came")
}catch(error){
console.log(error)
}finally{
console.log("finally block")
}

// Task 4

class MyCustomError extends Error {
    constructor(message) {
        super(message);
        this.name = 'MyCustomError';
    }
}

function test() {
    throw new MyCustomError('Something went wrong!');
}

try {
    test();
} catch (error) {
    console.error(error.name + ': ' + error.message);
}


// Task 5

class InputError extends Error {
    constructor(message) {
        super(message)
        this.name = 'InputError'
    }
}

function validateUserInput(input) {
    if (typeof input !== 'string' || input.trim() === '') {
        throw new InputError('Invalid input. Please provide a non-empty string.')
    }
 
    console.log('Input is valid:', input)
}

try {
    const userInput = prompt('Enter something:');
    validateUserInput(userInput)
} catch (error) {
    if (error instanceof InputError) {
        console.error('Input error:', error.message)
    } else {
        console.error('Unexpected error:', error.message)
    }
}


// Task 6

function Random() {
    return Math.random() < 0.5
  }
  
  const randomPromise = new Promise((resolve, reject) => {
    if (Random()) {
      resolve('Promise resolved successfully!')
    } else {
      reject(new Error('Promise rejected with an error.'))
    }
  });
  
  randomPromise
    .then((result) => {
      console.log('Resolved:', result);
    })
    .catch((error) => {
      console.error('Rejected:', error.message);
    })
  

// Task 7

function Random() {
    return Math.random() < 0.5
  }

  async function handlePromise() {
    try {
      const result = await new Promise((resolve, reject) => {
        if (Random()) {
          resolve('Promise resolved successfully!')
        } else {
          reject(new Error('Promise rejected with an error.'))
        }
      });
  
      console.log('Resolved:', result)
    } catch (error) {
      console.error('Error:', error.message)
    }
  }

  handlePromise()
  

// Task 8

const invalidUrl = 'https://gitttttthub.com/'

fetch(invalidUrl)
  .then((response) => {
    if (!response.ok) {
      throw new Error('Error fetching data. Status code: ' + response.status);
    }
    return response.json()
  })
  .then((data) => {
    console.log('Data received:', data)
  })
  .catch((error) => {
    console.error('Error:', error.message)
  })


// Task 9

async function fetchDataFromInvalidUrl() {
    const invalidUrl = 'https://gitttttthub.com/'
  
    try {
      const response = await fetch(invalidUrl)
  
      if (!response.ok) {
        throw new Error(`Error fetching data. Status code: ${response.status}`)
      }
  
      const data = await response.json()
      console.log('Data received:', data)
    } catch (error) {
      console.error('Error:', error.message)
    }
  }
  
  fetchDataFromInvalidUrl()
  */