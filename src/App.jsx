import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Products from "./components/Products";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import { FaWhatsapp } from "react-icons/fa";

const App = () => {
  return (
    <div>
      <a
        href="https://wa.me/+918010514242"
        target="_blank"
        className="fixed h-[60px] w-[60px] rounded-full bg-green-500 justify-center items-center flex right-[20px] bottom-[50px] z-[10000]"
      >
        <FaWhatsapp className="text-white text-4xl" />
      </a>
      <Navbar />
      <Hero />

      <About />

      <Products />

      <Contact />

      <Footer />
    </div>
  );
};

export default App;
