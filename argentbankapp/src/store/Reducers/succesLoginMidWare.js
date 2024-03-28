import { fetchUserProfile } from './userReducer/userActions'

export const successfulLoginMideware = (store) => (next) => (action) => {
    if (action.type === 'user/userLogInSuccess') {
        store.dispatch(fetchUserProfile(action.payload))
    }
    return next(action)
}
