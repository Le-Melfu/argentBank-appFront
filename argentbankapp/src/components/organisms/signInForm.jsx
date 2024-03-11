import {} from 'react-router-dom'
import Input, { Input_Type } from '../molecules/input'
import { useState } from 'react'

const SignInForm = () => {
    const [userEmail, setUserEmail] = useState()
    const [userPassword, setUserPassword] = useState()

    const handleInputChange = (e) => {
        switch (e.name) {
            case 'email':
                setUserEmail(e.value)
                break
            case 'password':
                setUserPassword(e.value)
                break
            default:
                setUserEmail('')
                setUserPassword('')
        }
    }

    const onSuccess = (message) => {
        alert(message)
        window.location.replace('./user')
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        const userAccount = {
            email: userEmail,
            password: userPassword,
        }
        fetch('http://localhost:3001/api/v1/user/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userAccount),
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Erreur lors de la requête')
                }
                return response.json()
            })
            .then((data) => {
                const token = data.body.token
                localStorage.setItem('accessToken', token)
                onSuccess(data.message)
            })
            .catch((error) => {
                console.error('Erreur lors de la requête:', error)
            })
    }
    return (
        <section className="sign-in-content">
            <i className="fa fa-user-circle sign-in-icon"></i>
            <h1>Sign In</h1>
            <form onSubmit={handleSubmit}>
                <Input
                    name="email"
                    label="Email"
                    type={Input_Type.INPUT_EMAIL}
                    styleclass="input-wrapper"
                    onChange={handleInputChange}
                />
                <Input
                    name="password"
                    label="Password"
                    type={Input_Type.INPUT_PASSWORD}
                    styleclass="input-wrapper"
                    onChange={handleInputChange}
                />
                <Input
                    name="remember-me"
                    label="Remember me"
                    type={Input_Type.INPUT_CHECKBOX}
                    styleclass="input-remember"
                />
                <button type="submit" className="sign-in-button">
                    Sign In
                </button>
            </form>
        </section>
    )
}

export default SignInForm
