import mainNavLogo from '../../assets/img/argentBankLogo.png'

const Logo = () => {
    return (
        <a className="main-nav-logo" href="/">
            <img
                className="main-nav-logo-image"
                src={mainNavLogo}
                alt="Argent Bank Logo"
            />
            <h1 className="sr-only">Argent Bank</h1>
        </a>
    )
}

export default Logo
