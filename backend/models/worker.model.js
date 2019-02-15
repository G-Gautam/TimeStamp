const mongoose = require("mongoose")
const Schema = mongoose.Schema;
var employerId = mongoose.Schema.Types.ObjectId;

let WorkerSchema =  new Schema({
    date: {type: String, required: true},
    startTime: {type: String, required: true},
    endTime: {type: String, requried: false},
    hours: {type: Number, required: false},
    employerId: {type: mongoose.Schema.ObjectId, ref: ('Employer')}
});

module.exports = mongoose.model('Worker', WorkerSchema);