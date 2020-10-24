import React from "react";
import { Button, Divider } from "antd";
function logProps(WrappedComponent: React.ComponentType<any>) {
  class LogProps extends React.Component<any, any> {
    componentDidUpdate(prevProps: any) {
      console.log("old Props", prevProps);
      console.log("new Props", this.props);
    }

    render() {
      const { forwardedRef, ...rest } = this.props
      return <WrappedComponent {...rest} ref={forwardedRef} />;
    }
  }

  return React.forwardRef((props, ref) => {
    return <LogProps {...props} forwardedRef={ref} />
  })
}

class FancyButton extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
  }

  render() {
    return (
      <div>
        <Divider>ref-hoc</Divider>
        <Button>fancy-button</Button>
      </div>
    );
  }
}

export default logProps(FancyButton);
