var express          = require("express"),
    mongoose         = require("mongoose"),
    bodyParser       = require("body-parser"),
    methodOverride   = require("method-override");

var app = express();
// ==================================================
// =      APPLICATION CONFIGURATION SETTINGS        =
// ==================================================
// set ejs template as default
app.set("view engine", "ejs");
// serve static content from public directory
app.use(express.static("public"));
// configure body parser
app.use(bodyParser.urlencoded({extended: true}));
// set method override query string parameter
app.use(methodOverride("_method"));
// ==================================================
// =      MONGOOSE CONFIGURATION                    =
// ==================================================
// mongoose.connect("mongodb://localhost/test");
// # database schema
// var userSchema = new mongoose.Schema({
//     name: String,
//     role: String,
// });
// var User = mongoose.model("User", userSchema);
// ==================================================
// =      ROUTES                                    =
// ==================================================
app.get("/", function(req, res){
    res.render("index");
});
app.get("*", function(req, res){
    res.render("404");
});
// ==================================================
// =      START SERVER LISTENER                     =
// ==================================================
app.listen(process.env.PORT || 3000, function() {
    console.log("Server listening on port " + (process.env.PORT || 3000) );
});