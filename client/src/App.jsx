import { Outlet } from "react-router-dom"
import Footer from "./components/Footer"
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import { useEffect } from "react";

const App = () => {


  useEffect(() => {
    AOS.init({
      once: true,       // whether animation should happen only once
    });
  }, []);

  return (
    <>
      <main className="flex-grow overflow-hidden ">
        <Outlet />
      </main>
      <Footer />
    </>
  )
}

export default App