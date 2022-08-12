import { createContext, ReactNode, useState } from "react";
import { DefaultTheme } from "styled-components";
import { dark } from "../../Styles/theme/dark";
import { light } from "../../Styles/theme/light";

export const GetThemeContext = createContext({});

export const GetThemeProvider = ( { children }  : { children : ReactNode } ) => {

    const [theme, setTheme] = useState<DefaultTheme>('theme', light);

    return (
        <GetThemeContext.Provider value={{}}>{children}</GetThemeContext.Provider>
    )
}