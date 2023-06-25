import {createBrowserRouter, Outlet, RouterProvider} from "react-router-dom";
import Users from "./components/pages/Users";

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