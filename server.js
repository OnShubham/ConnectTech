const express = require("express"); // import express
const connectDB = require("./config/db"); // import the connectDB function from the db.js file
const cors = require("cors"); // import cors

const app = express(); // create an express server

// connect to the database
connectDB();


app.use(cors());

//  add cors
const corsoptions = {
  origin: "http://localhost:3000",
  method:
    "POST , GET , PUT , DELETE , PATCH , OPTIONS , HEAD , CONNECT , TRACE , COPY , LOCK , MKCOL , MOVE , PROPFIND , PROPPATCH , SEARCH , UNLOCK , BIND , REBIND , UNBIND , ACL , REPORT , MKACTIVITY , CHECKOUT , MERGE , M-SEARCH , NOTIFY , SUBSCRIBE , UNSUBSCRIBE , PATCH , PURGE , MKCALENDAR , LINK , UNLINK , SOURCE , and any other method that is implemented by the server or available in future",
  Credentials: true,
};


// Init Middleware

app.use(express.json({ extended: false })); // allow the server to accept json data

// deffine the routes
app.use("/api/users", require("./Routes/api/users"));
app.use("/api/auth", require("./Routes/api/auth"));
app.use("/api/profile", require("./Routes/api/profile"));
app.use("/api/post", require("./Routes/api/post"));

app.get("/", (req, res) => res.send("API Runing!")); // get request to the root of the server

const port = process.env.PORT || 8000; // set the port to the environment port or 5000

app.listen(port, () => console.log(`Server running on port ${port}`)); // listen on the port
