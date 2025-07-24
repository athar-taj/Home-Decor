var response = fetch("https://jsonplaceholder.typicode.com/todos/1")
console.log(response)

async function getData() {
fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then(res => res.json()) 
    .then(data => {
        console.log("data:", data); 
    })
    .catch(err => console.error(err))    
}

getData();



async function postData() {

    const payload = {
    title: "Athar's Guide to Fetch",
    body: "Posting Data To Json PlaceHolder",
    userId: 443
    }


    const request = await fetch("https://jsonplaceholder.typicode.com/posts", {
        method : "POST",
        headers : {
            "Content-Type" : "application/json" 
        },
        body : JSON.stringify(payload)
    })

    const response = await request.json();
    console.log(response)
}

postData();
