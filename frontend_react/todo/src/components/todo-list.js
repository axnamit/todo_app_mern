import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import { DropdownButton, Dropdown } from "react-bootstrap";

const Todo = (props) => (
  <tr>
    <td>
      {props.todo.todo_completed ? (
        <>
          <p>
            <del>{props.todo.todo_description}</del>
          </p>
        </>
      ) : (
        <>{props.todo.todo_description}</>
      )}
    </td>
    <td>
      {props.todo.todo_completed ? (
        <>
          <p>
            <del>{props.todo.todo_responsible}</del>
          </p>
        </>
      ) : (
        <>{props.todo.todo_responsible}</>
      )}
    </td>

    <td>
      {props.todo.todo_completed ? (
        <>
          <p>
            <del>{props.todo.todo_priority}</del>
          </p>
        </>
      ) : (
        <>{props.todo.todo_priority}</>
      )}
    </td>

    <td>
      {props.todo.todo_completed ? (
        <>
          <p>
            <del>{props.todo.todo_completed.toString()}</del>
          </p>
        </>
      ) : (
        <>{props.todo.todo_completed.toString()}</>
      )}
    </td>
    <td>
      <Link to={"/edit/" + props.todo._id}>Edit</Link>
    </td>
  </tr>
);

export default class TodosList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      compelteList: [],
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:4000/todos")
      .then((res) => {
        console.log(res.data);
        this.setState({
          todos: res.data,
          compelteList: res.data,
        });
      })
      .catch((err) => console.log(err));
  }

  todoList = () =>
    this.state.todos.map((todo, index) => <Todo todo={todo} key={index} />);

  handleSelect = (e) => {
    console.log(typeof e);

    switch (e) {
      case "1":
        {
          console.log(e);

          this.setState({
            todos: this.state.compelteList,
          });
        }

        break;
      case "2":
        this.setState({
          todos: this.state.compelteList.filter((e) => !e.todo_completed),
        });
        break;
      case "3":
        this.setState({
          todos: this.state.compelteList.filter((e) => e.todo_completed),
        });
        break;
    }
  };

  render() {
    return (
      <div>
        <h3>Todos List</h3>
        <DropdownButton
          alignRight
          title="Filter"
          id="dropdown-menu-align-right"
          onSelect={this.handleSelect}
        >
          <Dropdown.Item eventKey="1">All</Dropdown.Item>
          <Dropdown.Item eventKey="2">Remeaning</Dropdown.Item>
          <Dropdown.Item eventKey="3">Compelted</Dropdown.Item>
        </DropdownButton>
        <table className="table table-striped" style={{ marginTop: 20 }}>
          <thead>
            <tr>
              <th>Description</th>
              <th>Responsible</th>
              <th>Priority</th>
              <th>completed</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>{this.todoList()}</tbody>
        </table>
      </div>
    );
  }
}
