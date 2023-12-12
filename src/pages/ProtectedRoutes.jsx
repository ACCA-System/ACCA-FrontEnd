import { Outlet, Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

export default function ProtectedRoutes() {
    const { auth } = useAuth();
    return (
      <>
        {auth.userToken ? (
          <main className="">
            <Outlet />
          </main>
        ) : (
          <Navigate to="/" />
        )}
      </>
    );
  };

