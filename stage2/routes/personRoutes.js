const express = require('express');
const router = express.Router();
const personController = require('../controllers/personControllers');

router.get('/', personController.getAllPersons);
// Create Person...
router.post('/', personController.createPerson);

// Get Person...
router.get('/:user_id', personController.getPerson);

// Update User Profile...
router.put('/:user_id', personController.updatePerson);

// Delete User Profile...
router.delete('/:user_id', personController.deletePerson);

module.exports = router;
