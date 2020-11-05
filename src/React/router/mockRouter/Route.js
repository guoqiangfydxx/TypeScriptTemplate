import React, { Fragment } from "react";
import matchPath from "./matchPath";
import { RouterContext } from "./context";
class Route extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { children, component, render, path, computedMatch } = this.props;
    return (
      <RouterContext.Consumer>
        {(context) => {
          const location = this.props.location || context.history.location;
          const match = computedMatch
            ? computedMatch
            : path
            ? matchPath(location.pathname, this.props)
            : context.match;
          console.log("match>>>>>>>", match);
          const props = {
            ...context,
            location,
            match,
          };
          return (
            <RouterContext.Provider value={props}>
              {match ? (
                children ? (
                  typeof children === "function" ? (
                    children(props)
                  ) : (
                    <Fragment>{children}</Fragment>
                  )
                ) : component ? (
                  React.cloneElement(component, props)
                ) : render ? (
                  render(props)
                ) : null
              ) : typeof children === "function" ? (
                children(props)
              ) : null}
            </RouterContext.Provider>
          );
        }}
      </RouterContext.Consumer>
    );
  }
}
export default Route;
