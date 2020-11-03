import React from "react";
import { RouterContext } from "./context";
import matchPath from "./matchPath";
class Switch extends React.Component {
  state = {};

  render() {
    return (
      <RouterContext.Consumer>
        {(context) => {
          const location = this.props.location || context.location;
          let element,
            match = null;
          React.Children.forEach(this.props.children, (child) => {
            if (match === null && React.isValidElement(child)) {
              element = child;
              const path = child.props.path;
              match = path
                ? matchPath(location.pathname, { ...child.props, path })
                : context.match;
            }
          });
          return match ? React.cloneElement(element, { location }) : null;
        }}
      </RouterContext.Consumer>
    );
  }
}
export default Switch;
