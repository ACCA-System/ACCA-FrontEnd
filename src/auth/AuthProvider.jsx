import { useContext, createContext, useState, useEffect } from "react";

const AuthContext = createContext({
    isAuth: false,
});

export const AuthProvider = ({ children }) => {
    const [isAuth, setIsAuth] = useState(true);

    return (
        <AuthContext.Provider value={{ isAuth }}>
            {children}
        </AuthContext.Provider>
    );
}

export const useAuth = () => useContext(AuthContext);
