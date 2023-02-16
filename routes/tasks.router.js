const router = require('express').Router();

const { createTask } = require('../controllers/tasks.controllers');


router.post('/posttask', createTask);


module.exports = router; 