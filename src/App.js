import React, { Component } from "react";

class NameForm extends Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ value: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log(this.state);
  }

  render() {
    return (
      <form method="POST" action="/" onSubmit={this.handleSubmit}>
        <label htmlFor="name">Name:</label>
        <br />
        <input
          type="text"
          name="name"
          value={this.state.value}
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
