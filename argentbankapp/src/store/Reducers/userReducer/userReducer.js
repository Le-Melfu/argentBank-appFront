import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        userProfile: null,
        token: null,
        error: false,
        isAuthenticated: false,
        remembered: false,
    },
    reducers: {
        userLogInSuccess: (state, action) => {
            state.token = action.payload
            state.isAuthenticated = true
            state.error = false
        },
        userLoginFailure: (state) => {
            state.error = true
            state.isAuthenticated = false
        },
        userLogout: (state) => {
            state.userProfile = null
            state.isAuthenticated = false
            state.token = null
            state.remembered = false
        },
        updateRememberMe: (state, action) => {
            state.remembered = action.payload
        },
        userWasRemembered: (state, action) => {
            state.remembered = true
            state.token = action.payload
            state.isAuthenticated = true
        },
        getUserProfile: (state, action) => {
            state.userProfile = action.payload
        },
        updateUserProfile: (state, action) => {
            state.userProfile.userName = action.payload
        },
    },
})

export const userSelector = (state) => state.user.userProfile
export const authStatusSelector = (state) => state.user.isAuthenticated
export const errorSelector = (state) => state.user.error
export const rememberedSelector = (state) => state.user.remembered
export const tokenSelector = (state) => state.user.token

export const {
    userLogInSuccess,
    userLoginFailure,
    userLogout,
    getUserProfile,
    updateRememberMe,
    userWasRemembered,
} = userSlice.actions

export default userSlice.reducer
