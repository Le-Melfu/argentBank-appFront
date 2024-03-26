import { connect } from 'react-redux'
import LoginBtn from '../atoms/loginBtn'
import Logo from '../atoms/logo'
import {
    tokenSelector,
    userEmailSelector,
} from '../../store/Reducers/userReducer/userSelectors'
import { LogOutBtnStore } from '../atoms/logoutBtn'

const NavBar = (token, userEmail) => {
    if (token !== null) {
        return (
            <nav className="main-nav">
                <Logo />
                <p>{JSON.stringify(userEmail)}</p>
                <LoginBtn />
                <LogOutBtnStore />
            </nav>
        )
    } else {
        return (
            <nav className="main-nav">
                <Logo />
                <LoginBtn />
            </nav>
        )
    }
}

export const NavBarStore = connect((state) => ({
    token: tokenSelector(state),
    userEmail: userEmailSelector(state),
}))(NavBar)

export default NavBar
