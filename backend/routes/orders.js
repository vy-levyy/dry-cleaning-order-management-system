const express = require('express');

const controller = require('../controllers/orders');

const router = express.Router();

// localhost:8000/orders/create
router.post('/create', controller.create);
// localhost:8000/orders/get
router.post('/get', controller.get);
// localhost:8000/orders/getall
router.post('/getall', controller.getAll);
// localhost:8000/orders/update
router.post('/update', controller.update);
// localhost:8000/orders/delete
router.post('/delete', controller.delete);


module.exports = router;
