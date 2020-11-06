import React from "react";
import { RouterContext } from "./context";
class EmptyComponent extends React.Component {
  componentDidMount() {
    const { onMount } = this.props;
    onMount && onMount.call(this, this);
  }

  componentDidUpdate(prevProps) {
    const { onUpdate } = this.props;
    onUpdate && onUpdate.call(this, this, prevProps);
  }

  componentWillUnmount() {
    const { onUnmount } = this.props;
    onUnmount && onUnmount.call(this, this);
  }

  render() {
    return null;
  }
}

class Prompt extends React.Component {
  render() {
    const { message } = this.props;
    return (
      <RouterContext.Consumer>
        {(context) => {
          const block = context.history.block;
          return (
            <EmptyComponent
              onMount={(self) => {
                console.log("this>>>>>>", self);
                self.release = block(message);
              }}
              onUnmount={(self) => {
                self.release();
              }}
              onUpdate={(self, prevProps) => {
                console.log("this.release", self, self.release);
                if (message !== prevProps.message) {
                  self.release();
                  self.release = block(message);
                }
              }}
              message={message}
            />
          );
        }}
      </RouterContext.Consumer>
    );
  }
}
export default Prompt;
