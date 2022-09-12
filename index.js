const express = require("express");
const expressLayouts = require("express-ejs-layouts");
const path = require("path");
const cors = require("cors");
const bodParser = require("body-parser");
const dotenv = require("dotenv");
const mongoose = require("mongoose");


dotenv.config();

// connect db kiểu biến môi trường
mongoose.connect(
    process.env.DB_CONNECT,
    {useNewUrlParser: true},
    () => console.log('connected to db!')
);

const app = express();
app.use(express.json());//middleware

app.use(expressLayouts);
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(bodParser.json());

app.use(express.static(path.join(__dirname, "public")));


app.listen(3000, () =>
  console.log("App is listening on url http://localhost:3000")
);
