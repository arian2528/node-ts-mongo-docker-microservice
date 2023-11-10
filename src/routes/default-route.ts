import express from 'express';

const router = express.Router();

router.get('/default-router', (req, res) => {
    res.send('Hello from express default router');
});

module.exports = router;