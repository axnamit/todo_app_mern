let Todo = require("../models/models");

//fetch all list
exports.fetchAllList = (req, res) => {
  Todo.find((err, todos) => {
    if (err) console.log(err);
    else {
      return res.json(todos);
    }
  });
};

//fetch todo by id

exports.fetchTodoById = (req, res) => {
  const id = req.params.id;
  Todo.findById(id, (err, todo) => {
    if (err) console.log(err);
    return res.json(todo);
  });
};

//add new todo

exports.addNewTodoList = (req, res) => {
  const todo = new Todo(req.body);
  todo
    .save()
    .then((todo) => {
      res.status(200).json({ todo: "todo added successfully" });
    })
    .catch((err) => {
      console.log(err);
      res.status(400).send("adding new todo failed");
    });
};

//update new todo
exports.updateTodo = (req, res) => {
  Todo.findById(req.params.id, (err, todo) => {
    if (!todo) res.status(404).send("Data is not found");
    else {
      todo.todo_description = req.body.todo_description;
      todo.todo_responsible = req.body.todo_responsible;
      todo.todo_priority = req.body.todo_priority;
      todo.todo_completed = req.body.todo_completed;
      todo
        .save()
        .then((todo) => {
          res.json("Todo updated");
        })
        .catch((err) => {
          res.status(400).send("Update not possible");
        });
    }
  });
};
