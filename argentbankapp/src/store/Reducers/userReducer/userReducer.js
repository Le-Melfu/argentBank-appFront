export const ON_SUBMIT = 'ON_SUBMIT'
export const ON_LOGOUT = 'ON_LOGOUT'
export const UPDATE_CHECKBOX = 'UPDATE_CHECKBOX'

const initialState = {
    userEmail: null,
    userPassword: null,
    token: null,
    loading: false,
    rememberMe: false,
}

export function userReducer(state = initialState, action) {
    switch (action.type) {
        case UPDATE_CHECKBOX:
            return { ...state, rememberMe: action.payload }
        case ON_SUBMIT:
            return {
                ...state,
                userEmail: action.payload.userEmail,
                userPassword: action.payload.userPassword,
                token: action.payload.token,
                loading: false,
            }
        case ON_LOGOUT:
            return {
                ...state,
                userEmail: null,
                userPassword: null,
                token: null,
            }
        default:
            return state
    }
}

export default userReducer
