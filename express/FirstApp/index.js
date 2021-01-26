const express = require('express');
const app = express();
// console.dir(app)

// app.use((req, res) => {
//     console.log('We got a new request!')
//     // res.send("Hello, we got your request! This is a response!")
//     // res.send({ color: 'red' })
//     res.send('<h1>This is a h1!</h1>')
// })

app.get('/', (req, res) => {
    res.send("This is the home page!!!")
})

app.get('/r/:subreddit', (req, res) => {
    const { subreddit } = req.params;
    res.send(`Browsing the ${subreddit} subreddit`)
})

app.get('/r/:subreddit/:postId', (req, res) => {
    const { subreddit, postId } = req.params;
    res.send(`Browsing the ${postId} on the ${subreddit} subreddit`)
})

app.post('/cats', (req, res) => {
    res.send('Post request to /cats!! This is different from a get request!!!')
})

app.get('/cats', (req, res) => {
    res.send('MEOW!!!')
})

app.get('/dogs', (req, res) => {
    res.send('WOOF!!!')
})

app.get('/search', (req, res) => {
    const { q } = req.query;
    res.send(`<h1>Search results for: ${q}</h1>`)
})

app.get('*', (req, res) => {
    res.send(`I don't know that path!`)
})


app.listen(3000, () => {
    console.log('Listening on port 3000!' )
})