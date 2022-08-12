import { ReactNode } from "react";
import { IconType } from "react-icons";
import { DefaultTheme, StyledComponent } from "styled-components";

export type ButtonType = {
    title: string;
    onClick: any;
}
export type ButtonIconType = {
    onClick: any;
    children: ReactNode;
}