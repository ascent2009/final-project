import React, { Component } from "react";

export class UserCreate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
    };
  }

  handleNameChange(event) {
    const name = event.target.value;
    this.setState({ name });
  }

  handleUserCreate() {
    const { name } = this.state;
    fetch("http://localhost:3000/users", {
      method: "POST",
      body: JSON.stringify({ name }),
      headers: {
        "Content-Type": "application/json",
      },
    }).then(() => {
      alert("Пользователь создан");
      this.setState({ name: "" });
    });
  }

  render() {
    const { name } = this.state;
    return (
      <div>
        <input
          type="text"
          placeholder="username"
          onChange={this.handleNameChange.bind(this)}
          value={name}
        />
        <input
          type="button"
          onClick={this.handleUserCreate.bind(this)}
          value="Создать"
          disabled={!name.length}
        />
      </div>
    );
  }
}
