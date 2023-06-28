import {createBrowserRouter, Outlet, RouterProvider} from "react-router-dom";
import Users from "./components/pages/Users";
import {LaunchPage, LoginPage, RegisterPage} from "./components/index.js";

const Layout = () => {
    return (
        <div className="app">
            <Outlet/>
        </div>
    )
}

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout/>,
        children: [
            {
                path: "/",
                element: <LaunchPage/>
            },
            {
                path: "/users",
                element: <Users/>
            },
            {
                path: "/connexion",
                element: <LoginPage/>
            },
            {
                path: "/inscription",
                element: <RegisterPage/>
            },
        ]
    },
])

const App = () => {
    return (
        <>
            <RouterProvider router={router}/>
        </>
    );
};

export default App;