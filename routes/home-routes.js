const router = require('express').Router();

router.get('/', (req, res) => {
    res.render('index');
});

router.get('/blockdust', (req, res) => {
    res.render('blockdust');
});

module.exports = router;