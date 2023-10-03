import { FieldErrors } from "react-hook-form";

export type InputFieldProps = {
    id?: string;
    name?: string;
    label?: string;
    placeholder?: string;
    type?: string;
    value?: string;
    cheked?: boolean;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    error?: FieldErrors<FormData>;
    disabled?: boolean;
};