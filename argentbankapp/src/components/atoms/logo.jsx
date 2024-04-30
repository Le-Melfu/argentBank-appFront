import { Link } from 'react-router-dom'
import mainNavLogo from '../../assets/img/argentBankLogo.webp'

const Logo = () => {
    return (
        <Link to={'/'} className="main-nav-logo">
            <img
                className="main-nav-logo-image"
                src={mainNavLogo}
                alt="Argent Bank Logo"
            />
            <h1 className="sr-only">Argent Bank</h1>
        </Link>
    )
}

export default Logo
