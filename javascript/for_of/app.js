const subreddits = ['cringe', 'books', 'chickens', 'funny', 'pics', 'soccer', 'dogs']

// for (let i = 0; i < subreddits.length; i++) {
//     console.log(subreddits[i])
// }

// Same code as above using for of loop

// for (let sub of subreddits) {
//     console.log(sub)
// }



const seatingChart = [
    ['Kris', 'Bob', 'Jill'],
    ['Bill', 'Jun', 'Sam', 'Tom'],
    ['Kim', 'Jan', 'Krill', 'Sup']
]

// for(let i = 0; i < seatingChart.length; i++) {
//     const row = seatingChart[i];
//     console.log(`Row #${i + 1}`)
//     for (let j = 0; j < row.length; j++) {
//         console.log(row[j])
//     }
// }

// Same as code from above

for (let row of seatingChart) {
    for (let student of row) {
        console.log(student)
    }
}