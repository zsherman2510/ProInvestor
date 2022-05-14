const express = require('express');
const { getInvestments, addInvestments } = require('../controllers/investments');
const router = express.Router();


router.get('/', getInvestments);
router.post('/add', addInvestments);

module.exports = router;