const express = require('express');
const router = express.Router();


router.get('/', (req, res) => {
    res.send('Voici les dernières nouvelles...');
});

module.exports = router;

