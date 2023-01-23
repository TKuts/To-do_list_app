import React, { Component } from "react";

import Header from "./components/Header";
import CreateTask from "./components/CreateTask";
import ListTask from "./components/ListTask";
import Footer from "./components/Footer";
import Sort from "./components/Sort";
import Modal from "./components/Modal";
import Slider from "./components/Slider";

import { sendRequest } from "./helpers";
import { sortArrayTasks } from "./helpers/sort";

import "./style/Reset.scss";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      arrayTask: [],
      sort: false,
      sortSelector: "old",
      modal: false,
      modalTitle: "",
      whatDelet: NaN,
      // =====
      modalConfirm: "",
    };

    this.addTask = this.addTask.bind(this);
    this.onCheck = this.onCheck.bind(this);
    this.editTask = this.editTask.bind(this);
    this.onSortBtn = this.onSortBtn.bind(this);
    this.sort = this.sort.bind(this);
    this.triggerModal = this.triggerModal.bind(this);
    this.modalConfirm = this.modalConfirm.bind(this);
    this.deleteTask = this.deleteTask.bind(this);
    this.resetListTask = this.resetListTask.bind(this);
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

  triggerModal = (props, whatDelet) => {
    props === "OneTask"
      ? this.setState({
          modalTitle: "Do you want to delete this items?",
          whatDelet: whatDelet,
        })
      : this.setState({
          modalTitle: "Do you want to delete all tasks?",
          whatDelet: whatDelet,
        });

    if (this.state.arrayTask.length !== 0) {
      this.setState({
        modal: !this.state.modal,
      });
    }
  };

  modalConfirm = () => {
    if (this.state.modalTitle === "Do you want to delete this items?") {
      this.deleteTask(this.state.whatDelet);
    } else {
      this.resetListTask(this.state.whatDelet);
    }
  };

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

  resetListTask(arrayTask) {
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
              onEdit={this.editTask}
              onCheck={this.onCheck}
              modal={this.triggerModal}
              modalConfirm={this.modalConfirm}
            />
            <Slider>
              <div className="page">
                <p className="page-text">
                  Welcome to list maker! Our page will help you stay on top of
                  your lists.
                </p>
              </div>
              <div className="page">
                <p className="page-text">
                  To get started simply type your first item in the box below
                  and a new list will be created automatically. Click the 'add'
                  button to add items to your list and the 'remove' button to
                  edit items out.
                </p>
              </div>
              <div className="page">
                <p className="page-text">
                  Click the 'reset' button to clear your list and start over.
                </p>
              </div>
              <div className="page">
                <p className="page-text">
                  In order to edit descriptions to your items click the
                  'description' button.
                </p>
              </div>
              <div className="page">
                <p className="page-text">
                  You can also check off items by using the check-boxes.
                </p>
              </div>
              <div className="page">
                <p className="page-text">
                  Once your list is complete you can choose how you would like
                  to see the items displayed with the 'sort list' drop-box.
                </p>
              </div>
              <div className="page">
                <p className="page-text">
                  You can also stylize your items using the 'stylize' button.
                </p>
              </div>
              <div className="page">
                <p className="page-text">
                  Enjoy making your lists and check back for new features in the
                  future!
                </p>
              </div>
            </Slider>

            <Modal
              modal={this.triggerModal}
              statusModal={this.state.modal} //
              modalTitle={this.state.modalTitle}
              modalConfirm={this.modalConfirm}
            >
              {this.state.modalTitle}
            </Modal>
          </main>
          <Footer
            state={this.state}
            modal={this.triggerModal}
            onSortBtn={this.onSortBtn}
          />
        </div>
      </div>
    );
  }
}

export default App;
