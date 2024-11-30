const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('Page de contact - Contactez-nous!');
});

module.exports = router;



