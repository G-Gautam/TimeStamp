const Worker = require('../models/worker.model');
var date = new Date();
//Simple version, without validation or sanitation
exports.shift_create = function (req, res) {
    let shift = new Worker(
        {
            date: date.getFullYear() + "-" + (date.getMonth()+1) + "-" + date.getDate(),
            startTime: date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds(),
            endTime: date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds(),
            hours: 15,
            employerId: req.body.empId
        }
    );

    shift.save(function (err) {
        if (err) {
            return next(err);
        }
        res.send('Shift Created successfully')
    })
};
