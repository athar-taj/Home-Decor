let marks = 85
let day = "Monday"

if (marks >= 90) {
  console.log("Grade: A+")
} else if (marks >= 75) {
  console.log("Grade: A")
} else if (marks >= 60) {
  console.log("Grade: B")
} else {
  console.log("Grade: C or fail");
}


switch (day) {
    case "Monday":
        console.log("It's Monday")
    case "Tuesday":
        console.log("It's Tuesday")
    case "Wednesday":
        console.log("It's Wednesday")
    case "Thirsday":
        console.log("It's Thirsday")
    case "Friday":
        console.log("It's Friday")
        
    default:
        console.log("Holiday")
}