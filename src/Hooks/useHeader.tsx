import { useContext } from 'react';
import { HeaderContext } from "../Contexts/Header";

export const useHeader = () => {
    const header = useContext(HeaderContext);
    return header
}