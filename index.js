const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
//https://www.youtube.com/playlist?list=PL4cUxeGkcC9jpvoYriLI0bY8DOgWZfi6u
//https://www.youtube.com/watch?v=MvY8vcrojYw&index=14&list=PL4cUxeGkcC9jBcybHMTIia56aV21o2cZ8
const routes = require('./routes/api');

var app = express();

//connect to mongoose
mongoose.connect('mongodb://localhost/ninjago');
mongoose.Promise=global.Promise;

app.use(express.static('public'))

app.use(bodyParser.json());
app.use("/api", routes);

//error handling

app.use(function(err,req,res,next){

res.status(422).send({error:err.message});
})


app.listen(process.env.port||4000,()=>{
console.log('port listening to port 4000');

});
