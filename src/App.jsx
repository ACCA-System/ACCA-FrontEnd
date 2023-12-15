import React from "react";
import { ThemeProvider } from "@material-tailwind/react";
import { LoginPage } from "./pages/LoginPage";
import { WelcomePage } from "./pages/WelcomePage";
import { NotFoundPage } from "./pages/NotFoundPage";
import { UsersTablePage } from "./pages/UsersTablePage";
import { AuthProvider } from "./context/AuthProvider";
import ProtectedRoutes from "./pages/ProtectedRoutes";
import AuthLayout from "./pages/AuthLayout";
import { Footer } from "./components/Footer";
import { ACCAProvider } from "./context/ACCAProvider";
import { AddEditUsersPage } from "./pages/AddEditUsersPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import useAuth from "./hooks/useAuth";

export const App = () => {
    const AdminDirectorRoute = ({ element, ...props }) => {
        const { auth } = useAuth();

        // Verificar si el usuario es administrador o director
        const isAdminOrDirector = auth.typeId === 1 || auth.typeId === 2;

        return isAdminOrDirector ? (
            React.cloneElement(element, props)
        ) : (
            <Navigate to="/welcome" replace />
        );
    };

    return (
        <ThemeProvider>
            <BrowserRouter>
                <AuthProvider>
                    <ACCAProvider>
                        <div className="">
                            <Routes>
                                <Route path="/" element={<AuthLayout />}>
                                    <Route index element={<LoginPage />} />
                                </Route>
                                <Route
                                    path="/welcome"
                                    element={<ProtectedRoutes />}
                                >
                                    <Route index element={<WelcomePage />} />
                                    <Route
                                        path="users"
                                        element={
                                            <AdminDirectorRoute
                                                element={<UsersTablePage />}
                                            />
                                        }
                                    />
                                    <Route
                                        path="usersForm"
                                        element={
                                            <AdminDirectorRoute
                                                element={<AddEditUsersPage />}
                                            />
                                        }
                                    />
                                </Route>
                                <Route path="*" element={<NotFoundPage />} />
                            </Routes>
                        </div>
                    </ACCAProvider>
                </AuthProvider>
            </BrowserRouter>
        </ThemeProvider>
    );
};
