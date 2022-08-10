import { createContext, ReactNode, useState } from "react";
import { useApi } from "../../Hooks/useApi";
import { AuthContextType } from "../../Types/AuthType";
import { User } from "../../Types/User";

export const AuthContext = createContext<AuthContextType>(null!);

export const AuthProvider = ( { children } : { children : ReactNode } ) => {

    const api = useApi();

    const [user, setUser] = useState<User | null>(null);
    const [message, setMessage] = useState('');

    const signin = async (user: string, pass: string) => {
        const data = await api.signin(user, pass);
        setMessage(data[0][1]);
        if (data.user) {
            setUser(data.user);
            return true;
        }
        return false;
    }

    const signout = () => {
        return setUser(null);
    }

    return <AuthContext.Provider value={{
        user,
        signin,
        message,
        setMessage,
        signout,
    }}>{children}</AuthContext.Provider>
}