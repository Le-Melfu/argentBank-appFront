import { redirect } from 'react-router-dom'
import Input, { Input_Type } from '../molecules/input'
import { useState } from 'react'

const SignInForm = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    })
    const handleInputChange = (event) => {
        const { email, value } = event.target
        setFormData({ ...formData, [email]: value })
    }
    const handleSubmit = (event) => {
        event.preventDefault()
        const userAccount = {
            email: formData.email,
            password: formData.password,
        }
        fetch('http://localhost:3001/api/v1/user/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: { userAccount },
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Erreur lors de la requête')
                }
                console.log(response.json())
                return response.json()
            })
            .then((data) => {
                const token = data
                localStorage.setItem('accessToken', token)
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
                    value={formData.email}
                    onChange={handleInputChange}
                />
                <Input
                    name="password"
                    label="Password"
                    type={Input_Type.INPUT_PASSWORD}
                    styleclass="input-wrapper"
                    value={formData.password}
                    onChange={handleInputChange}
                />
                <Input
                    name="remember-me"
                    label="Remember me"
                    type={Input_Type.INPUT_CHECKBOX}
                    styleclass="input-remember"
                    value={formData.rememberMe}
                    onChange={handleInputChange}
                />
                {/* <!-- PLACEHOLDER DUE TO STATIC SITE --> */}
                {/* <a href="./user" class="sign-in-button">
                    Sign In
                </a> */}
                <button type="submit" className="sign-in-button">
                    Sign In
                </button>
            </form>
        </section>
    )
}

export default SignInForm
