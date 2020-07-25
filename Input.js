import React, { Component } from "react";
import { render } from "react-dom";
import Hello from "./Hello";
import "./style.css";

export class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {
      val: props.val
    };
    this.isCheckType = ["checkbox", "radio"].indexOf(props.type) > -1;
  }

  handleChange(event) {
    const target = event.target;
    const newVal = this.isCheckType ? target.checked : target.value;
    this.setState({ val: newVal });
    console.log("Input: ", this.props.id, this.state);

    setTimeout(() => {
      const element = document.getElementById(target.id);
      console.log("Input: ", this.props.id, {
        value: element.value,
        checked: element.checked
      });
    }, 0); // we use setTimeout because value is not updated immediately
  }

  render() {
    return (
      <input
        type={this.props.type}
        id={this.props.id}
        name={this.props.name}
        value={this.isCheckType ? this.props.val : this.state.val}
        onChange={event => this.handleChange(event)}
      />
    );
  }
}
