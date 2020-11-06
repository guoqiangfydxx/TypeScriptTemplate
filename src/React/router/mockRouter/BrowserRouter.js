import React from "react";
import { createBrowserHistory } from "history";
import { RouterContext } from "./context";
class BrowserRouter extends React.Component {
  constructor(props) {
    // eslint-disable-next-line no-undef
    super(props);
    this.history = createBrowserHistory();
    this.state = {
      location: this.history.location,
    };
  }

  static computedMatch(pathname) {
    return { path: "/", url: "/", params: {}, isExact: pathname === "/" };
  }

  componentDidMount() {
    this.unlisten = this.history.listen(({ location }) => {
      this.setState({
        location,
      });
    });
  }

  componentWillUnmount() {
    this.unlisten && this.unlisten();
  }

  render() {
    return (
      <RouterContext.Provider
        value={{
          history: this.history,
          location: this.state.location,
          match: BrowserRouter.computedMatch(this.state.location.pathname),
        }}
      >
        {this.props.children}
      </RouterContext.Provider>
    );
  }
}
export default BrowserRouter;
