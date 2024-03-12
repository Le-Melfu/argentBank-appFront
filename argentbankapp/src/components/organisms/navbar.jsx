import UserBtn from '../atoms/userBtn'
import Logo from '../atoms/logo'

const NavBar = () => {
    const token = localStorage.getItem('accessToken')
    if (!token) {
        return (
            <nav className="main-nav">
                <Logo />
                <UserBtn />
            </nav>
        )
    } else {
        return (
            <nav className="main-nav">
                <Logo />
                <UserBtn />
            </nav>
        )
    }
}

export default NavBar
