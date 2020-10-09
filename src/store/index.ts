// import { createStore, applyMiddleware } from 'redux'
import { createStore, applyMiddleware, thunk } from '../React/redux/MockRedux'
// import thunk from 'redux-thunk'
const initialState = 0
function countReducer(state = initialState, action: { type: any }) {
    switch (action.type) {
        case 'ADD':
            return state + 1
        case 'MINUS':
            return state -1
        default:
            return state
    }
}
const store = createStore(countReducer, applyMiddleware(thunk))

export default store