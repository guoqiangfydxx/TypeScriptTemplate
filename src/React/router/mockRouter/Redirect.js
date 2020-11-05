import React from "react";
import RouterContext from "./context";
class Redirect extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { to } = this.props;
    return (
      <RouterContext.Consumer>
        {(context) => {
          const { history } = context;
          return <LifeCycle onMount={() => history.push(to)} />;
        }}
      </RouterContext.Consumer>
    );
  }
}

class LifeCycle extends React.Component {
  componentDidMount() {
    const { onMount } = this.props;
    onMount && onMount.call(this);
  }

  render() {
    return null;
  }
}

export default Redirect;
