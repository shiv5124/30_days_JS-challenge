// Task 1

/*let newprom = new Promise((resolve, reject) => {
setTimeout(() => {
    resolve("promise fulfilled!");
    console.log("done")
}, 2000);
});

// Task 2

let prom = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("promise  not fulfilled!");
    }, 2000);
    });

    prom.catch((error) => {
        console.log("some error occured")
    })

// Task 3

const fetchData = (url, delay) =>{
    return new Promise((resolve,reject) =>{
setTimeout(() =>{
    resolve(`data from ${url}`)
}, delay)
    })
}

fetchData("https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js", 2000)
.then((data1) => {
console.log(data1)
return fetchData("https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js", 4000)
}).then((data2) =>{
    console.log(data2)
    return fetchData("https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.min.js", 6000)
}).then((data3) => {
    console.log(data3)
}).catch((error) =>{
    console.log("some error occured")
})

// Task 4

async function firstfunc() {
return new Promise(resolve => {
    setTimeout(()=>{
console.log("first function is finished")
resolve(50)
    },4000) 
})
}

async function secondfunc() {
    console.log("waiting for first function to finish")
   const val = await firstfunc()
    console.log(val)
}

secondfunc();

// Task 5


async function rejectfunc() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject("failed")
        }, 4000)
    })
}

async function tryit() {
    try {
        await rejectfunc()
    } catch {
        console.log("some issues occured")
    }
}

tryit()


// Task 6

fetch("https://cat-fact.herokuapp.com")
.then((resp)=>{
    console.log(resp)
}).catch((e)=>{console.log(e)})


// Task 7
const url = "https://cat-fact.herokuapp.com"
async function getapi (){
fetch(url)
.then((resp)=>{
    console.log(resp)
}).catch((error)=>{
console.log(error)
})
}

async function api(){
    const result = await getapi()
    console.log(result) 
}

api()


// Task 8

const p1 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve(50)
    },1000)
})
const p2 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve(150)
    },2000)
})
const p3 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve(1150)
    },3000)
})

Promise.all([p1,p2,p3]).then((values)=>{
    console.log(values)
})
*/
// Task 9

const p1 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve(50)
    },1000)
})
const p2 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve(150)
    },2000)
})
const p3 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve(1150)
    },3000)
})

Promise.race([p1,p2,p3]).then((values)=>{
    console.log(values)
})