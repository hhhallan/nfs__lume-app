import {createBrowserRouter, Outlet, RouterProvider} from "react-router-dom";
import Users from "./components/pages/Users";
import {LaunchPage, LoginPage, MapPage, RegisterPage, ScanPage, TestPage} from "./components/index.js";

const Layout = () =>  {
    return (
        <div>
            <Outlet/>
        </div>
    );
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
            {
                path: "/map",
                element: <MapPage/>
            },
            {
                path: "/scan",
                element: <ScanPage/>
            },
            {
                path: "/test",
                element: <TestPage/>
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