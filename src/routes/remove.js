const express = require("express");
const Todo = require("../models/Todo");
const router = express.Router();

router.get("/:id", (req, res) => {
	const id = req.params.id;

	Todo.findByIdAndDelete(id, (err) => {
		if (err) return res.send(500, err);

		res.redirect("/");
	});
});

module.exports = router;
