import {createBrowserRouter, Outlet, RouterProvider} from "react-router-dom";
import {
    ErrorPage,
    LaunchPage,
    LoginPage,
    MapPage,
    PaymentPage,
    RegisterPage,
    ScanPage,
} from "./components/index.js";

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