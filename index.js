const express = require("express");
const app = express();
const mongoose = require("mongoose");
const morgan = require("morgan");
const cors = require("cors");
require("dotenv").config();
const compression = require("compression");
const path = require("path");

//connect to mongoDB process.env.MONGO_URL ||
const URL = process.env.MONGO_URL || "mongodb://localhost/postApp";
mongoose.connect(
  URL,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) => {
    if (err) throw err;
    console.log("Connected to MongoDB");
  }
);

app.use(cors());
app.use(express.json());
app.use(morgan("tiny"));
app.use(compression());

// app.get("/", (req, res) => {
//   res.send("bismillah");
// });
app.use("/api/users", require("./routers/users"));
app.use("/api/posts", require("./routers/posts"));
app.use("/api/comments", require("./routers/comments"));
app.use("/api/replies", require("./routers/replies"));

// deployment
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
  });
  console.log("ishladi");
}

app.listen(process.env.PORT || 5000, () => {
  console.log("Server run...");
});
