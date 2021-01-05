const prices = [9.99, 1.50, 19.99, 49.99, 30.50]

// let total = 0;
// for (let price of prices) {
//     total += num
// }

// Does same as code above

// const total = prices.reduce((total, price) => {
//     return total + price
// })

const total = prices.reduce((total, price) => total + price)

// Returns the minimum price
const minPrice = prices.reduce((min, price) => {
    if (price < min) {
        return price;
    } else {
        return min;
    }
})


// Returns the max price
const maxPrice = prices.reduce((min, price) => {
    if (price > min) {
        return price;
    } else {
        return min;
    }
})




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

const topMovie = movies.reduce((highestRated, currentMovie) => {
    if (highestRated.score > currentMovie.score) {
        return highestRated;
    } else {
        return currentMovie;
    }
})


const evens = [2, 4, 6, 8];

// Second argument sets initial value for method
evens.reduce((sum, num) => sum + num, 100)