import React, { Component } from "react";

import Header from "./components/Header";
import CreateTask from "./components/CreateTask";
import ListTask from "./components/ListTask";
import Footer from "./components/Footer";
import Select from "./components/Select";
import Modal from "./components/Modal";
import Tutorial from "./components/Tutorial";
import Share from "./components/Share";

// import { API_URL } from "./config/Api";
import { sendRequest } from "./helpers/sendRequest";
import { sortArrayTasks } from "./helpers/sort";

import "./style/Reset.scss";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      defaultTast: [
        {
          id: 1,
          title: "Task #1",
          description: "Task #1 Description:",
        },
      ],
      arrayTask: [],
      select: false,
      consentSelect: "",
      sortSelector: "old",
      share: false,
      modal: false,
      modalTitle: "",
      whatDelet: null,
      slider: false,
    };

    this.addTask = this.addTask.bind(this);
    this.onCheck = this.onCheck.bind(this);
    this.editTask = this.editTask.bind(this);
    this.deleteTask = this.deleteTask.bind(this);
    this.onSliderBtn = this.onSliderBtn.bind(this);
    this.onShareBtn = this.onShareBtn.bind(this);
    this.onFormatBtn = this.onFormatBtn.bind(this);
    this.onSortBtn = this.onSortBtn.bind(this);
    this.resetListTask = this.resetListTask.bind(this);
    this.triggerModal = this.triggerModal.bind(this);
    this.sort = this.sort.bind(this);
    this.modalConfirm = this.modalConfirm.bind(this);
  }

  API = process.env.REACT_APP_API_URL;

  componentDidMount() {
    this.updatePage();
    //  this.onSliderBtn();
  }

  updatePage() {
    sendRequest(this.API, "GET")
      .then((result) => sortArrayTasks(result, this.state.sortSelector))
      .then((array) =>
        this.setState({
          arrayTask: array,
        })
      );
    // .catch((error) => console.error("error"));
  }

  addTask(newTaskObject) {
    let sortSelector = this.state.sortSelector;

    let newArray = sortArrayTasks(
      [...this.state.arrayTask, newTaskObject],
      sortSelector
    );
    sendRequest(this.API, "POST", newTaskObject).then((arrayTask) =>
      this.setState({
        arrayTask: newArray,
      })
    );
  }

  onCheck(arrayTask) {
    arrayTask.isCheck = !arrayTask.isCheck;

    sendRequest(
      `${process.env.REACT_APP_API_URL}/${arrayTask.id}`,
      "PUT",
      arrayTask
    );
    this.updatePage();
  }

  editTask(arrayTask, dataChange) {
    arrayTask.editForm = !arrayTask.editForm;

    const editedTask = {
      ...arrayTask,
      title: dataChange.title,
      description: dataChange.description,
    };

    sendRequest(`${this.API}/${arrayTask.id}`, "PATCH", editedTask);
    this.updatePage();
  }

  deleteTask(arrayTask) {
    sendRequest(`${this.API}/${arrayTask.id}`, "DELETE").then((arrayTask) =>
      this.setState({
        arrayTask: this.state.arrayTask.filter((el) => el.id !== arrayTask.id),
      })
    );

    this.updatePage();
  }
  onSliderBtn() {
    this.setState({ slider: !this.state.slider });
  }

  onShareBtn() {
    this.setState({ share: !this.state.share });
  }

  onFormatBtn() {
    this.setState({ select: !this.state.select, consentSelect: "format" });
  }

  onSortBtn() {
    this.setState({ select: !this.state.select, consentSelect: "sort" });
  }

  resetListTask(arrayTask) {
    arrayTask.map((el) => {
      sendRequest(`${this.API}/${el.id}`, "DELETE");
    });
    this.updatePage();
  }

  handleCopy() {
    let copyTask = [];
    sendRequest(this.API, "GET")
      .then((result) =>
        result.map((el, index) =>
          copyTask.push(
            `Task №${index + 1} Title: ${el.title} Description: ${
              el.description
            }`
          )
        )
      )
      .then((copy) => navigator.clipboard.writeText(copyTask));
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

  sort(sortedArray, sortSelector) {
    if (sortSelector !== this.state.sortSelector) {
      this.setState({
        arrayTask: sortedArray,
        sortSelector: sortSelector,
      });
    }
  }

  modalConfirm = () => {
    this.state.modalTitle === "Do you want to delete this items?"
      ? this.deleteTask(this.state.whatDelet)
      : this.resetListTask(this.state.whatDelet);
  };

  render() {
    return (
      <div className="centr__page">
        <div className="wraper">
          <Header />
          <main className="main">
            <CreateTask onAdd={this.addTask} />
            {!this.state.select ? (
              <></>
            ) : (
              <Select sort={this.sort} state={this.state} />
            )}

            <ListTask
              state={this.state.arrayTask}
              onEdit={this.editTask}
              onCheck={this.onCheck}
              modal={this.triggerModal}
              modalConfirm={this.modalConfirm}
              slider={this.state.slider}
              defaultTast={this.state.defaultTast}
            />

            {!this.state.slider ? (
              <></>
            ) : (
              <Tutorial
                slider={this.state.slider}
                onSliderBtn={this.onSliderBtn}
              />
            )}

            <Modal
              modal={this.triggerModal}
              statusModal={this.state.modal} //
              modalTitle={this.state.modalTitle}
              modalConfirm={this.modalConfirm}
            >
              {this.state.modalTitle}
            </Modal>

            {!this.state.share ? (
              <></>
            ) : (
              <Share
                statusShare={this.state.share}
                onShareBtn={this.onShareBtn}
              />
            )}
          </main>
          <Footer
            state={this.state}
            modal={this.triggerModal}
            onShareBtn={this.onShareBtn}
            handleCopy={this.handleCopy}
            onFormatBtn={this.onFormatBtn}
            onSortBtn={this.onSortBtn}
            onSliderBtn={this.onSliderBtn}
            slider={this.state.slider}
          />
        </div>
      </div>
    );
  }
}

export default App;
