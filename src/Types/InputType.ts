import { ChangeEventHandler } from "react";

export type InputType = {
    type: string;
    name: string;
    placeholder: string;
    value: string | number;
    onChange: ChangeEventHandler<HTMLInputElement> | undefined;
}