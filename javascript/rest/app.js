// This code does not work
// argument function is used to allow any number of arguments to be passed to a function
// function sum() {
//     return arguments.reduce((total, el) => total + el)
// }


// rest parameter looks similar to spread, but used in a function parameter
// Similar to above code, but now works
// Places all passed artguments into a array, can now be evaluated
function sum(...nums) {
    return nums.reduce((total, el) => total + el)
}

function raceResults(gold, silver, ...everyoneElse) {
    console.log(`GOLD MEDAL GOES TO: ${gold}`)
    console.log(`SILVER MEDAL GOES TO: ${silver}`)
    console.log(`AND THANKS TO EVERYONE ELSE: ${everyoneElse}`)
}