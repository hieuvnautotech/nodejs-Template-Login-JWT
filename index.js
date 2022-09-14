const express = require("express");
const expressLayouts = require("express-ejs-layouts");
const path = require("path");
const cors = require("cors");
const bodParser = require("body-parser");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const homeRoutes = require("./routes/home-routes");
const authRoutes = require("./routes/auth-routes");
const morgan = require("morgan"); // để log
const connectDB = require("./database/connection");

dotenv.config({ path: "config.env" });
const PORT = process.env.PORT || 8080;

// dotenv.config();

// connect db kiểu biến môi trường
// mongoose.connect(process.env.DB_CONNECT, { useNewUrlParser: true }, () =>
//   console.log("connected to db!")
// );

const app = express();
app.use(morgan("tiny"));
connectDB();
app.use(express.json()); //middleware
app.use(bodParser.raw({ type: "application/vnd.custom-type" }));
app.use(bodParser.text({ type: "text/html" }));

app.use(expressLayouts);
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(bodParser.json());

app.use(express.static(path.join(__dirname, "public")));
app.use(homeRoutes.routes);
app.use(authRoutes.routes);


app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
