import React, { Component } from "react";
import "./CreateTask.scss";

import { isValidTextFields } from "../../helpers/isValidTextFields";

class CreateTask extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      description: "",
      errorMessage: "OK",
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

      if (
        isValidTextFields(this.state.title, this.state.description) === "OK"
      ) {
        this.props.onAdd({
          id: Date.now(),
          title: this.state.title,
          description: this.state.description,
          editForm: false,
          isCheck: false,
        });
        this.setState({
          errorMessage: isValidTextFields(
            this.state.title,
            this.state.description
          ),
        });
      } else {
        this.setState({
          errorMessage: isValidTextFields(
            this.state.title,
            this.state.description
          ),
        });
      }

      this.myForm.reset(this.props.onAdd);

      this.setState({
        title: "",
        description: "",
      });
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
            border: this.state.errorMessage !== "OK" ? "2px solid red" : "none",
          }}
          onChange={(e) => handleChangeTitle(e)}
        />

        <textarea
          className="add__task-area "
          id="description"
          placeholder="Description"
          style={{
            border: this.state.errorMessage !== "OK" ? "2px solid red" : "none",
          }}
          onChange={handleChangeDescription}
        />
        {this.state.errorMessage !== "OK" ? (
          <p className="errorMessage">{this.state.errorMessage}</p>
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
