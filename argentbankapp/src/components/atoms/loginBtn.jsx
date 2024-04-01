import { useSelector } from 'react-redux'
import { userSelector } from '../../store/Reducers/userReducer/userReducer'

const LoginBtn = () => {
    const userProfile = useSelector(userSelector)
    return (
        <div>
            <a
                className="main-nav-item"
                href={userProfile ? './profile' : './login'}
            >
                <i className="fa fa-user-circle"></i>
                {userProfile
                    ? `${userProfile.firstName} ${userProfile.lastName}`
                    : 'Sign In'}
            </a>
        </div>
    )
}

export default LoginBtn
