import {
    updateUserProfile,
    userLogInSuccess,
    userLoginFailure,
    userLogout,
    userWasRemembered,
} from './userReducer'

export const onSubmit = (userAccount, remembered, navigate) => {
    return async (dispatch) => {
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
                if (remembered === true) {
                    localStorage.setItem('accessToken', token)
                }
                navigate('/user')
                dispatch(userLogInSuccess(token))
            })
            .catch((error) => {
                dispatch(userLoginFailure())
            })
    }
}

export const fetchUserProfile = (token) => {
    return async (dispatch) => {
        await fetch('http://localhost:3001/api/v1/user/profile', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
            },
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Erreur lors de la requête')
                }
                return response.json()
            })
            .then((data) => {
                const user = data.body
                dispatch(updateUserProfile(user))
            })
            .catch((error) => {})
    }
}

export const fetchNewUserName = (newUsername, token) => {
    return async (dispatch) => {
        await fetch('http://localhost:3001/api/v1/user/profile', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify({ userName: newUsername }),
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Erreur lors de la requête')
                }
                return response.json()
            })
            .then((data) => {
                dispatch(updateUserProfile(data.body))
            })
            .catch((error) => {})
    }
}

export const onLogOut = (dispatch) => {
    localStorage.removeItem('accessToken')
    dispatch(userLogout)
}

export const checkIfUserMemorized = async (dispatch) => {
    const token = localStorage.getItem('accessToken')
    if (token !== null) {
        await dispatch(userWasRemembered(token))
        await dispatch(fetchUserProfile(token))
    }
}
