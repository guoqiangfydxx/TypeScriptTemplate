import { Component } from "react";
import React from "./mockReact/kreact1";
class TestReact extends Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="myDiv">
        <p>这是一个文本</p>
      </div>
    );
  }
}
export default TestReact;
