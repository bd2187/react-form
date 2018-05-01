import React, { Component } from "react";

class NameForm extends Component {
  constructor(props) {
    super(props);
    this.state = { name: "", about: "", occupation: "web_developer" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    switch (e.target.id) {
      case "name":
        this.setState({ name: e.target.value });
        break;
      case "about":
        this.setState({ about: e.target.value });
        break;
      case "occupation":
        this.setState({ occupation: e.target.value });
        break;
      default:
        return;
    }
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
          id="name"
          value={this.state.name}
          onChange={this.handleChange}
        />

        <br />
        <br />

        <label htmlFor="occupation">Occupation:</label>
        <br />
        <select
          name="occupation"
          id="occupation"
          value={this.state.occupation}
          onChange={this.handleChange}
        >
          <option value="dev_ops">Dev Ops</option>
          <option value="web_developer">Web Developer</option>
          <option value="it_support">IT Support</option>
        </select>

        <br />
        <br />

        <label htmlFor="about">About Me:</label>
        <br />
        <textarea
          id="about"
          value={this.state.about}
          onChange={this.handleChange}
        />
        <br />
        <input type="submit" />
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
