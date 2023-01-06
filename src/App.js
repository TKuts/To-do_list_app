import React, { Component } from "react";

import Header from "./components/Header";
import CreateTask from "./components/CreateTask";
import ListTask from "./components/ListTask";
import Footer from "./components/Footer";
import Sort from "./components/Sort";

import { sendRequest } from "./helpers";
import { sortArrayTasks } from "./helpers/sort";

import "./style/Reset.scss";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      sort: false,
      arrayTask: [],
      sortSelector: "",
    };

    this.addTask = this.addTask.bind(this);
    this.deleteTask = this.deleteTask.bind(this);
    this.deletAllTask = this.deletAllTask.bind(this);
    this.editTask = this.editTask.bind(this);
    this.onCheck = this.onCheck.bind(this);
    this.onSortBtn = this.onSortBtn.bind(this);
    this.sort = this.sort.bind(this);
  }

  componentDidMount() {
    this.updatePage();
  }

  updatePage() {
    sendRequest("http://localhost:3001/todos", "GET").then((result) => {
      this.setState({
        arrayTask: result,
      });
    });
  }

  addTask(arrayTask) {
    let sortSelector = this.state.sortSelector;

    if (sortSelector === "") {
      sendRequest("http://localhost:3001/todos", "POST", arrayTask).then(
        (arrayTask) =>
          this.setState({
            arrayTask: [arrayTask, ...this.state.arrayTask],
          })
      );
    } else {
      let newArray = sortArrayTasks(sortSelector, [
        ...this.state.arrayTask,
        arrayTask,
      ]);
      sendRequest("http://localhost:3001/todos", "POST", arrayTask).then(
        (arrayTask) =>
          this.setState({
            arrayTask: newArray,
          })
      );
    }
  }

  deleteTask(arrayTask) {
    sendRequest(`http://localhost:3001/todos/${arrayTask.id}`, "DELETE").then(
      (arrayTask) =>
        this.setState({
          arrayTask: this.state.arrayTask.filter(
            (el) => el.id !== arrayTask.id
          ),
        })
    );

    this.updatePage();
  }

  deletAllTask(arrayTask) {
    if (confirm("Do you want to delete all the tasks?")) {
      arrayTask.map((el) => {
        sendRequest(`http://localhost:3001/todos/${el.id}`, "DELETE");
      });
      this.updatePage();
    }
  }

  onCheck(arrayTask) {
    arrayTask.isCheck === false
      ? (arrayTask.isCheck = true)
      : (arrayTask.isCheck = false);

    sendRequest(
      `http://localhost:3001/todos/${arrayTask.id}`,
      "PUT",
      arrayTask
    );
    this.updatePage();
  }

  editTask(arrayTask, dataChange) {
    arrayTask.editForm === false
      ? (arrayTask.editForm = true)
      : (arrayTask.editForm = false);

    const editedTask = {
      ...arrayTask,
      title: dataChange.title,
      description: dataChange.description,
    };

    sendRequest(
      `http://localhost:3001/todos/${arrayTask.id}`,
      "PATCH",
      editedTask
    );
    this.updatePage();
  }

  onSortBtn() {
    this.setState(this.state.sort === false ? { sort: true } : { sort: false });
  }

  sort(sortedArray, sortSelector) {
    this.setState({
      arrayTask: sortedArray,
      sortSelector: sortSelector,
    });
  }

  render() {
    return (
      <div className="centr__page">
        <div className="wraper">
          <Header />
          <main className="main">
            <CreateTask onAdd={this.addTask} />
            {this.state.sort === false ? (
              <></>
            ) : (
              <Sort sort={this.sort} state={this.state} />
            )}
            <ListTask
              state={this.state.arrayTask}
              onDelete={this.deleteTask}
              onEdit={this.editTask}
              onCheck={this.onCheck}
            />
          </main>
          <Footer
            state={this.state}
            onDeletAll={this.deletAllTask}
            onSortBtn={this.onSortBtn} //-
          />
        </div>
      </div>
    );
  }
}

export default App;
