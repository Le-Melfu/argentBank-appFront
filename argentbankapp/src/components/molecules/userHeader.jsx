import { useDispatch, useSelector } from 'react-redux'
import { userSelector } from '../../store/Reducers/userReducer/userReducer'
import { useState } from 'react'
import { fetchNewUserName } from '../../store/Reducers/userReducer/userActions'
import Input, { Input_Type } from './input'

const UserHeader = () => {
    const dispatch = useDispatch()
    const userProfile = useSelector(userSelector)
    const [isCollapsed, setIsCollapsed] = useState(true)
    const [newUserName, setNewUserName] = useState('')
    const handleInputChange = (e) => {
        const newUserName = e.target.value
        setNewUserName(newUserName)
        console.log(newUserName)
    }
    const submitNewUserName = () => {
        dispatch(fetchNewUserName(newUserName))
    }

    if (isCollapsed === true) {
        return (
            <div className="user-header">
                <h1>
                    <span>Welcome back</span>
                    <span>{userProfile?.userName}</span>
                </h1>
                <button className="edit-button">Edit Name</button>
            </div>
        )
    } else {
        return (
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
                <div>
                    <button type="button">Save</button>
                    <button type="button">Cancel</button>
                </div>
            </div>
        )
    }
}

export default UserHeader
