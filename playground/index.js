const express = require('express')
// npm install mongoose
const mongoose = require('mongoose')
const app = express()
app.use(express.json())
const port = 3015

// mongodb connection configuration

mongoose.connect('mongodb://localhost:27017/oct-notes-app',{
    useNewUrlParser: true, 
    useUnifiedTopology: true
})
    .then(() => {
        console.log('connected to db')
    })
    .catch(err => {
        console.log(err)
    })

const Schema = mongoose.Schema

// Schema

const noteSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    createdAt: { 
        type: Date,
        default: new Date()
    },
    catagory: {
        type: Schema.Types.ObjectId,
        ref: 'Catagory', // which model we are refering to
        required: true
    }
})

// Note is a model here
// Note is our user-defined datatype
// Find is a static/class method because it is invoked on a function
// Instance method is invoked on object

const Note = mongoose.model('Note', noteSchema)

const catagorySchema = new Schema({
    name: {
        type: String,
        required: true
    }
})

const Catagory = mongoose.model('Catagory', catagorySchema)

app.get('/', (req, res) => {
    // res.send('welcome to the website')
    res.json({
        notice: 'welcome to the website'
    })
})
// purpose of the find method - to go to the database and get all the data
// returns the promise object
app.get('/notes', (req, res) => {
    Note.find().populate('catagory',['_id','name'])
        .then((response) => {
            res.json(response)
        })
        .catch(err => {
            res.json(err)
        })
})

app.post('/notes', (req, res) => {
    const body = req.body
    const note = new Note(body)
    note.save() 
        .then(note => {
            res.json(note)
        })
        .catch(err => {
            res.json(err)
        })
})

// the promise will still be resolved if the mongoose didn't find any record in the db

app.get('/notes/:id', (req, res) => {
    const id = req.params.id
    Note.findById(id).populate('catagory',['_id','name'])
        .then(note => {
            if(note) {
                res.json(note)
            } else {
                res.json({}) // value of note will be a null
            }
        })
        .catch(err => {
            res.json(err)
        })
}) 

app.delete('/notes/:id', (req, res) => {
    const id = req.params.id
    Note.findByIdAndDelete(id)
        .then(note => {
            if(note) {
                res.json(note)
            } else {
                res.json({})
            }
        })
        .catch(err => {
            res.json(err)
        })
})

app.put('/notes/:id', (req, res) => {
    const id = req.params.id
    const body = req.body
    Note.findByIdAndUpdate(id, body, {new: true, runValidators: true})
        .then(note => {
            console.log(note)
            if(note) {
                res.json(note)
            } else {
                res.json({})
            }
        })
        .catch(err => {
            res.json(err)
        })

})

app.get('/catagories', (req, res) => {
    Catagory.find()
        .then(catagories => {
            res.json(catagories)
        })
        .catch(err => {
            res.json(err)
        })
})

app.post('/catagories', (req, res) => {
    const body = req.body
    const catagory = new Catagory(body)
    catagory.save()
        .then(catagory => {
            res.json(catagory)
        })
        .catch(err => {
            res.json(err)
        })
})

app.listen(port, () => {
    console.log('listening to port', port)
})