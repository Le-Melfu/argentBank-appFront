const UserBtn = () => {
    const token = localStorage.getItem('accessToken')
    const logOut = () => {
        localStorage.removeItem('accessToken')
    }

    if (!token) {
        return (
            <div>
                <a className="main-nav-item" href="./signin">
                    <i className="fa fa-user-circle"></i>
                    Sign In
                </a>
            </div>
        )
    } else {
        return (
            <div>
                <a className="main-nav-item" href="/" onClick={logOut}>
                    <i className="fa fa-user-circle"></i>
                    {/* placeholder */}
                    Tony Jarvis
                </a>
            </div>
        )
    }
}
export default UserBtn
