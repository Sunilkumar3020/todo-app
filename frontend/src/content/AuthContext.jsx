import { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [token, setToken] = useState(localStorage.getItem('token'))
    const login = (token) => {
        if (!token) {
            return alert("Invalid Token")
        }
        localStorage.setItem("token", token)
        setToken(null)
    }
    const logout = () => {
        console.log('Logout button click')
        localStorage.removeItem('token');
        setToken(null)
    }
    return (
        <AuthContext.Provider value={{ token, login, logout }}>
            {children}
        </AuthContext.Provider>
    )
}