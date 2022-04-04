const router = require('express').Router();

router.get('/', (req, res) => {
    res.render('index');
});

router.get('/blockdust', (req, res) => {
    res.render('blockdust');
});

router.get('/reaver-cms', (req, res) => {
    res.render('reaver-cms');
});

router.get('/bloodgate', (req, res) => {
    res.render('bloodgate');
});

module.exports = router;