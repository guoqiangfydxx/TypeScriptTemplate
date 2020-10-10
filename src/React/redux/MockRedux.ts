import { compose } from "redux";

export function createStore(
  reducer: (arg0: any, arg1: any) => any,
  enhancer: any
) {
  if (enhancer) {
    return enhancer(createStore)(reducer);
  }
  let currentState: any = undefined;
  let currentListeners: any[] = [];
  function getState() {
    return currentState;
  }

  function dispatch(action: any) {
    currentState = reducer(currentState, action);
    currentListeners.forEach((item) => item());
  }

  function subscribe(callback: any) {
    currentListeners.push(callback);
  }

  dispatch({ type: "@OROERE/INIT" });

  return {
    getState,
    dispatch,
    subscribe,
  };
}

export function applyMiddleware(...middlewares: any[]) {
  return (createStore: (arg0?: any) => any) => (...args: any) => {
    const store = createStore(...args);
    let dispatch = store.dispatch;
    const middleAPI = {
      getState: store.getState,
      dispatch,
    };
    // applyMiddleware实际的返回值就是两层函数，所以这里是执行了两次，第一次是先给每个中间件传入dispatch扩展，然后是聚合所有的中间件返回最终的扩展后的dispatch
    const middlewareChain = middlewares.map((middleware) =>
      middleware(middleAPI)
    );
    dispatch = compose(...middlewareChain)(dispatch);
    return {
      ...store,
      dispatch,
    };
  };
}

export function thunk({ dispatch, getState }: any) {
  return (dispatch: (arg0: never) => any) => (
    action: (arg0: any, arg1: any) => any
  ) => {
    if (typeof action === "function") {
      return action(dispatch, getState);
    } else {
      return dispatch(action);
    }
  };
}

export function combineReducer(reducers: { [x: string]: any }) {
  const reducerKeys: string[] = Object.keys(reducers);
  const finalReducer: { [propKey: string]: any } = {};
  reducerKeys.forEach((item) => {
    if (typeof reducers[item] === "function") {
      finalReducer[item] = reducers[item];
    }
  });
  const finalReducerKeys = Object.keys(finalReducer);
  return function combination(
    state: { [propKey: string]: any } = {},
    action: any
  ) {
    const newState: { [propKey: string]: any } = {};
    let isChanged: boolean = false;
    finalReducerKeys.forEach((key) => {
      const reducer = finalReducer[key];
      const previousState = state[key];
      const nextState = reducer(previousState, action);
      newState[key] = nextState;
      isChanged = isChanged || nextState !== previousState;
    });
    isChanged =
      isChanged || finalReducerKeys.length !== Object.keys(state).length;
    return isChanged ? newState : state;
  };
}

function bindActionCreator(
  actionCreator: Function,
  dispatch: (arg0: any) => any
) {
  return function () {
    return dispatch(actionCreator.apply(globalThis, arguments));
  };
}

export function bindActionCreators(
  actionCreators: { [x: string]: any },
  dispatch: any
) {
  if (typeof actionCreators === "function") {
    return bindActionCreator(actionCreators, dispatch);
  }
  const boundActionCreators: { [x: string]: any } = {};
  for (const key in actionCreators) {
    const actionCreator = actionCreators[key];
    if (typeof actionCreator === "function") {
      boundActionCreators[key] = bindActionCreator(actionCreator, dispatch);
    }
  }
  return boundActionCreators;
}
