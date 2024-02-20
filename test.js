require('newrelic')
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const morgan = require('morgan');
const routes = require('./router');

const db = mongoose.connection;

// Check connection
db.once('open', () => {
  console.log('Connected to MongoDB');
});

// Check for DB errors
db.on('error', (err) => {
  console.log(err);
});

// Initialize Express
const app = express();
app.use(express.json());
app.disable('x-powered-by');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('tiny'));

// API endpoint to insert data into logs collection

app.use('/api/v1', routes);

//app.post('/api/logs', validate, save);
//app.get('/api/logs', validate, countDocuments);

mongoose.connect('mongodb://localhost:27017/logs', (err)=> {
  if (err) {
  console.error(err);
  }
  mongoose.set('debug', true);
  const PORT = 3004;
  app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
  });

});
