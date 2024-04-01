import LoginBtn from '../atoms/loginBtn'
import Logo from '../atoms/logo'
import { useSelector } from 'react-redux'
import { authStatusSelector } from '../../store/Reducers/userReducer/userReducer'
import LogOutBtn from '../atoms/logoutBtn'
import ParamsBtn from '../atoms/paramsBtn'

const NavBar = () => {
    const isAuthentified = useSelector(authStatusSelector)

    if (!isAuthentified) {
        return (
            <nav className="main-nav">
                <Logo />
                <LoginBtn />
            </nav>
        )
    } else {
        return (
            <nav className="main-nav">
                <Logo />
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
