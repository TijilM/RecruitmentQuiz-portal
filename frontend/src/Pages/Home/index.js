import Navbar from "./Components/Navbar"
import Hero from "./Components/Hero";
import WhyCCS from "./Components/WhyCCS"
import Carousel from "./Components/Carousel"
import Footer from "./Components/Footer/index"

import styles from "./Style/home.module.css"

function Home(){
    return (
        <div className="home-complete-page">
            <Navbar />
            <Hero />
            <WhyCCS />
            <Carousel />
            <Footer />

        </div>
    )
}

export default Home