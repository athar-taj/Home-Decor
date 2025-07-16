if (true) {
  let z = 30;
  console.log(z); 
}
// console.log(z);                                            notdefine

const anonymous = function(){
    console.log("Anonymous Athar")
}

anonymous();

const add = (a, b) => a + b;
console.log("Sum is :" ,add(2, 3)); 

function greet(callback){
    console.log("Hello Athar")
    callback();
}

function bye(name = "Athar"){
    console.log("Byy ", name)
}

greet(bye)


function sum(...nums) {
  return nums.reduce((total , n) => total + n,0)
}
console.log(sum(1, 2, 3, 4));

