// import from mode_modules dependencies
import React, { Component } from "react"; // this is essential
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

// import Components from components
import CreateTodo from "./components/create-todo.component.js";
import EditTodo from "./components/edit-todo.component.js";
import TodosList from "./components/todos-list.component.js";
import logo from "./logo.svg";

// the interface
class App extends Component {
  render() {
    return (
      <Router>
      <div className="container">

        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="/" target="_blank">
            <img src={logo} width="30" alt="alt" />
          </a>
          <Link to="/" className="navbar-brand"> MERN-stack-todo app </Link>
          <ul className="navbar-nav mr-auto" >
            <li className="navbar-item">
              <Link to="/" className="nav-link"> Todos</Link>
            </li>
            <li className="navbar-item">
              <Link to="/create" className="nav-link">Create Todos</Link>
            </li>
          </ul>
        </nav>
        <h2> MERN-Stack Todo App </h2>
        <Route exact path="/" component={TodosList} />
        <Route path="/edit/:id" component={EditTodo} />
        <Route path="/create" component={CreateTodo} />
      </div>
      </Router>
    )
  }
}

export default App;
