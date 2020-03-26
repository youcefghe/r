const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
//load env vars
dotenv.config({ path: './config/config.env' });

const bootcamps = require('./routes/bootcamps');

const app = express();

//using morgan for middleware
if (process.env.NODE_ENV == 'developement') {
  app.use(morgan('dev'));
}

app.use('/api/v1/bootcamps', bootcamps);

const PORT = process.env.PORT || 5000; // process.env its a default format for the envirment
app.listen(PORT, () => {
  console.log(
    `app listening on port ${PORT} and running on ${process.env.NODE_ENV} mode`
  );
});
