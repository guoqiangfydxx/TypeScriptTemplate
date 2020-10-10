import React from "react";
import store from "../../store";
import { bindActionCreators } from 'redux'
import { Button, Divider } from "antd";
import { addNum } from '../../util'
class TestRedux extends React.Component {
  state = {};

  componentDidMount() {
    store.subscribe(() => {
      this.forceUpdate();
    });

    this.boundActionCreators = bindActionCreators(addNum, store.dispatch)
    console.log(this.boundActionCreators)
  }

  add = () => {
    /**
     * @param {(arg0: { type: string; }) => void} dispatch
     */
    // @ts-ignore
    store.dispatch((dispatch) => {
      setTimeout(() => {
        dispatch({
          type: "ADD",
        });
      }, 10);
    });
  };

  minus = () => {
    store.dispatch({
      type: "MINUS",
    });
  };

  increase = () => {
    store.dispatch({
      type: "ADDAGE",
      age: 5,
    });
  };

  subtract = () => {
    store.dispatch({
      type: "MINUSAGE",
      age: 2,
    });
  };

  extraAdd = () => {
    // @ts-ignore
    this.boundActionCreators()
  }

  render() {
    return (
      <div>
        <Divider>redux</Divider>
        <p>store: {JSON.stringify(store.getState())}</p>
        <Button onClick={this.add}>add</Button>
        <Button onClick={this.minus}>minus</Button>
        <Button onClick={this.increase}>增加年龄</Button>
        <Button onClick={this.subtract}>减少年龄</Button>
        <Button onClick={this.extraAdd}>extra add</Button>
      </div>
    );
  }
}
export default TestRedux;
