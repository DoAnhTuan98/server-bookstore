require('./connect-mongo')
const express = require('express')
const bodyParser = require('body-parser')
const router = require('./router')
const path = require('path')
const cors = require('cors')

const app = express()
const port = 9000

app.use(bodyParser.json())
app.use(cors())
app.use(express.static('public'))

// app.use(express.static(path.join(__dirname, 'build')));




app.use(router)


app.get('/', (req, res) => res.send('Hello!'))

// app.get('/*', (req, res) => {
//     res.sendFile(path.join(__dirname, 'build', 'index.html'));
// });

app.use((err, req, res, next) => {
    let message = err.message
    let stack = err.stack
    res.status(400).json({ message, stack })
})


app.listen(port, (err) => console.log(err || 'Server open at port' + port))