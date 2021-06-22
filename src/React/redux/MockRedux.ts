import { compose } from "redux";
import React, { Context } from "react";
export function createStore(
  reducer: (arg0: any, arg1: any) => any,
  enhancer: any
) {
  if (enhancer) {
    return enhancer(createStore)(reducer);
  }
  // 设置整个应用的state就是currentState，一个普通的javaScript对象
  let currentState: any = undefined;
  // 监听器回调数组
  let currentListeners: any[] = [];
  function getState() {
    return currentState;
  }

  function dispatch(action: any) {
    // dispatch方法主要做的事情是两件，第一件事情就是根据传入的action和存在的state，执行reducer获取到最新的state，然后会遍历回调数组，执行所有的回调函数，在回调函数中就可以获取到最新的state
    currentState = reducer(currentState, action);
    currentListeners.forEach((item) => item());
    return action;
  }

  function subscribe(callback: any) {
    // subscribe的作用就是往监听数组中添加一个回调函数，同时会返回一个移除函数，整个函数调用的时候会把之前的回调函数移除掉
    currentListeners.push(callback);
  }

  dispatch({ type: "@OROERE/INIT" });

  return {
    getState,
    dispatch,
    subscribe,
  };
}

// applyMiddleware是用来扩展dispatch的好方法
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

// combineReducer会接收一个对象，然后将多个子reduce函数，合并成一个最终的reduce人函数。由combineReducer返回的state对象，会将传入的每个reducer返回的state按照其传递时对应的key值进行命名
// 其返回值是一个函数，和普通的reducer一样，接受state和action两个入参
export function combineReducers(reducers: { [x: string]: any }) {
  // 先获取到将来会返回的state的所有key值
  const reducerKeys: string[] = Object.keys(reducers);
  // 合并所有函数到一个reducer中
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
    // 这里会将所有的reducer都提取出来执行，获取最新的state对象，然后按照对应的key值将其存入到newState中；同时会做判断新老state是否发生了改变，如果没有改变的话，那么直接返回之前的state也没有什么问题
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

// bindActionCreator这个函数会将传入的函数包装为dispatch包裹的函数，可以方便的直接调用它们
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
// 总的来说，redux中并没有使用什么特殊的写法来实现这个状态容器，其state就是一个普通的对象，然后内部会保存一个listeners回调数组，当每一次调用subscribe的时候会把对应的回调函数存入到数组中，然后在dispatch的时候会做两件事情，一件事情是执行reducer来获取最新的state，另外一件事情就是遍历listeners数组执行所有的回调，这样的话在回调中就可以获取到最新的state；这个就是redux的实现内部消息监听的思路，剩下的combineReducer则是会接收一个对象，经过这个函数返回的state则是一个按照当初传入的key排好的state对象，其会返回一个函数接收state和action两个参数，然后会提取所有的reducer函数，执行获取到每一个子reduce人对应的state对象，然后将其合并到newState中；bindActionCreators则是会接收一个函数，并返回一个由dispatch包裹的函数可以直接调用；
// 而applyMiddleware则是用来扩充dispatch机制的，所有的中间件都接受dispatch和getState两个入参，然后代码内部会对多个中间件执行reduce函数，最后一个函数接收真实的dispatch作为参数，用来扩充dispatch