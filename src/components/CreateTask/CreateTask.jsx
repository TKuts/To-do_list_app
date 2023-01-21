import React, { Component } from "react";
import "./CreateTask.scss";
import { isValidTextFields } from "../isValidTextFields";

class CreateTask extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      description: "",
      errorMessage: {
        title: false,
        description: false,
      },
    };
  }

  render() {
    const handleChangeTitle = (e) => {
      this.setState({ title: e.target.value });
    };

    const handleChangeDescription = (e) => {
      this.setState({ description: e.target.value });
    };

    const handleSummiteTask = (e) => {
      e.preventDefault();

      validation(this.state.title, this.state.description);

      this.myForm.reset(this.props.onAdd);

      this.setState({
        title: "",
        description: "",
      });
    };
    const validation = (firstValue, secondValue) => {
      if (firstValue !== "" && secondValue !== "") {
        this.props.onAdd({
          id: Date.now(),
          title: this.state.title,
          description: this.state.description,
          editForm: false,
          isCheck: false,
        });

        this.setState({
          errorMessage: false,
        });
      } else if (firstValue == "") {
        this.setState({
          errorMessage: { title: true },
        });
      } else if (secondValue == "") {
        this.setState({
          errorMessage: { description: true },
        });
      }
    };

    return (
      <form className="add__task" ref={(element) => (this.myForm = element)}>
        <input
          type="text"
          autoComplete="off"
          placeholder="Title"
          className="add__task-input error"
          id="titleInput"
          style={{
            border: this.state.errorMessage.title ? "1px solid red" : "none",
          }}
          onChange={(e) => handleChangeTitle(e)}
        />

        <textarea
          className="add__task-area "
          id="description"
          placeholder="Description"
          style={{
            border: this.state.errorMessage.description
              ? "2px solid red"
              : "none",
          }}
          onChange={handleChangeDescription}
        />
        {this.state.errorMessage.title ? (
          <p className="errorMessage">Please enter correct Tittle</p>
        ) : (
          <></>
        )}
        {this.state.errorMessage.description ? (
          <p className="errorMessage">Please enter correct Description</p>
        ) : (
          <></>
        )}
        <button
          type="button"
          className="add__task-btn"
          id="add-task"
          onClick={handleSummiteTask}
        >
          Add
        </button>
      </form>
    );
  }
}

export default CreateTask;
