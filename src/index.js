const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv").config();

const app = express();

const routes = require("./routes");

// Connecting to MongoDB
mongoose.connect(
	process.env.DB_CONNECT,
	{
		useFindAndModify: false,
		useNewUrlParser: true,
		useUnifiedTopology: true,
	},
	() => {
		console.log("💾 Connected to MongoDB Database");

		app.listen(3000, () => {
			console.log("🚀 Server running at http://localhost:3000");
		});
	}
);

// Static Folder Configuration
app.use("/static", express.static("public"));

// Allows app to extract data from form
app.use(express.urlencoded({ extended: true }));

// EJS View Engine Setup
app.set("view engine", "ejs");

// Routes Setup
app.use("/", routes.root);
app.use("/edit", routes.edit);
app.use("/remove", routes.remove);
