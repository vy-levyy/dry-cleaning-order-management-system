const express = require('express');

const controller = require('../controllers/auth');

const router = express.Router();

// localhost:8000/auth/login
router.post('/login', controller.login);
// localhost:8000/auth/registration
router.post('/registration', controller.register);
// localhost:8000/auth/verify
router.post('/verify', controller.verify);
// localhost:8000/auth/password/request
router.post('/password/request', controller.requestUpdatePassword);
// localhost:8000/auth/password/update
router.post('/password/update', controller.changePassword);
// localhost:8000/auth/get
router.post('/get', controller.get);
// localhost:8000/auth/getall
router.post('/getall', controller.getAll);
// localhost:8000/auth/update
router.post('/update', controller.updateInformation);



module.exports = router;
