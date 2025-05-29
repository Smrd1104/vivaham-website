import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import Franchise from "../pages/Franchise";

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: "",
                element: <Home />
            },
            {
                path: "/franchise",
                element: <Franchise />
            },
        ]
    }
])

export default router