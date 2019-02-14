const express = require('express');
const router = express.Router();

// Require the controllers WHICH WE DID NOT CREATE YET!!
const employer_controller = require('../controllers/employer.controller');

// a simple test url to check that all of our files are communicating correctly.
router.post('/create', employer_controller.employer_create);

router.put('/:id/update', employer_controller.employer_update);

router.delete('/:id/:lid/delete', employer_controller.employer_delete);

module.exports = router;