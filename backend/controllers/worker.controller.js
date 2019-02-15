const Worker = require('../models/worker.model');
var date = new Date();
var shifts = []
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
function calHours(time){
    startTime = time;
    endTime = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();

    var intSTime = startTime.split(":");
    var intETime = endTime.split(":");

    var hours;

    if(parseInt(intETime[1]) >= parseInt(intSTime[1])){
        //get the hours and then add the minutes - simple calculation
        hours = (parseInt(intETime[0]) - parseInt(intSTime[0])) + ((parseInt(intETime[1]) - parseInt(intSTime[1]))/60)
    }

    else if(parseInt(intETime[1]) < parseInt(intSTime[1])){
        //get the minutes to complete start time minutes to the end time minutes
        var min = parseInt(intETime[1]) + (60 - parseInt(intSTime[1]))
        var hours = parseInt(intETime[0]) - parseInt(intSTime[0]) - 1 + min/60
    }
    return hours;
}
exports.shift_update = function (req,res){
    var date = new Date
    Worker.findOneAndUpdate({"employerId": req.params.empId}, {$set: 
        {"endTime": date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds(),
         "hours": calHours(req.params.startTime) }}, function(err){
        if (err) return next(err);
        res.send('Shift udpated.');
    })
};

exports.shift_between = function(req, res){
    Worker.find({ date: { $gt: new Date(req.params.sDate)},
    date: {$lte: new Date(req.params.eDate)},
    employerId: {$eq: req.params.empId}}, function(err, result){
        if(err) return next(err);
        res.send(result)
    })
 }
