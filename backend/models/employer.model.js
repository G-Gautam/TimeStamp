const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let EmployerSchema = new Schema({
    fname: {type: String, required: true},
    lname: {type: String, required: true},
    totalHours: {type: Number, required: true, default: 0},
    payRate: {type: Number, required: true, default: 14.00}
});
// Export the model
module.exports = mongoose.model('Employer', EmployerSchema);
