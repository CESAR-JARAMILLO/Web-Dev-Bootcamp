// for (let i = 1; i<=10; i++) {
//     console.log(i)
// }


// for (let i = 0; i <= 20; i += 2) {
//     console.log(i)
// }


// for (let i = 100; i >= 0; i -= 10) {
//     console.log(i)
// }


// for (let i = 10; i <= 1000; i *= 10) {
//     console.log(i)
// }


// for (let i = 25; i >=0; i -= 5) {
//     console.log(i)
// }



// Looping Over Arrays

// const animals = ['horse', 'cat', 'dog', 'zebra', 'hippo']

// // for (let i = 0; i < animals.length; i++) {
// //     console.log(i, animals[i])
// // }

// for (let i = animals.length - 1; i >= 0; i--) {
//     console.log(i, animals[i])
// }


// Nested Loops

// for (let i = 1; i <=10; i++) {
//     console.log(`i is: ${i}`)
//     for (let j = 1; j <= 4; j++) {
//         console.log(`    j is: ${j}`)
//     }
// }


const seatingChart = [
    ['Kris', 'Bob', 'Jill'],
    ['Bill', 'Jun', 'Sam', 'Tom'],
    ['Kim', 'Jan', 'Krill', 'Sup']
]

// for(let i = 0; i < seatingChart.length; i++) {
//     for (let j = 0; j < seatingChart[i].length; j++) {
//         console.log(j, seatingChart[i][j])
//     }
// }


for(let i = 0; i < seatingChart.length; i++) {
    const row = seatingChart[i];
    console.log(`Row #${i + 1}`)
    for (let j = 0; j < row.length; j++) {
        console.log(row[j])
    }
}