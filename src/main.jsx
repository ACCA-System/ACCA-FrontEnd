import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
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

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <ThemeProvider>
            <BrowserRouter>
                <AuthProvider>
                    <ACCAProvider>
                        <div className="bg-pink-500 pb-10">
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
                                        element={<UsersTablePage />}
                                    />
                                    <Route
                                        path="usersForm"
                                        element={<AddEditUsersPage />}
                                    />
                                </Route>
                                <Route path="*" element={<NotFoundPage />} />
                            </Routes>
                        </div>
                        <Footer />
                    </ACCAProvider>
                </AuthProvider>
            </BrowserRouter>
        </ThemeProvider>
    </React.StrictMode>
);
