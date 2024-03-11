import Footer from '../components/organisms/footer'
import NavBar from '../components/organisms/navbar'

const ErrorPage = () => {
    return (
        <div className="main-container">
            <header>
                <NavBar />
            </header>
            <main>
                <section>
                    <h2>404 Page not Found</h2>
                    <p>
                        Sorry this page does not exist, return to{' '}
                        <a href="/">Homepage</a> ?
                    </p>
                </section>
            </main>
            <Footer />
        </div>
    )
}

export default ErrorPage
