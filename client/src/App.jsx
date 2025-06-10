import { Outlet } from "react-router-dom"
import Footer from "./components/Footer"
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import { useEffect } from "react";
import ScrollToTopButton from "./components/ScrollToTopButton"
import { useState } from "react";
import logo from "./assets/hero/vivaham-logo.png"
const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    AOS.init({
      once: true,
    });
    // Simulate loading (remove this in production)
    const timer = setTimeout(() => setIsLoading(false), 150);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, []);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen bg-black/80">
        <img
          src={logo} // or .svg, .png, etc.
          alt="Loading..."
          className="md:w-100 w-50 md:h-100 h-50" // adjust size as needed
        />
      </div>
    );
  }

  return (
    <>
      <main className="flex-grow overflow-hidden">
        <ScrollToTopButton />
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default App