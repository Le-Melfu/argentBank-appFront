import Input, { Input_Type } from '../molecules/input'
import { useState } from 'react'
import { connect, useDispatch } from 'react-redux'
import {
    onSubmit,
    onToggle,
} from '../../store/Reducers/userReducer/userActions'
import { useNavigate } from 'react-router-dom'
import { rememberMeSelector } from '../../store/Reducers/userReducer/userSelectors'

const SignInForm = (remember, onToggle) => {
    const [userAccount, setUserAccount] = useState({
        email: '',
        password: '',
    })
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const handleCheckbox = (e) => {
        dispatch()
    }

    const handleInputChange = (e) => {
        const { name, value } = e.target
        setUserAccount((prevState) => ({
            ...prevState,
            [name]: value,
        }))
    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        dispatch(onSubmit(userAccount, navigate))
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
                    checked={remember}
                    onChange={handleCheckbox}
                />
                <button type="submit" className="sign-in-button">
                    Sign In
                </button>
            </form>
        </section>
    )
}

export const signInFormStore = connect(
    (state) => ({
        remember: rememberMeSelector(state),
    }),
    (dispatch) => ({
        onToggle: onToggle(),
    })
)(SignInForm)

export default SignInForm
