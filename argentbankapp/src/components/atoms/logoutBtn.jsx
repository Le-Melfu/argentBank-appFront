import { connect } from 'react-redux'
import { ON_LOGOUT } from '../../store/Reducers/userReducer/userReducer'

const LogOutBtn = (logOut) => {
    return (
        <div>
            <a className="main-nav-item" href="/" onClick={() => logOut()}>
                <i class="fa-solid fa-power-off"></i>
            </a>
        </div>
    )
}

export const LogOutBtnStore = connect((dispatch) => ({
    logOut: () =>
        dispatch({
            type: ON_LOGOUT,
            payload: { token: null, user: null },
        }),
}))(LogOutBtn)

export default LogOutBtn
