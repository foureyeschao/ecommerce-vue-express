module.exports = app => {
    const product = require('../controllers/product.controller.js')

    const router = require('express').Router()

    //insert new data
    router.post('/', product.create)
    // retrieve all data
    router.get('/', product.findAll)
    //get one data
    router.get('/:id', product.findOne)
    //updat data
    router.put('/:id', product.update)
    //delete by id
    router.delete('/:id', product.delete)


    router.get('/', product.findAll)

    app.use('/api/product', router)
}