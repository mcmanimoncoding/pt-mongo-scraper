// dependencies
const express = require("express")
const exbps = require("express-handlebars")
const mongoose = require("mongoose")
const bodyParser = require("body-parser")

// Initialize
const app = express();

// PORT
const PORT = process.env.PORT || 3333

// Router
const router = express.Router();

require("./config/routes")(router);

// DB
const db = process.env.MONGODB_URI || "mongodb://localhost/mongoHeadlines"

// Static directory
app.use(express.static(__dirname + "/public"));

app.engine("handlebars", exbps({
  defaultLayout: "main"
}))

app.set("view engine", "handlebars");

app.use(bodyParser.urlencoded({
  extended: false
}))

app.use(router);

// Mongoose
mongoose.connect(db, { useNewUrlParser: true }, function(err){
if(err) throw err;
else console.log("Mongoose Connected")
})


// Start the server
app.listen(PORT, function() {
  console.log("App running on port " + "http://localhost:"+PORT);
});

