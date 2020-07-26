import React, { Component } from "react";
import { render } from "react-dom";
import Hello from "./Hello";
import { Input } from "./Input";
import "./style.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: "React",
      radioGroupValue: "2",
      inputs: [
        {
          type: "text",
          id: "text 1",
          val: "aa"
        },
        {
          type: "password",
          id: "passwd 1",
          val: "z"
        },
        {
          type: "checkbox",
          id: "checkbox 1",
          val: true
        },
        {
          type: "radio",
          id: "radio 1",
          name: "aa",
          val: "1",
          updateRadioGroupValue: v => this.updateRadioGroupValue(v),
          getRadioGroupValue: () => {
            return this.getRadioGroupValue();
          }
        },
        {
          type: "radio",
          id: "radio 2",
          name: "aa",
          val: "2",
          updateRadioGroupValue: v => this.updateRadioGroupValue(v),
          getRadioGroupValue: () => {
            return this.getRadioGroupValue();
          }
        }
      ]
    };
    this.state.inputs.forEach(x => (x.ref = null));
  }

  getRadioGroupValue() {
    return this.state.radioGroupValue;
  }

  updateRadioGroupValue(v) {
    this.state.radioGroupValue = v;
  }

  printAllStatuses() {
    console.log("NATIVE ELEMENTS");
    this.state.inputs.forEach(input => {
      const id = input.id;
      const element = document.getElementById(id);
      console.log(id, {
        value: element.value,
        checked: element.checked
      });
    });
    console.log("REACT COMPONENTS STATES");
    this.state.inputs.forEach(inp => {
      const component = inp.ref;
      console.log(inp.id, component.state);
    });

    //console.log('REACT CHILDREN', this.props.children);
    //this.props.children.forEach(c=>console.log(JSON.stringify(c)))
  }

  render() {
    return (
      <>
        <Hello name={this.state.name} />
        {this.state.inputs.map(x => (
          <div style={{ margin: "5px" }} key={x.id}>
            <Input
              {...x}
              ref={component => {
                x.ref = component;
              }}
            />
          </div>
        ))}
        <br />
        <input type="checkbox" id="z" defaultChecked={true} />
        <input type="radio" name="radio" value="1" />
        <input type="radio" name="radio" value="2" />
        <div>
          <button onClick={() => this.printAllStatuses()}>
            Print Statuses
          </button>
        </div>
      </>
    );
  }
}

render(<App />, document.getElementById("root"));
