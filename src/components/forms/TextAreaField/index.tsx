import { TextAreaFieldProps } from "./type";

export function TextAreaField({ label, id, value, onChange, error, rowsTea }: TextAreaFieldProps) {
  return (
    <div className="w-full">
        <label htmlFor={id} className="block text-gray-700 font-bold">
            {label}
        </label>
        <div className="flex flex-col gap-1">
            <textarea
                rows={rowsTea}
                id={id}
                aria-label={label}
                className="w-full border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                value={value}
                onChange={onChange}
            />
            {error && <p className="text-red-500 text-xs italic">Campo obrigatório</p>}
        </div>
    </div>
  );
}
