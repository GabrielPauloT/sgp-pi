import { FieldErrors } from "react-hook-form";

export type DataFieldProps = {
    id?: string;
    name?: string;
    label?: string;
    placeholder?: string;
    type?: string;
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    error?: FieldErrors<FormData>;
    disabled?: boolean;
}