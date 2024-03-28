import React from 'react'
import { createRoot } from 'react-dom/client'
import './assets/css/main.css'
import { Provider } from 'react-redux'
import store from './store/store'
import App from './App'

const container = document.getElementById('root')
const root = createRoot(container)

root.render(
    <Provider store={store}>
        <App />
    </Provider>
)
