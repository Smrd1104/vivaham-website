// src/App.jsx
import { Outlet, useLocation } from "react-router-dom";
import Footer from "./components/Footer";
import ScrollToTopButton from "./components/ScrollToTopButton";
import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import ScrollTop from "./components/ScrollTop";

const App = () => {
  // const location = useLocation();

  // Initialize AOS once
  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  useEffect(() => {
  if ('scrollRestoration' in window.history) {
    window.history.scrollRestoration = 'manual';
  }
}, []);





  return (
    <>
      <ScrollTop />
      <main className="flex-grow overflow-hidden">
        <ScrollToTopButton />
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default App;
