// required packages
//express
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const PORT = 4000; // wich port to run our server on

app.use(cors());
app.use(bodyParser.json());

// running server
app.listen(PORT, function(){
  console.log(" Server is running on Port: " + PORT);
});
