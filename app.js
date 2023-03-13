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
//首頁的route
app.get("/", (req, res) => {
  res.render("index", { restaurants: restaurantList.results });
});

//餐廳詳細的route
app.get("/restaurants/:restaurant_id", (req, res) => {
  const restaurant = restaurantList.results.find(
    (restaurant) => restaurant.id.toString() === req.params.restaurant_id
  );
  res.render("show", { restaurant: restaurant });
});

//搜尋結果的route
app.get("/search", (req, res) => {
  const keyword = req.query.keyword.trim().toLowerCase();
  const restaurants = restaurantList.results.filter(
    (restaurant) =>
      restaurant.name.toLowerCase().includes(keyword) ||
      restaurant.category.includes(keyword)
  );

  if (restaurants.length) {
    //如果有搜尋結果，執行以下
    res.render("index", { restaurants: restaurants, keyword: keyword });
  } else {
    //如果搜尋不到, 推薦3間餐廳
    const recommend = recommendRestaurants(restaurantList.results);
    res.render("search", { restaurants: recommend, keyword: keyword });
  }
});

app.listen(port, () => {
  console.log(`Express is running on http://localhost:${port}`);
});

//get random restaurant
function recommendRestaurants(restaurants) {
  const randomRestaurantList = [];
  while (randomRestaurantList.length < 3) {
    const restaurant =
      restaurants[Math.floor(Math.random() * restaurants.length)];
    if (!randomRestaurantList.some((res) => res.id === restaurant.id)) {
      randomRestaurantList.push(restaurant);
    }
  }
  return randomRestaurantList;
}
