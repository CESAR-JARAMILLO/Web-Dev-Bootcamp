// Destructuring Arrays

const scores = [929838, 893728, 852413, 725369, 520368, 307267, 192038]

// const first = scores[0];
// const second = scores[1];

// destructuring from array, based on order. Gold takes index 0 and so on..
// The rest parameter can be used to place remaining array items in a variable
const [gold, silver, bronze, ...everyoneElse] = scores;


// Destructuring Objects

const user = {
    email: 'email@gmail.com',
    password: 'sj28dhdi',
    firstName: 'Harvey',
    lastName: 'Smith',
    born: 1930,
    died: 1978,
    bio: 'This is the bio',
    city: 'San Francisco',
    state: 'California'
}

const user2 = {
    email: 'email@gmail.com',
    password: 'sj28dhdi',
    firstName: 'Stacey',
    lastName: 'Smith',
    born: 1930,
    city: 'San Francisco',
    state: 'California'
}

// const firstName = user.firstName;
// const lastName = user.lastName;


// Order doesn't matter when destructuring objects, unlike arrays
// creates individual variable for each value
// const { email, firstName, lastName, bio } = user

// This changes variable to your choosing
// const { born: birthYear, died: deathYear } = user;


// Value that isn't in object can be added to new variable
// Cannot be changed for object that has a value
const { city, state, died = 'N/A' } = user2;


// Destructuring Param
// mostly used for objects

// Can use destructuring in functions
// Can assign defaults like normally if cant find value
function fullName({ firstName, lastName = 'default name'}) {
    return `${firstName} ${lastName}`
}


const movies = [
    {
        title: 'Amadeus',
        score: 99,
        year: 1984
    },
    {
        title: 'Stand By Me',
        score: 35,
        year: 2013
    },
    {
        title: '13 Going on 30',
        score: 70,
        year: 2004
    },
    {
        title: 'Stand By Me',
        score: 85,
        year: 1986
    },
    {
        title: 'Waterworld',
        score: 62,
        year: 1995
    },
    {
        title: 'Jingle All The Way',
        score: 71,
        year: 1996
    },
    {
        title: 'Parasite',
        score: 95,
        year: 2019
    },
    {
        title: 'Notting Hill',
        score: 77,
        year: 1999
    },
    {
        title: 'Alien',
        score: 90,
        year: 1979
    }
    
]


movies.filter((movie) => movie.score > 90)
movies.filter(({ score }) => movie.score > 90)


// parantheses are needed when destructuring in a function call

// movies.map(movie => {
//     return `${movie.title} (${movie.year}) is rated ${movie.score} `
// })

movies.map({ title, score, year} => {
    return `${title} (${year}) is rated ${score} `
})