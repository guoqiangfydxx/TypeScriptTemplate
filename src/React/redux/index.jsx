import React from "react";
import store from "../../store";
import { Button, Divider } from "antd";
class TestRedux extends React.Component {
  state = {};

  componentDidMount() {
    store.subscribe(() => {
      this.forceUpdate();
    });
  }

  add = () => {
    /**
     * @param {(arg0: { type: string; }) => void} dispatch
     */
    // @ts-ignore
    store.dispatch((dispatch)=> {
          setTimeout(() => {
              dispatch({
                  type: 'ADD'
              });
          }, 10);
      });
  };

  minus = () => {
    store.dispatch({
      type: "MINUS",
    });
  };

  render() {
    return (
      <div>
        <Divider>redux</Divider>
        <p>store: {store.getState()}</p>
        <Button onClick={this.add}>add</Button>
        <Button onClick={this.minus}>minus</Button>
      </div>
    );
  }
}
export default TestRedux;
