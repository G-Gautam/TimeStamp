const express = require('express');
const bodyParser = require('body-parser');

const employer = require('./routes/employer.route'); // Imports routes for the products
const worker = require('./routes/worker.route')
const app = express();


// Set up mongoose connection
const mongoose = require('mongoose');
let dev_db_url = 'mongodb://ggupta24:Nyancat12!@ds243963.mlab.com:43963/kannandentalclinic';
const mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use('/', employer);
app.use('/html', express.static(__dirname + '/public/html'));
app.use('/css', express.static(__dirname + '/public/css'));
app.use('/js', express.static(__dirname + '/public/js'));

app.use('/worker', worker);

let port = 8080;

app.listen(port, () => {
    console.log('Server is up and running on port numner ' + port);
});