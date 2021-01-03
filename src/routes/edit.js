const express = require("express");
const Todo = require("../models/Todo");
const router = express.Router();

router
	.route("/:id")
	.get((req, res) => {
		const id = req.params.id;

		Todo.find({}, (err, tasks) => {
			res.render("edit.ejs", { todos: tasks, idTask: id });
		});
	})
	.post((req, res) => {
		const id = req.params.id;

		Todo.findByIdAndUpdate(id, { content: req.body.content }, (err) => {
			if (err) return res.send(500, err);

			res.redirect("/");
		});
	});

module.exports = router;
