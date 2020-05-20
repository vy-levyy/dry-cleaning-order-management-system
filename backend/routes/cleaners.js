const express = require('express');

const controller = require('../controllers/cleaners');

const router = express.Router();

// localhost:8000/cleaners/create
router.post('/create', controller.create);
// localhost:8000/cleaners/gallery
router.post('/gallery', controller.gallery);
// localhost:8000/cleaners/get
router.post('/get', controller.get);
// localhost:8000/cleaners/getall
router.post('/getall', controller.getAll);
// localhost:8000/cleaners/update
router.post('/update', controller.update);


module.exports = router;
