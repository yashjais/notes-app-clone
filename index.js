const express = require('express')
const setUpDB = require('./config/database')
const cors = require('cors')
const router = require('./config/routes')
const app = express()

app.use(express.json())
app.use(cors())
// app.use('/uploads',express.static('/uploads'))
const port = 3015

setUpDB()

app.get('/', (req, res) => {
    // res.send('welcome to the website')
    res.json({
        notice: 'welcome to the website'
    })
})

app.use('/uploads',express.static('uploads'))
app.use('/', router)

// purpose of the find method - to go to the database and get all the data
// returns the promise object

app.listen(port, () => {
    console.log('listening to port', port)
})