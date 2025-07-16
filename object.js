const user = {name : "Sam", age : 20};
const admin = {type : "admin", ...user}

let person = Object.assign(user)                           // Copy Object 
let finalAdmin = Object.freeze(admin)                      // Object Immutable
Object.seal(finalAdmin)                                    // Prevent Add/Remove 


console.log(person)
console.log(admin)

console.log(JSON.stringify(user))
console.log(JSON.parse(JSON.stringify(user)))


for (let key in person) {
  console.log(key + ": " + person[key]);
}


function Car(brand, model) {
  this.brand = brand;
  this.model = model;
}
const myCar = new Car("Toyota", "Fortuner");
console.log(myCar);