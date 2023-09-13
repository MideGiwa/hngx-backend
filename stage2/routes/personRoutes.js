const express = require('express');
const router = express.Router();
const personController = require('../controllers/personControllers');

router.get('/home', (req, res) => {
    res.json({ message: 'Homepage' });
});
// Create Person...
router.post('/', personController.createPerson);

// Get Person...
router.get('/:user_id', personController.getPerson);

// Update User Profile...
router.put('/:user_id', personController.updatePerson);

// Delete User Profile...
router.delete('/:user_id', personController.deletePerson);

module.exports = router;
