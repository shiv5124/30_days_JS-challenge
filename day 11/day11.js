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

secondfunc();*/

// Task 5
