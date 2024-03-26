import { configureStore } from '@reduxjs/toolkit'
import userReducer from './Reducers/userReducer/userReducer'
import { thunk } from 'redux-thunk'

const store = configureStore({
    reducer: {
        user: userReducer,
    },
    middleware: [thunk],
    devTools:
        window.__REDUX_DEVTOOLS_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION__(),
})

store.subscribe(() => console.log(store.getState()))

export default store
