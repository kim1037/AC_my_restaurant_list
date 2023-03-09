//Require packages
const express = require("express");
const app = express();
const port = 3000;
const restaurantList = require("./restaurant.json");
const exphbs = require("express-handlebars");

//Setting template engine
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// setting static files
app.use(express.static("public"));

//Setting routes
app.get("/", (req, res) => {
  res.render("index");
});

app.listen(port, () => {
  console.log(`Express is running on http://localhost:${port}`);
});
