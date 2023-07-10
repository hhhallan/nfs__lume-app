import {createBrowserRouter, Navigate, Outlet, RouterProvider} from "react-router-dom";
import Users from "./components/pages/Users";
import {
    ErrorPage,
    LaunchPage,
    LoginPage,
    MapPage,
    PaymentPage,
    RegisterPage,
    ScanPage,
    TestPage
} from "./components/index.js";

const Layout = () =>  {
    return (
        <div>
            <Outlet/>
        </div>
    );
}

/*const PrivateRoute = ({ element, isAuthenticated, redirectTo }) => {
    return isAuthenticated ? (
        element
    ) : (
        <Navigate to={redirectTo} replace />
    );
};*/

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
            {
                path: "/paiement",
                element: <PaymentPage/>
            },
            {
                path: "*",
                element: <ErrorPage/>
            }
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