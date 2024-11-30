
const express = require('express');
const router = express.Router();


router.get('/', (req, res) => {
    res.send('Page À propos - Nous sommes une entreprise innovante.');
});

module.exports = router;

