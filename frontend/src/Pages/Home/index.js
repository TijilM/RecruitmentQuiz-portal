import Navbar from "./Components/Navbar";
import WhyCCS from "./Components/WhyCCS";
import Carousel from "./Components/Carousel";
import Footer from "./Components/Footer/index";
import Hero from "./Components/Hero";

function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <WhyCCS />
      <Carousel />
      <Footer />
    </div>
  );
}

export default Home;
