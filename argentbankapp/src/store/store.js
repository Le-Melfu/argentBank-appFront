import { configureStore } from '@reduxjs/toolkit'
import userSlice from './Reducers/userReducer/userReducer'
import { successfulLoginMideware } from './Reducers/succesLoginMidWare'

const store = configureStore({
    reducer: {
        user: userSlice,
    },
    middleware: (getDefaultMiddleware) => [
        ...getDefaultMiddleware(),
        successfulLoginMideware,
    ],
})

export default store
