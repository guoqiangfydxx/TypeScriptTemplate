import React from "react";
import { RouterContext } from "./context";
import matchPath from "./matchPath";
class NavLink extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  static contextType = RouterContext;

  componentDidMount() {}

  handleClick = (event) => {
    const { to } = this.props;
    event.preventDefault();
    this.context.history.push(to);
  };

  render() {
    const { to, activeStyle, activeClassName } = this.props;
    console.log("context>>>>>", this.context);
    const currentLocation = this.context.location;
    const match = matchPath(currentLocation.pathname, {
      ...this.props,
      path: to,
    });
    console.log("navLink>>>>", match);
    return (
      <RouterContext.Provider
        value={{
          ...this.context,
          location: currentLocation,
        }}
      >
        <a
          href={to}
          onClick={this.handleClick}
          className={match ? activeClassName : ""}
          style={match ? activeStyle : {}}
        >
          {this.props.children}
        </a>
      </RouterContext.Provider>
    );
  }
}
export default NavLink;
