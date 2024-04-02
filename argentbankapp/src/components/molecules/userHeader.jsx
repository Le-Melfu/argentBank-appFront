import { useDispatch, useSelector } from 'react-redux'
import {
    tokenSelector,
    userSelector,
} from '../../store/Reducers/userReducer/userReducer'
import { useState } from 'react'
import { fetchNewUserName } from '../../store/Reducers/userReducer/userActions'
import Input, { Input_Type } from './input'

const UserHeader = () => {
    const dispatch = useDispatch()
    const userProfile = useSelector(userSelector)
    const token = useSelector(tokenSelector)
    const [isCollapsed, setIsCollapsed] = useState(true)
    const [newUserName, setNewUserName] = useState('')

    const handleCollapse = (value) => {
        setIsCollapsed(value)
    }

    const handleInputChange = (e) => {
        const newUserName = e.target.value.trim()
        if (newUserName !== '') {
            setNewUserName(newUserName)
        }
    }
    const submitNewUserName = async () => {
        if (newUserName !== userProfile.userName) {
            await dispatch(fetchNewUserName(newUserName, token))
        }
    }

    if (isCollapsed === true) {
        return (
            <div className="user-header">
                <h1>
                    <span>Welcome back</span>
                    <span>{userProfile?.userName}</span>
                </h1>
                <button
                    className="edit-button"
                    onClick={() => handleCollapse(false)}
                >
                    Edit Name
                </button>
            </div>
        )
    } else {
        return (
            <div className="user-header">
                <div className="user-edit-form">
                    <form>
                        <h2>Edit user info</h2>
                        <Input
                            name="userName"
                            label="User name"
                            value={userProfile?.userName}
                            type={Input_Type.INPUT_TEXT}
                            styleclass="input-wrapper"
                            onChange={handleInputChange}
                        />
                        <Input
                            name="firstName"
                            label="First name"
                            value={userProfile?.firstName}
                            type={Input_Type.INPUT_TEXT}
                            styleclass="input-wrapper"
                            disabled={true}
                        />
                        <Input
                            name="lastName"
                            label="Last name"
                            value={userProfile?.lastName}
                            type={Input_Type.INPUT_TEXT}
                            styleclass="input-wrapper"
                            disabled={true}
                        />
                    </form>
                    <div className="user-edit-form__btns">
                        <button
                            type="button"
                            className="transaction-button"
                            onClick={async () => {
                                await submitNewUserName()
                                handleCollapse(true)
                            }}
                        >
                            Save
                        </button>
                        <button
                            type="button"
                            className="transaction-button"
                            onClick={() => handleCollapse(true)}
                        >
                            Cancel
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}

export default UserHeader
