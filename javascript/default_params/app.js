// Old way of setting default parameter
// function rollDie(numSides) {
//     if (numSides === undefined) {
//         numSides = 6
//     }
//     return Math.floor(Math.random() * numSides) + 1
// }

// New way of setting default
function rollDie(numSides = 6) {
    return Math.floor(Math.random() * numSides) + 1
}

// Default parameters should always come after parameters that don't have a default
function greet(person, msg = "Hello") {
    console.log(`${msg}, ${person}!`)
}