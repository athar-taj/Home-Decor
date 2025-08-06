
var name = "Athar";
console.log(name);
var name = "Taj"; 
console.log(name);

let age = 25;
age = 26; 
console.log(age); 
// let age = 30; 

const country = "India";
// country = "USA";
console.log(country); 

// local value block 
function some(){
    let age = 50;
    console.log(age)

    const country = "USA"
    console.log(country);
}

some()

let a1 = { a : 1 }
let a2 = { b : 2 ,c : 3}
let a3 = { d : 4 ,e : 5}

console.log({...a1,...a2,...a3})