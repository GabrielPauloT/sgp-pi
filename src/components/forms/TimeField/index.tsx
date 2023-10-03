import { TimeFieldProps } from "./type";

export function TimeField({ label, id, value, onChange, error }: TimeFieldProps ) {
    return (
        <div>
            <label htmlFor={id} className="block text-gray-700 font-bold">
                {label}
            </label>
            <input
                type="time"
                id={id}
                className="w-full border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                value={value}
                onChange={onChange}
            />
            {error && <p className="text-red-500 text-xs italic">Campo obrigatório</p>}
        </div>
    )
}