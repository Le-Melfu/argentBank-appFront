import React from 'react'
import { createRoot } from 'react-dom/client'
import './assets/css/main.css'
import Home from './pages/homepage'
import { Route, BrowserRouter, Routes } from 'react-router-dom'
import ErrorPage from './pages/errorPage'
import SignInPage from './pages/signin'
import UserPage from './pages/user'

const container = document.getElementById('root')
const root = createRoot(container)

root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/signin" element={<SignInPage />} />
                <Route path="/user" element={<UserPage />} />
                <Route path="*" element={<ErrorPage />} />
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
)
