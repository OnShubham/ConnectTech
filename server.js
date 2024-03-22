const express = require("express"); // import express
const connectDB = require("./config/db"); // import the connectDB function from the db.js file

const app = express(); // create an express server

connectDB(); // connect to the database

// Init Middleware

app.use(express.json({ extended: false })); // allow the server to accept json data



// deffine the routes
app.use("/api/users", require("./Routes/api/users")); // use the users.js file for the /api/users route
app.use("/api/auth", require("./Routes/api/auth")); // use the auth.js file for the /api/auth route
app.use("/api/profile", require("./Routes/api/profile")); // use the profile.js file for the /api/profile route
app.use("/api/post", require("./Routes/api/post")); // use the post.js file for the /api/post route

app.get("/", (req, res) => res.send("API Runing!")); // get request to the root of the server

const port = process.env.PORT || 8000; // set the port to the environment port or 5000

app.listen(port, () => console.log(`Server running on port ${port}`)); // listen on the port
