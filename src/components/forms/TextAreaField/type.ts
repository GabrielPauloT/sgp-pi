import { FieldErrors } from "react-hook-form";

export type TextAreaFieldProps = {
    id?: string;
    name?: string;
    label?: string;
    placeholder?: string;
    type?: string;
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
    error?: FieldErrors<FormData>;
    disabled?: boolean;
    rowsTea?: number;
}