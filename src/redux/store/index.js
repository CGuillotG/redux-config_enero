import { createStore, applyMiddleware } from 'redux'
import reducer from '../reducers'
import thunk from 'redux-thunk'

export default function generateStore() {
    return createStore(reducer, { books: [{ id: 0, name: "Imperio" }] }, applyMiddleware(thunk))
}