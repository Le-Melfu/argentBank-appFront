import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { checkIfUserMemorized } from './store/Reducers/userReducer/userActions'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/homepage'
import SignInPage from './pages/signin'
import UserPage from './pages/user'
import ErrorPage from './pages/errorPage'
import Footer from './components/templates/footer'
import Header from './components/templates/header'

const App = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        checkIfUserMemorized(dispatch)
    })
    return (
        <React.StrictMode>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route path="/login" element={<SignInPage />} />
                    <Route path="/profile" element={<UserPage />} />
                    <Route path="*" element={<ErrorPage />} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </React.StrictMode>
    )
}

export default App
