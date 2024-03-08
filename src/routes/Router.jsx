// Constante que gestionará todas las rutas de la web
import { createBrowserRouter } from "react-router-dom";
import { Error404 } from "../components/pages/Error404";
import Home from "../components/pages/Home";
import Products from "../components/pages/Products";
import App from "../components/templates/App";
import Login from "../components/pages/Login";
import Register from "../components/pages/Register";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <Error404/>,
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: "/products",
                element: <Products/>,
            }
        ]
    },
    {
        path: "/login",
        element: <Login/>
    },
    {
        path: "/register",
        element: <Register />
    }
])

export default router;