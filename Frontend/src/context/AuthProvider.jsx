import { createContext, useContext, useState } from "react";

//Its custom hook , make for user Auth
export const authContext = createContext();
export const AuthProvider = ({children}) => {
    const initalAuthUser = localStorage.getItem('Users');
    const [authUser , setAuthUser] = useState(initalAuthUser ? JSON.parse(initalAuthUser) : undefined)

    return (
        <authContext.Provider value={[authUser , setAuthUser]}>
            {children}
        </authContext.Provider>
    )
}

export const useAuth = () => useContext(authContext)