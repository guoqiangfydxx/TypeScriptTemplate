import React from "react";
import { createBrowserHistory } from "history";
import { RouterContext } from './context'
class BrowserRouter extends React.Component {
  constructor(poprs) {
    // eslint-disable-next-line no-undef
    super(props);
    this.history = createBrowserHistory();
    this.state = {
      location: this.history.location,
    };
  }

  componentDidMount() {
    this.unlisten = this.history.listen((location) => {
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
        }}
      >
        {this.props.children}
      </RouterContext.Provider>
    );
  }
}
export default BrowserRouter;
