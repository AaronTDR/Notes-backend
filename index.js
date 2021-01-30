const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");

const app = express();

mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/veterinaria", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
});

// Enable routing
app.use("/", routes);

app.listen(4000, () => {
  console.log("server running ");
});
