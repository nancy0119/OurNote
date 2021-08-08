const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended : true}));

app.set('view engine', "ejs");
app.use(express.static("public"));

app.get("/",function(req, res){
  res.render("index");
});


app.listen(3000, function() {
  console.log("Listening to port 3000");
});
