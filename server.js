const express = require("express");
const connectDB = require("./config/db");
const app = express();

//Connect to mongo DB
connectDB();

app.get("/", (req, res) => res.send("api running"));

//Init Middleware
app.use(express.json({ extended: false })); //Bodyparser is include in express
app.use("/uploads", express.static("uploads"));
//Route
app.use("/api/users", require("./routes/api/users"));
app.use("/api/auth", require("./routes/api/auth"));
app.use("/api/profile", require("./routes/api/profile"));
app.use("/api/blogs", require("./routes/api/blogs"));

const PORT = process.env.PORT || 5500;

app.listen(PORT, () => console.log(`Server running on ${PORT}`));
