import React from 'react'
import NavBar from '../components/organisms/navbar'
import Footer from '../components/organisms/footer'
import SignInForm from '../components/organisms/signInForm'

const SignInPage = () => {
    return (
        <div className="main-container">
            <NavBar />
            <main className="main bg-dark">
                <SignInForm />
            </main>
            <Footer />
        </div>
    )
}

export default SignInPage
