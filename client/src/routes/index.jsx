import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import Franchise from "../pages/Franchise";
import Store from "../pages/Store";

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: "franchise",
                element: <Franchise />
            },
            {
                path: "store",
                element: <Store />
            },
        ]
    }
])

export default router