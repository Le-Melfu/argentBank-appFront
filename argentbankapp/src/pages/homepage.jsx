import React from 'react'
import NavBar from '../components/organisms/navbar'
import Hero from '../components/molecules/hero'
import FeaturesSection from '../components/organisms/features'
import Footer from '../components/organisms/footer'

const Home = () => {
    return (
        <div className="main-container">
            <header>
                <NavBar />
            </header>
            <main className="main">
                <Hero />
                <FeaturesSection />
            </main>
            <Footer />
        </div>
    )
}

export default Home
