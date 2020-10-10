// import { createStore, applyMiddleware } from 'redux'
import {
  createStore,
  applyMiddleware,
  thunk,
  combineReducer,
} from "../React/redux/MockRedux";
// import thunk from 'redux-thunk'
const initialState = 0;
const initialUserState = {
  age: 20,
};
function countReducer(state = initialState, action: { type: any }) {
  switch (action.type) {
    case "ADD":
      return state + 1;
    case "MINUS":
      return state - 1;
    default:
      return state;
  }
}

function personReducer(
  state = initialUserState,
  action: { type: any; age: number }
) {
  switch (action.type) {
    case "ADDAGE":
      return Object.assign(state, { age: state.age + action.age });
    case "MINUSAGE":
      return Object.assign(state, { age: state.age - action.age });
    default:
      return state;
  }
}

const store = createStore(
  combineReducer({
    counter: countReducer,
    person: personReducer,
  }),
  applyMiddleware(thunk)
);

export default store;
