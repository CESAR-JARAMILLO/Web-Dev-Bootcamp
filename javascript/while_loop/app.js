// A for loop is suited better for this

// let n = 1
// while (n <= 10) {
//     console.log(n)
//     n++
// }

// const secret = 'password';

// let password = prompt("What's the password?");
// while (secret !== password) {
//     password = prompt("What's the password?");
// }
// prompt("Congrats!!")


// The Break Keyword

// let input = prompt("Hey, say something!");
// while (true) {
//     input = prompt(input)
//     if (input === "stop that") {
//         break;
//     }
// }
// console.log('Ok, you win!!!')


// let randomNum = Math.floor(Math.random() * 10 +1);
// let guess = prompt("Guess a number from  1-10!");

// while (true) {
//     if (guess === randomNum.toString()){
//         break;
//     } else {
//         guess = prompt(`The correct number was: ${randomNum}. Try again!`)
//         randomNum = Math.floor(Math.random() * 10 +1);
//     }
// }
// console.log('Correct!')


// Guessing Number Game

let maximum = parseInt(prompt("Enter your maximum number!"));
while (!maximum) {
    maximum = parseInt(prompt("Enter a valid number!"));
}

const targetNum = Math.floor(Math.random() * maximum) + 1;
console.log(targetNum)

let numOfGuess = 1;
let guess = parseInt(prompt("Enter your first guess!"));
while (parseInt(guess) !== targetNum) {
    if (guess === 'q') break;
    numOfGuess++
    if (guess < targetNum) {
        guess = prompt("You are under! Try again!");
    } else if (guess > targetNum) {
        guess = prompt("You are over! Try again!");
    }
}

prompt(`Congrats you guessesd correct in ${numOfGuess} tries!`);