import { DefaultTheme } from "styled-components"

export type ThemeType = {
    theme: DefaultTheme;
    toggleTheme: () => void;
}