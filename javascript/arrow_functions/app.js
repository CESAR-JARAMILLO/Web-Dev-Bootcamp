// const add = function(x,y) {
//     return x + y;
// }


// Same as above code, but using ARROW FUNCTIONS

const add = (x, y) => {
    return x + y;
}

// Functions with only one parameter like below, don't need paranthesis

const square = num => {
    return num * num;
}

// Functions with no argument still need parantheses, as below

const rollDie = () => {
    return Math.floor(Math.random() * 6) + 1;
}

// IMPLICIT RETURN for ARROW FUNCTIONS
// CAN ONLY DO WITH ARROW FUNCTIONS
// ONLY WORKS IF THERE ONE STATEMENT/EXPRESSION IN THE FUNCTION


// Return keyword is removed and curly braces are replaced by parantheses

const rollDice = () => (
    Math.floor(Math.random() * 6) + 1
)

// Makes one liners easier by removing parantheses

const addTwo = (a, b) => a + b




const movies = [
    {
        title: 'Amadeus',
        score: 99
    },
    {
        title: 'Stand By Me',
        score: 85
    },
    {
        title: 'Parasite',
        score: 95
    },
    {
        title: 'Alien',
        score: 90
    }
]

// const newMovies = movies.map(function (movie) {
//     return `${movie.title} - ${movie.score / 10}`;
// })


// Example using MAP, same as code above

const newMovies = movies.map(movie => (
    `${movie.title} - ${movie.score / 10}`
))