const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

let items = [];

app.get("/", (req, res) => {
  let today = new Date();

  let format = {
    weekday: "long",
    day: "numeric",
    month: "long",
  };

  let day = today.toLocaleDateString("en-US", format);

  res.render("list", { day, newListItem: items });
});

app.post("/", (req, res) => {
  let item = req.body.newItem;
  items.push(item);

  res.redirect("/");
});

app.listen(3000, () => {
  console.log("READY!");
});
