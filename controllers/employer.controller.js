const Employer = require('../models/employer.model');

//Simple version, without validation or sanitation
exports.employer_create = function (req, res) {
    let emp = new Employer(
        {
            fname: req.body.fname,
            lname: req.body.lname,
            totalHours: req.body.totalHours,
            payRate: req.body.payRate
        }
    );

    emp.save(function (err) {
        if (err) {
            return next(err);
        }
        res.send('Emp Created successfully')
    })
};

exports.employer_getAll = function(req, res){
    Employer.find({}, function(err, result){
        if(err) return next(err);
        res.send(result);
    })
}

exports.employer_update = function (req, res) {
    Employer.findOneAndUpdate({"fname": req.params.id}, {$set: {"lname": req.body.lname, "payRate": req.body.payRate, "totalHours": req.body.totalHours }}, function(err){
        if (err) return next(err);
        res.send('Emp udpated.');
    })
};

exports.employer_delete = function (req, res) {
    Employer.findOneAndRemove({"fname": req.params.id, "lname": req.params.lid}, function (err) {
        if (err) return next(err);
        res.send('Deleted successfully!');
    })
};