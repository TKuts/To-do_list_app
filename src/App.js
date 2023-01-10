import React, { Component } from "react";

import Header from "./components/Header";
import CreateTask from "./components/CreateTask";
import ListTask from "./components/ListTask";
import Footer from "./components/Footer";
import Sort from "./components/Sort";
import Modal from "./components/Modal";

import { sendRequest } from "./helpers";
import { sortArrayTasks } from "./helpers/sort";

import "./style/Reset.scss";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      sort: false,
      arrayTask: [],
      sortSelector: "old",
      modal: false,
    };

    this.addTask = this.addTask.bind(this);
    this.deleteTask = this.deleteTask.bind(this);
    this.modal = this.modal.bind(this);
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
    sendRequest("http://localhost:3001/todos", "GET")
      .then((result) => sortArrayTasks(result, this.state.sortSelector))
      .then((array) =>
        this.setState({
          arrayTask: array,
        })
      );
  }

  addTask(newTaskObject) {
    let sortSelector = this.state.sortSelector;

    let newArray = sortArrayTasks(
      [...this.state.arrayTask, newTaskObject],
      sortSelector
    );
    sendRequest("http://localhost:3001/todos", "POST", newTaskObject).then(
      (arrayTask) =>
        this.setState({
          arrayTask: newArray,
        })
    );
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
    if (sortSelector !== this.state.sortSelector) {
      this.setState({
        arrayTask: sortedArray,
        sortSelector: sortSelector,
      });
    }
  }

  modal() {
    console.log("+");
    this.setState({
      modal: !this.state.modal,
    });
  }

  deletAllTask(arrayTask) {
    console.log("second", arrayTask);

    arrayTask.map((el) => {
      sendRequest(`http://localhost:3001/todos/${el.id}`, "DELETE");
    });
    this.updatePage();
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
            <Modal modal={this.modal} statusModal={this.state.modal}>
              <h2 className="modal__content-title">
                Do you want to delete all the tasks?
              </h2>
              <div className="modal__content-ppp">
                <button
                  type="button"
                  className="modal__content-btn"
                  onClick={() => {
                    this.deletAllTask(this.state.arrayTask), this.modal();
                  }}
                >
                  Yes
                </button>
                <button
                  type="button"
                  className="modal__content-btn"
                  onClick={() => this.modal()}
                >
                  No
                </button>
              </div>

              {/* { if(deleteTask){
                  <p className="text-modal">Text</p>
              }
               <p><Attantion className="text-modal"></Attantion></p>
               
            } */}
              {/* [Cancel, Delete, Reset].forEach(element => {
              <button>{el}</button>
              
            } */}
              {/* ); */}

              {/* .fill(1) */}
            </Modal>
          </main>
          <Footer
            state={this.state}
            modal={this.modal}
            onSortBtn={this.onSortBtn} //-
          />
        </div>
      </div>
    );
  }
}

export default App;
