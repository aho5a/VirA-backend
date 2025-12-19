const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
require("dotenv").config();

const app = express();
app.use(bodyParser.json());

mongoose.connect(process.env.MONGO_URI);

app.use("/webhook", require("./routes/whatsapp"));

app.listen(3000, () => console.log("VirA running"));
