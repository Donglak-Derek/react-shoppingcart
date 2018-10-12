import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0
  };
  render() {
    return (
      <div>
        <span>{this.state.count}</span>
        <button>increment</button>
      </div>
    );
  }
}

export default Counter;
