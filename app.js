const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

let listItems = [];

app.get("/", function (req, res) {
  let today = new Date();

  const options = {
    weekday: "long",
    day: "numeric",
    month: "long",
  };

  let day = today.toLocaleDateString("en-US", options);

  res.render("list", { typeOfDay: day, newListItems: listItems });
});

app.post("/", function (req, res) {
  const item = req.body.newItem;
  listItems.push(item);
  res.redirect("/");
});

app.listen(3000, function () {
  console.log("Server has started on port 3000");
});
