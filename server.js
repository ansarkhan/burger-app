var express = require("express");
var exphbs = require("express-handlebars");

var PORT = 3000;

var app = express();

app.use(express.static("public"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');




var router = require("./controllers/burgers_controllers.js");

app.use(router);



app.listen(PORT, function() {
    console.log("App now listening at localhost:" + PORT);
  });

