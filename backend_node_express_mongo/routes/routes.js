const express = require("express");
const routestodo = express.Router();

const {
  fetchAllList,
  fetchTodoById,
  addNewTodoList,
  updateTodo,
} = require("../controller/controller");

routestodo.get("/", fetchAllList);

routestodo.get("/:id", fetchTodoById);

routestodo.post("/add", addNewTodoList);

routestodo.post("/update/:id", updateTodo);

module.exports = routestodo;
