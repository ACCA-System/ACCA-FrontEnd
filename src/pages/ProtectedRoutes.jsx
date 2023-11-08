import { Outlet, Navigate } from "react-router-dom";
import { useState } from "react";

export default function ProtectedRoutes() {
    const [isAuth, setIsAuth] = useState(true);

    return isAuth ? <Outlet /> : <Navigate to="/" />;
}
