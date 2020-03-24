const express = require('express');
const dotenv = require('dotenv');

//load env vars

dotenv.config({ path: './config/config.env' });

const app = express();

const PORT = process.env.PORT || 5000; // process.env its a default format for the envirment
app.listen(PORT, () => {
  console.log(
    `app listening on port ${PORT} and running on ${process.env.NODE_ENV} mode`
  );
});
