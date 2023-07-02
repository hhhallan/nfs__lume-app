import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Users from "./components/pages/Users";
import {LaunchPage, Layout, LoginPage, MapPage, RegisterPage} from "./components/index.js";


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