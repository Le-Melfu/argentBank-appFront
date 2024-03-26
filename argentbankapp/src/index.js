import React from 'react'
import { createRoot } from 'react-dom/client'
import './assets/css/main.css'
import Home from './pages/homepage'
import { Route, BrowserRouter, Routes } from 'react-router-dom'
import ErrorPage from './pages/errorPage'
import SignInPage from './pages/signin'
import UserPage from './pages/user'
import { Provider } from 'react-redux'
import store from './store/store'

const container = document.getElementById('root')
const root = createRoot(container)

root.render(
    <React.StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route path="/login" element={<SignInPage />} />
                    <Route path="/user" element={<UserPage />} />
                    <Route path="*" element={<ErrorPage />} />
                </Routes>
            </BrowserRouter>
        </Provider>
    </React.StrictMode>
)
