import Input, { Input_Type } from '../molecules/input'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import {
    errorSelector,
    rememberedSelector,
    updateRememberMe,
} from '../../store/Reducers/userReducer/userReducer'
import { onSubmit } from '../../store/Reducers/userReducer/userActions'

const SignInForm = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [userAccount, setUserAccount] = useState({
        email: '',
        password: '',
    })
    const rememberStatus = useSelector(rememberedSelector)
    const fetchError = useSelector(errorSelector)

    const handleInputChange = (e) => {
        const { name, value } = e.target
        setUserAccount((prevState) => ({
            ...prevState,
            [name]: value,
        }))
    }

    const onToggle = (e) => {
        dispatch(updateRememberMe(!rememberStatus))
    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        dispatch(onSubmit(userAccount, rememberStatus, navigate))
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
                    value={userAccount.email}
                />
                <Input
                    name="password"
                    label="Password"
                    type={Input_Type.INPUT_PASSWORD}
                    styleclass="input-wrapper"
                    onChange={handleInputChange}
                    value={userAccount.password}
                />
                <Input
                    name="remember-me"
                    label="Remember me"
                    type={Input_Type.INPUT_CHECKBOX}
                    styleclass="input-remember"
                    checked={rememberStatus ? rememberStatus : false}
                    onChange={onToggle}
                />
                <button type="submit" className="sign-in-button">
                    Sign In
                </button>
                <p>
                    {fetchError
                        ? 'Votre email ou votre mot de passe est incorrect'
                        : ''}
                </p>
            </form>
        </section>
    )
}

export default SignInForm
