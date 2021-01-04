function callTwice(func) {
    func();
    func();
}

function callTenTimes(f) {
    for (let i = 0; i < 10; i++) {
        f();
    }
}

function rollDice() {
    const roll = Math.floor(Math.random() * 6) + 1;
    console.log(roll)
}


function makeMysteryFunc() {
    const rand = Math.random();
        if (rand > 0.5) {
            return function() {
                console.log("Congrats, I am a good function")
                console.log("You win a million dollars!!!")
            }
        } else {
            return function() {
                alert("You have been infected by a computer virus!")
                alert("Stop trying to close this window!!")
                alert("Stop trying to close this window!!")
                alert("Stop trying to close this window!!")
                alert("Stop trying to close this window!!")
                alert("Stop trying to close this window!!")
            }
        }
}


function makeBetweenFunc(min, max) {
    return function(num) {
        return num >= min && num <= max;
    }
}

// Above function can be stored as variable

const isChild = makeBetweenFunc(0, 17);

// Can use same function to create different FUNCTION EXPRESSION with different arguments

const isAdult = makeBetweenFunc(18, 65)

// Can access inner function by passing argument to FUNCTION EXPRESSION

// isChild(8); THIS WILL RETURN TRUE

// isAdult(8); WILL RETURN FALSE
