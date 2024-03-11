import mainNavLogo from '../../assets/img/argentBankLogo.png'
import LogInBtn from '../atoms/loginBtn'

const NavBar = () => {
    return (
        <nav className="main-nav">
            <a className="main-nav-logo" href="/">
                <img
                    className="main-nav-logo-image"
                    src={mainNavLogo}
                    alt="Argent Bank Logo"
                />
                <h1 className="sr-only">Argent Bank</h1>
            </a>
            <LogInBtn />
        </nav>
    )
}

export default NavBar
