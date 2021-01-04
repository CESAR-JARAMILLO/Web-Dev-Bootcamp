// Shorthand for crerating functions inside objects
// Collon and function keyword are not needed

const myMath = {
    PI: 3.14159,
    square(num) {
        return num * num;
    },
    cube(num) {
        return num ** 3;
    }
}

const square = {
    area(side) {
        return side * side;
    },
    perimeter(side) {
        return side * 4;
    }
}


// This Keyword

const cat = {
    name: "Blue Steele",
    color: "grey",
    breed: "scottish fold",
    meow() {
        console.log(`${this.name} says MEEOOWW`)
    }
}

const hen = {
    name: 'Helen',
    eggCount: 0,
    layAnEgg() {
        this.eggCount += 1;
        return 'EGG'
    }
}