import { useEffect } from "react";
import Welcome from "../components/Welcome";
import About from "../components/About";
import Gallery from "../components/Gallery";
import Aos from "aos";
import Portfolio from "../components/Portfolio";
import Teams from "../components/Teams";
import Quote from "../components/quote";
import Price from "../components/Price";
import Process from "../components/Process";
import Footer from "../components/Footer";

const Homepage = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      easing: "linear",
      once: true,
    });
  }, []);

  return (
    <div>
      <Welcome />
      <About />
      <Gallery />
      <Portfolio />
      <Teams />
      <Quote />
      <Price />
      <Process />
      <Footer />
    </div>
  );
};

export default Homepage;
