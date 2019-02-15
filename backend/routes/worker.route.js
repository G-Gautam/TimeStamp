const express = require('express');
const router = express.Router();

const worker_controller = require("../controllers/worker.controller");

router.post('/create', worker_controller.shift_create);

router.put('/:empId/:startTime/update', worker_controller.shift_update);

router.get('/:empId/:sDate/:eDate/allshifts', worker_controller.shift_between);

module.exports = router;