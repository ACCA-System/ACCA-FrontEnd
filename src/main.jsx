import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { ThemeProvider } from "@material-tailwind/react";
import { LoginPage } from "./pages/LoginPage";
import { WelcomePage } from "./pages/WelcomePage";
import { NotFoundPage } from "./pages/NotFoundPage";
import { UsersTablePage } from "./pages/UsersTablePage";
import { AuthProvider } from "./auth/AuthProvider";
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import ProtectedRoutes from "./pages/ProtectedRoutes";

const router = createBrowserRouter([
    { path: "/", element: <LoginPage /> },
    {
        path: "/",
        element: <ProtectedRoutes />,
        children: [
            { path: "/welcome", element: <WelcomePage /> },
            { path: "/users", element: <UsersTablePage /> },
        ],
    },
    { path: "*", element: <NotFoundPage /> },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <AuthProvider>
            <ThemeProvider>
                <div className="bg-pink-500 h-screen ">
                    <RouterProvider router={router} />
                </div>
            </ThemeProvider>
        </AuthProvider>
    </React.StrictMode>
);
