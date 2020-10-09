import { compose } from "redux";

export function createStore(reducer: (arg0: any, arg1: any) => any, enhancer: any) {

    if (enhancer) {return enhancer(createStore)(reducer)}
    let currentState: any = undefined
    let currentListeners: any[] = []
    function getState() {
        return currentState
    }

    function dispatch(action: any) {
        currentState = reducer(currentState, action);
        currentListeners.forEach(item => item())
    }

    function subscribe(callback: any) {
        currentListeners.push(callback)
    }

    dispatch({ type: '@OROERE/INIT'})

    return {
        getState,
        dispatch,
        subscribe
    }
}

export function applyMiddleware(...middlewares: any[]) {
    return (createStore: (arg0?: any) => any) => (...args: any) => {
        const store = createStore(...args)
        let dispatch = store.dispatch
        const middleAPI = {
            getState: store.getState,
            dispatch
        }
        // applyMiddleware实际的返回值就是两层函数，所以这里是执行了两次，第一次是先给每个中间件传入dispatch扩展，然后是聚合所有的中间件返回最终的扩展后的dispatch
        const middlewareChain = middlewares.map(middleware => middleware(middleAPI))
        dispatch = compose(...middlewareChain)(dispatch)
        return {
            ...store,
            dispatch
        }
    }
}

export function thunk({dispatch, getState}: any) {
    return (dispatch: (arg0: never) => any) => (action: (arg0: any, arg1: any) => any) => {
        if (typeof action === 'function') {
            return action(dispatch, getState)
        } else {
            return dispatch(action)
        }
    }
}