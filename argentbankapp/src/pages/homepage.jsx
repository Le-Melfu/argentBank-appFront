import React from 'react'
import Hero from '../components/molecules/hero'
import FeaturesSection from '../components/organisms/featuresSection'

const Home = () => {
    return (
        <div className="main-container">
            <main className="main">
                <Hero />
                <FeaturesSection />
            </main>
        </div>
    )
}

export default Home
