const { reject } = require("async");

function delay(ms) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(" Timeout finished");
        }, ms);
    });
}

console.log("Start");

delay(2000).then(msg => {
    console.log(msg); 
});

console.log("End");


async function fetchData() {
    try {
        const response = await fetch(`https://dummyjson.com/products/1`)
        const data = await response.json();
        console.log("Data:", data);
    } catch (error) {
        console.log("Error:", error);
    }
}

console.log("Fetching Products!!")
fetchData();

let isAvailable = false;

let process = new Promise((resolve,reject) => {
    if (isAvailable){
        resolve("Promise Done !!")
    }
    else {
        reject("Promise Reject !!")
    }
})
process
    .then(result => console.log(result))
    .catch(error => console.log(error));

