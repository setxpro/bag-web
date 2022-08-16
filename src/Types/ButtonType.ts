import { ReactNode } from "react";

export type ButtonType = {
    title: string;
    onClick: any;
}
export type ButtonIconType = {
    onClick: any;
    children: ReactNode;
}