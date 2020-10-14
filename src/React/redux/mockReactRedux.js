// @ts-nocheck
import React from "react";
import { bindActionCreators } from "redux";
const ReduxContext = React.createContext(null);
export class Provider extends React.Component {
  /**
   * @param {any} props
   */
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { store } = this.props;
    return (
      <ReduxContext.Provider value={store}>
        {this.props.children}
      </ReduxContext.Provider>
    );
  }
}
/**
 * @param {(arg0: any, arg1: Readonly<any> & Readonly<{ children?: React.ReactNode; }>) => any} mapStateToProps
 * @param {(arg0: any, arg1: Readonly<any> & Readonly<{ children?: React.ReactNode; }>) => any} mapDispatchToProps
 */
/**
 * @param {JSX.IntrinsicAttributes} WrppedComponent
 */
export const connect = (mapStateToProps, mapDispatchToProps) => (
  WrppedComponent
) => {
  return class Hoc extends React.Component {
    /**
     * @param {any} props
     */
    constructor(props) {
      super(props);
      this.state = {
        props: {},
      };
    }

    componentDidMount() {
      this.update();
      const { subscribe } = this.context;
      subscribe(() => {
        this.update();
      });
    }

    update = () => {
      const { getState, dispatch } = this.context;
      const state = getState();
      const stateProps = mapStateToProps(state, this.props);
      let dispatchProps;
      if (typeof mapDispatchToProps === "object") {
        dispatchProps = bindActionCreators(mapDispatchToProps, dispatch);
      } else if (typeof mapDispatchToProps === "function") {
        dispatchProps = mapDispatchToProps(dispatch, this.props);
      } else {
        dispatchProps = { dispatch };
      }
      this.setState({
        props: {
          ...stateProps,
          ...dispatchProps,
        },
      });
    };

    static contextType = ReduxContext;

    render() {
      return <WrppedComponent {...this.props} {...this.state.props} />;
    }
  };
};
