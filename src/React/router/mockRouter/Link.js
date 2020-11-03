import React from "react";
import { RouterContext } from "./context";
class Link extends React.Component {
  state = {};

  static ContextType = RouterContext;

  handleClick = (event) => {
    event.preventDefault();
    const { to } = this.props;
    this.context.history.push(to);
  };

  render() {
    const { to, children } = this.props;
    return (
      <a href={to} onClick={this.handleClick}>
        {children}
      </a>
    );
  }
}

export default Link;
