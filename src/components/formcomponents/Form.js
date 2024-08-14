import React, { Component } from "react";

export class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "",
      comments: "",
      topic: "Angular",
    };
    this.handleUserNameChange = this.handleUserNameChange.bind(this);
    this.handleCommentsChange = this.handleCommentsChange.bind(this);
    this.handleTopicChange = this.handleTopicChange.bind(this);
    this.handleSubmission = this.handleSubmission.bind(this);
  }
  handleTopicChange(event) {
    this.setState({ topic: event.target.value });
  }

  handleUserNameChange(event) {
    this.setState({ userName: event.target.value });
  }

  handleCommentsChange(event) {
    this.setState({ comments: event.target.value });
  }

  handleSubmission(event) {
    alert(`${this.state.userName}${this.state.comments} ${this.state.topic}`);
    event.preventDefault(); //dont want the values to disappear
  }

  render() {
    return (
      <form onSubmit={this.handleSubmission}>
        <div>
          <label>User name</label>
          <input
            type="text"
            value={this.state.userName}
            onChange={this.handleUserNameChange}
          />
        </div>
        <div>
          <label>comments</label>
          <textarea
            value={this.state.comments}
            onChange={this.handleCommentsChange}
          />
        </div>
        <div>
          <select value={this.state.topic} onChange={this.handleTopicChange}>
            <option> React</option>
            <option> Angular</option>
            <option> Android</option>
          </select>
        </div>
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default Form;
