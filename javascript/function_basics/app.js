function singSong() {
    console.log("DO")
    console.log("RE")
    console.log("MI")
}

function greet(firstName, lastName) {
    console.log(`Hey there ${firstName} ${lastName[0]}.`)
}

function repeat(str, num) {
    let result = '';
    for (let i = 0; i < num; i++) {
        result += str
    }
    console.log(result)
}

function isSnakeEyes(num1, num2) {
    if (num1 === 1 && num2 === 1) {
        console.log("Snake Eyes!")
    } else {
        console.log("Not Snake Eyes!")
    }
}

// Return keyword stops the execution of function
// Return keyword can only return a single value: Array,object...
function sum(num1, num2) {
    if (typeof num1 !== 'number' || typeof num2 !== 'number') {
        return false;
    }
    return num1 + num2;
}


// Returns the sum of an Array of numbers
function sumArray(array) {
    let total = 0;
    for (let num of array) {
        total += num;
    }
    return total;
}

const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

function returnDay(numDay) {
    if (numDay < 1 || numDay > 7) {
        return null;
    }
    return daysOfWeek[numDay - 1]
}