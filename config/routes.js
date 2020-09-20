const express = require('express')
const router = express.Router()
const notesController = require('../app/controllers/notesController')
const categoriesController = require('../app/controllers/categoriesController')
// const multer = require('multer')
// const storage = require('./database')
// const upload = multer({storage: storage})
const multer = require('multer')
const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, './uploads')
    },
    filename: function(req, file, cb) {
        console.log('code is in routes',file)
        cb(null, Math.round(Math.random() * 100000) + file.originalname)
    }
})
const upload = multer({storage: storage})
upload.single("noteImage")

router.get('/notes', notesController.list) 
router.get('/notes/:id', notesController.show) 
router.post('/notes',upload.single('noteImage'), notesController.create)
router.put('/notes/:id', notesController.update)
router.delete('/notes/:id', notesController.del)

router.get('/categories', categoriesController.list)
router.get('/categories/:id', categoriesController.show)
router.post('/categories', categoriesController.create)
router.put('/categories/:id', categoriesController.update)
router.delete('/categories/:id', categoriesController.del)

module.exports = router