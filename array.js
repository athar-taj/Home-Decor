let fruits = ["apple", "banana", "Mango"];

for(let f of fruits){
    console.log(f)
}

fruits.push("Kiwi")
let result = fruits.shift()

console.log(result)
console.log(fruits)

fruits.unshift("Apple")
console.log(fruits)

fruits.splice(1,0,"Watermallon","orange")
console.log(fruits)

console.log(fruits.join(" - "))

let filterFruits = fruits.map(f => [f.at(0) , f.toUpperCase()])
console.log(filterFruits)

let season = fruits.filter(seasonableFruits)
console.log(season)


let combineFruits = fruits.reduce(combineFunction)
console.log(combineFruits)

function combineFunction(full ,value){
    return full + value;
}

function seasonableFruits(fruits){
    if (fruits == "Mango" | fruits == "Watermallon" | fruits == "Kiwi"){
        return fruits
    }
}

season.forEach(function(fruits){
    console.log(fruits.toUpperCase())
});