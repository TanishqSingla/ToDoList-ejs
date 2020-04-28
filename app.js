const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  let today = new Date();
  let currentDay = today.getDay();
  let day = "";

  if (currentDay == 6 || currentDay == 7) {
    day = "weekend";
  } else {
    day = "weekday";
  }

  res.render("list", { day });
});

app.listen(3000, () => {
  console.log("READY!");
});
