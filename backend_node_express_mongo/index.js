const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const { PORT, mongoURI } = require("./config/config");
const baseroutes = require("./routes/routes");

const app = express();

app.use(cors());
app.use(bodyParser.json());

mongoose
  .connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => console.log("db connected"))
  .catch((err) => console.log(err.message));

app.use("/todos", baseroutes);

app.listen(PORT, () => {
  console.log("Server is running on port " + PORT);
});
