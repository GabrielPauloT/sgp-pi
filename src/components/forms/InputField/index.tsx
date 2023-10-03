import { InputFieldProps } from "./type";

export function InputField({ label, id, name, value, onChange, error, type, cheked }: InputFieldProps) {
  return (
    <>
        {
        type == "checkbox" ? (
            <div className="flex flex-row gap-3">
                <label htmlFor={id} className="block text-gray-700 font-bold">
                    {label}
                </label>
                <input
                    id={id}
                    type={type}
                    name={name}
                    className="w-10 border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    checked={cheked}
                    onChange={onChange}
                />
                {error && <p className="text-red-500 text-xs italic">Campo obrigatório</p>}
            </div>
            ) :
            (
                <div>
                    <label htmlFor={id} className="block text-gray-700 font-bold">
                        {label}
                    </label>
                    <input
                    type={type}
                    id={id}
                    name={name}
                    value={value}
                    onChange={onChange}
                    className="w-full border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                    {error && <p className="text-red-500 text-xs italic">Campo obrigatório</p>}
                </div>
            )
        }
    </>
  );
}
