import React, { Component } from "react";

class NameForm extends Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange() {
    var value = document.getElementById("name").value;
    this.setState({ value: value });
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log("submit");
  }

  render() {
    return (
      <form method="POST" action="/" onSubmit={this.handleSubmit}>
        <label htmlFor="name">Name:</label>
        <br />
        <input
          type="text"
          placeholder="Input name"
          id="name"
          name="name"
          onChange={this.handleChange}
        />
      </form>
    );
  }
}

class App extends Component {
  render() {
    return <NameForm />;
  }
}

export default App;
