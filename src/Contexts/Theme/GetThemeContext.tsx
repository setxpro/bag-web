import { createContext, ReactNode, useState } from "react";
import { DefaultTheme } from "styled-components";
import usePersistedState from "../../Hooks/usePersistedState";
import { dark } from "../../Styles/theme/dark";
import { light } from "../../Styles/theme/light";
import { ThemeType } from "../../Types/ThemeType";

export const GetThemeContext = createContext({} as ThemeType);

export const GetThemeProvider = ( { children }  : { children : ReactNode } ) => {

    const [theme, setTheme] = usePersistedState<DefaultTheme>('theme', light);
    const toggleTheme = () => setTheme(theme.title === 'light' ? dark : light);

    return (
        <GetThemeContext.Provider value={{
            theme,
            toggleTheme
        }}>{children}</GetThemeContext.Provider>
    )
}