import React from 'react'
import NavBar from '../components/organisms/navbar'
import Footer from '../components/organisms/footer'
import SignInForm from '../components/organisms/signInForm'
import { useSelector } from 'react-redux'
import { authStatusSelector } from '../store/Reducers/userReducer/userReducer'
import { useNavigate } from 'react-router-dom'

const SignInPage = () => {
    const navigate = useNavigate()
    const userAuthentified = useSelector(authStatusSelector)
    if (!userAuthentified) {
        return (
            <div className="main-container">
                <header>
                    <NavBar />
                </header>
                <main className="main bg-dark">
                    <SignInForm />
                </main>
                <Footer />
            </div>
        )
    } else {
        navigate('/profile')
    }
}

export default SignInPage
