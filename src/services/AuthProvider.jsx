import { useContext, createContext, useState, useEffect } from "react";

const AuthContext = createContext({
    isAuth: false,
});

//Create the login petition
const login = async (email, password) => {
    const response = await fetch
        (`${BACKEND_URL}/auth/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ email, password }),
        });
    const data = await response.json();
};

export const AuthProvider = ({ children }) => {
    const [isAuth, setIsAuth] = useState(true);

    return (
        <AuthContext.Provider value={{ isAuth }}>
            {children}
        </AuthContext.Provider>
    );
}

export const useAuth = () => useContext(AuthContext);
