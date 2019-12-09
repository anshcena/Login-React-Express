require('dotenv').config()

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const connection = require('./database');
var cors=require("cors");
testApiRouter=require("./api");



app.use(cors());
app.use("/api",testApiRouter);

app.route('/reactlogin')
  .get(function(req, res, next) {
    connection.query(
      "SELECT USERNAME FROM `reactlogin`", req.params.userId,
      function(error, results, fields) {
        if (error) throw error;
        res.json(results);
      }
    );
  });

app.get('/status', (req, res) => res.send('Working!'));

// Port 8080 for Google App Engine
app.set('port', process.env.PORT || 3000);
app.listen(3000);