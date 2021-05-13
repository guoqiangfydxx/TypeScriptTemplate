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
    // Provider利用了Context.Provider来实现，但是实际的代码中除了把store作为props传递下去之外，还有一个subscription对象
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
// 现在的connect的内部逻辑已经全都走的是connectAdvanced里面的逻辑
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

    // 如果要是不参照现在的源码中做的东西的话，那么从简单意义上去理解，mapStateToProps和mapDispatchToProps这两个函数生成的对象都会被作为一部分prop合并到props中传递给当前组件
    // 分别执行这两个函数然后保存下来，最后传递给包裹组件，这样理解起来是最容易的
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
