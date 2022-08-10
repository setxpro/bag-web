import { Dispatch, SetStateAction } from "react";
import { User } from "./User"

export type AuthContextType = {
    user: User | null;
    signin: (user: string, pass: string) => Promise<boolean>;
    signout: () => void;
    message: string;
    setMessage: Dispatch<SetStateAction<string>>;
}