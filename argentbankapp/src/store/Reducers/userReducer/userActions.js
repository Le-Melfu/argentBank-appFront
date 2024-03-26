import { useDispatch } from 'react-redux'
import { ON_SUBMIT, ON_LOGOUT, UPDATE_USER } from './userReducer'

const dispatch = useDispatch

export const onSubmit = (userAccount, navigate) => async (dispatch) => {
    const onSuccess = (message) => {
        alert(message)
        navigate('/user')
    }
    await fetch('http://localhost:3001/api/v1/user/login', {
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
            const userCredentials = {
                userEmail: userAccount.email,
                userPassword: userAccount.password,
                token: token,
            }
            localStorage.setItem('accessToken', token)
            onSuccess(data.message)
            dispatch({ type: ON_SUBMIT, payload: userCredentials })
        })
        .catch((error) => {
            console.error('Erreur lors de la requête:', error)
        })
}

export const onLogOutAction = () => {
    localStorage.removeItem('accessToken')
    dispatch({ type: ON_LOGOUT })
}

export const onToggle = () =>{
    {
        type: UPDATE_USER,
        payload:
    }
}
