const express = require("express");
const router = express.Router();
const TodoSchema = require("../models/Todo");

router.get("/", (req, res) => {
	TodoSchema.find({}, (err, tasks) => {
		res.render("todo.ejs", { todos: tasks });
	});
});

router.post("/", async (req, res) => {
	const todoSchema = new TodoSchema({
		content: req.body.content,
	});

	try {
		await todoSchema.save();
		res.redirect("/");
	} catch (err) {
		console.error(err);
		res.redirect("/");
	}
});

module.exports = router;
