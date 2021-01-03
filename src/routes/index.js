const rootRouter = require("./root");
const editRouter = require("./edit");
const removeRouter = require("./remove");

module.exports = {
	root: rootRouter,
	edit: editRouter,
	remove: removeRouter,
};
