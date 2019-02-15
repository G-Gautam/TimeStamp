const express = require('express');
const router = express.Router();

const worker_controller = require("../controllers/worker.controller");

router.post('/create', worker_controller.shift_create);

module.exports = router;