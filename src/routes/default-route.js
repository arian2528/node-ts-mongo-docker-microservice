"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const router = express.Router();
router.get('/default-router', (req, res) => {
    res.send('Hello from express default router');
});
module.exports = router;
