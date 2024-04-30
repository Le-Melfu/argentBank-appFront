import React from 'react'
import SignInForm from '../components/organisms/signInForm'
import { useSelector } from 'react-redux'
import { authStatusSelector } from '../store/Reducers/userReducer/userReducer'
import { Navigate } from 'react-router-dom'

const SignInPage = () => {
    const userAuthentified = useSelector(authStatusSelector)
    if (!userAuthentified) {
        return (
            <div className="main-container">
                <main className="main bg-dark">
                    <SignInForm />
                </main>
            </div>
        )
    } else {
        return <Navigate to={'/profile'} />
    }
}

export default SignInPage
