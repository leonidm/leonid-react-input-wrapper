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
    if (this.props.type === "radio") {
      this.props.updateRadioGroupValue(newVal);
    } else {
      this.setState({ val: newVal }, function() {
        console.log("Input component: ", this.props.id, this.state);
        const element = document.getElementById(target.id);
        console.log("Native element: ", this.props.id, {
          value: element.value,
          checked: element.checked
        });
      });
    }
  }

  render() {
    return (
      <input
        type={this.props.type}
        id={this.props.id}
        name={this.props.name}
        value={
          this.props.type === "checkbox"
            ? null
            : this.props.type === "radio"
            ? this.props.val
            : this.state.val
        }
        checked={this.props.type === "checkbox" ? this.state.val : null}
        defaultChecked={
          this.props.type === "radio"
            ? this.props.val === this.props.getRadioGroupValue()
            : null
        }
        onChange={event => this.handleChange(event)}
      />
    );
  }
}
