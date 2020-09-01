import React, { Component } from "react";

class ConditionClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      name: "",
    };
  }
  componentDidMount() {
    document.title = `you clicked ${this.state.count} times`;
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.count !== this.state.count) {
      console.log("componentDidUpdate - updating thedocument title");
      document.title = `you clicked ${this.state.count} times`;
    }
  }
  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.value}
          onClick={(e) => {
            this.setState({ name: e.target.value });
          }}
        />
        <p>You clicked {this.state.count} </p>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Click Me
        </button>
      </div>
    );
  }
}

export default ConditionClass;

/**
 * why we need to condition in lifecycle because it will get execute in every render
 */
