import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'
import { reds } from './combine'

export function configureStore(initialState = {}) {
    const store = createStore(reds, initialState, applyMiddleware(thunk));
    console.log("store current value", store.getState());
    return store
}
export const store = configureStore()

export default store