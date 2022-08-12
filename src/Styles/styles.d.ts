import styled from "styled-components"

declare module "styled-components" {
    export interface DefaultTheme {
        title: string;
        colors: {
            main: string;
            nav: string;
            sidebar: string;
            sideMobile: string;
            text: string;
            border: string;
        }
    }
}