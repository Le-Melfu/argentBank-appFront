import LoginBtn from '../atoms/loginBtn'
import { useSelector } from 'react-redux'
import { authStatusSelector } from '../../store/Reducers/userReducer/userReducer'
import LogOutBtn from '../atoms/logoutBtn'
import ParamsBtn from '../atoms/paramsBtn'

const NavBar = () => {
    const isAuthentified = useSelector(authStatusSelector)

    if (!isAuthentified) {
        return (
            <nav className="main-nav">
                <LoginBtn />
            </nav>
        )
    } else {
        return (
            <nav className="main-nav">
                <div className="navbar">
                    <LoginBtn />
                    <ParamsBtn />
                    <LogOutBtn />
                </div>
            </nav>
        )
    }
}

export default NavBar
