// console.log("Before conditional")
// let random = Math.random();
// if(random < 0.5) {
//     console.log("Your number is less than 0.5!")
//     console.log(random);
// }

// if(random >= 0.5) {
//     console.log("Your number is greater than 0.5!")
//     console.log(random);
// }

// console.log("After conditional")

// const age = 2;

// if (age <= 5) {
//     console.log("You are a baby, you get in for free")
// } else if (age < 10) {
//     console.log("You are a child, you pay $10")
// } else if (age < 65) {
//     console.log("You are an adult, you pay $20")
// }

const dayOfWeek = prompt("Enter a day").toLowerCase();

if (dayOfWeek === "monday"){
    console.log("ughhh I hate Monday!!!")
} else if (dayOfWeek === "saturday") {
    console.log("Yay I love Saturday!")
} else if (dayOfWeek === "friday"){
    console.log("Finally it's Friday!")
} else {
    console.log("Meh")
}