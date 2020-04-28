const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  let today = new Date();

  let format = {
    weekday: "long",
    day: "numeric",
    month: "long",
  };

  let day = today.toLocaleDateString("en-US", format);

  res.render("list", { day });
});

app.listen(3000, () => {
  console.log("READY!");
});
