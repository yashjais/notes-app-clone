const Category = require('../models/category')
const Notes = require('../models/note')

module.exports.list = (req, res) => {
    Category.find()
        .then(categories => {
            res.json(categories)
        })
        .catch(err => {
            res.json(err)
        })
}

module.exports.show = (req, res) => {
    const id = req.params.id
    const promise = []
    promise.push(Category.findById(id))
    promise.push(Notes.find({category: id}))
    Promise.all(promise)
        .then(resp => {
            // console.log('category',res[0])
            // console.log('notes',res[1])
            if(resp[0] || resp[1]){
                res.json(resp)
            } else {
                res.json({})
            }
        })
        .catch(err => {
            res.json(err)
        })

        // .then(cat => {
        //     if(cat){
        //         res.json(cat)
        //     }else{
        //         res.json({})
        //     }
        // })
        // .catch(err => {
        //     res.json(error)
        // })
}

module.exports.create = (req, res) => {
    const body = req.body
    const category = new Category(body)
    category.save()
        .then(cat => {
            res.json(cat) 
        })
        .catch(err => {
            res.json(err)
        }) 
}

module.exports.update = (req, res) => {
    const body = req.body
    const id = req.params.id
    Category.findByIdAndUpdate(id, body, {new: true, runValidators: true})
        .then(cat => {
            if(cat) {
                res.json(cat)
            } else {
                res.json({})
            }
        })
        .catch(err => {
            res.json(err)
        })
}

module.exports.del = (req, res) => {
    const id = req.params.id
    Category.findByIdAndRemove(id)
        .then(cat => {
            if(cat) {
                res.json(cat)
            } else {
                res.json({})
            }
        })
        .catch(err => {
            res.json(err)
        })
}