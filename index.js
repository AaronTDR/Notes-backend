const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
const cors = require("cors");

const app = express();

//configure cors
const whiteList = ["http://localhost:3000"];
const corsOptions = {
  origin: (origin, callback) => {
    const exists = whiteList.some((domain) => domain === origin);
    if (exists) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by cors"));
    }
  },
};

//Enable cors
app.use(cors());

mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/reminders", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Enable routing
app.use("/", routes);

app.listen(4000, () => {
  console.log("server running ");
});
