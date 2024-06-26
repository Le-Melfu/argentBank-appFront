import { useSelector } from 'react-redux'
import UserHeader from '../components/molecules/userHeader'
import Account from '../components/organisms/account'
import { authStatusSelector } from '../store/Reducers/userReducer/userReducer'

const UserPage = () => {
    const isAuthentified = useSelector(authStatusSelector)
    if (isAuthentified !== true) {
        window.location.replace('./login')
    } else {
        return (
            <div className="main-container">
                <main className="main bg-dark">
                    <UserHeader />
                    <h2 className="sr-only">Accounts</h2>
                    <Account
                        title="Argent Bank Checking (x8349)"
                        amount="$2,082.79"
                        amoutdesc="Available Balance"
                    />
                    <Account
                        title="Argent Bank Savings (x6712)"
                        amount="$10,928.42"
                        amoutdesc="Available Balance"
                    />
                    <Account
                        title="Argent Bank Credit Card (x8349)"
                        amount="$184.30"
                        amoutdesc="Current Balance"
                    />
                </main>
            </div>
        )
    }
}

export default UserPage
