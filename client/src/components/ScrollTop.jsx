import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollTop = () => {
    const location = useLocation();

    useEffect(() => {
        // Scroll instantly to top without animation
        window.scrollTo(0, 0);
    }, [location.pathname]); // Runs on every route change

    return null;
};

export default ScrollTop;
