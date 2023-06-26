import {createBrowserRouter, Outlet, RouterProvider} from "react-router-dom";
import Users from "./components/pages/Users";
import {LoginPage} from "./components/index.js";

const Layout = () => {
    return (
        <div className="app">
            <Outlet />
        </div>
    )
}

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <Users />
            },
            {
                path: "/connexion",
                element: <LoginPage />
            },
        ]
    },
])

const App = () => {
    return (
        <>
            <RouterProvider router={router} />
        </>
    );
};

export default App;