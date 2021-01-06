const nums = [13, 4, 7, 1, 89, 6, 827, 62720]

// Spread seperates items in a array

Math.max(nums) // Rerturn NaN

// Using spread
// Spreads items in a array into a function call
Math.max(...nums) // Returns 62720


const cats = ['Blue', 'Scout', 'Rocket'];
const dogs = ['Rusty', 'Wyatt']

// Combines both arrays to make anew array 
// Spreads array into another array
const allPets = [...cats, ...dogs]


// Spread in Object Literals

const feline = { legs: 4, family: 'Felidae'};
const canine = { isFurry: true, family: 'Caninae'};

// Spreads both objects into a new object
// Combined objects with same keys will take the last added unto new object
const catDog = {...feline, ...canine};

const dataFromForm = {
    email: 'something@gmail.com',
    password: 'password123',
    username: 'user1'
}

// Spreads object into new object with added key/values
const newUser = {...dataFromForm, id: 3246, isAdmin: false}