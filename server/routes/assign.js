var express = require('express');
const Assign = require('../models/assign'); 
var router = express.Router();
let assignController = require('../controller/assign')

// CRUD --> Create, Read, Update, Delete

// Get router for Read Operation
router.get('/', assignController.displayassignList);

// Get router for Create Operation --> display the add assignout page
router.get('/add', assignController.displayAddPage);

// Post router for Create Operation --> process the add assignout page
router.post('/add', assignController.processAddPage);

// Get router for Edit/Update Operation --> Display the edit assignout page
router.get('/edit/:id', assignController.displayEditPage);

// Post router for Edit/Update --> Process the edit assignout page
router.post('/edit/:id', assignController.processEditPage);

// Get router for Delete Operation
router.get('/delete/:id', assignController.performDelete);

module.exports = router;