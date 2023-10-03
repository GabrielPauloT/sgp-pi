import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

type FormData = {
    id: string;
    colaborador: string;
    turno: string;
    area: string;
    tag: string;
    descricao: string;
    criticidade: string;
    modoDeParada: string;
    parouUnidade: boolean;
    tipoDeParada: string;
    motivo: string;
    disciplina: string;
    tempoDeParada: string;
    horaInicial: string;
    horaFinal: string;
    dataInicial: string;
    dataFinal: string;
    apontamento: string;
};

export default function FormStoppage() {
    const [data, setData] = useState<FormData>({
        id: "",
        colaborador: "",
        turno: "",
        area: "",
        tag: "",
        descricao: "",
        criticidade: "",
        modoDeParada: "",
        parouUnidade: false,
        tipoDeParada: "",
        motivo: "",
        disciplina: "",
        tempoDeParada: "",
        horaInicial: "",
        horaFinal: "",
        dataInicial: "",
        dataFinal: "",
        apontamento: "",
    });

    const { register, handleSubmit, formState: { errors } } = useForm<FormData>();

    const onSubmit: SubmitHandler<FormData> = (data) => {
        console.log(data);
    };

    return (
        <div className="flex-1 flex justify-center justify-items-center">
            <form onSubmit={handleSubmit(onSubmit)} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 h-fit">
                <div className="flex gap-5 flex-wrap mx-10 my-10 items-center">
                <div>
                    <label htmlFor="descricao" className="block text-gray-700 font-bold">Descrição:</label>
                    <input
                        type="text"
                        id="descricao"
                        {...register('descricao', { required: true })}
                        className="w-full border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        value={data.descricao}
                        onChange={(e) => setData({ ...data, descricao: e.target.value })}
                    />
                    {errors.descricao && <p className="text-red-500 text-xs italic">Campo obrigatório</p>}
                </div>
                <div>
                    <label htmlFor="colaborador" className="block text-gray-700 font-bold">Colaborador:</label>
                    <input
                        type="text"
                        id="colaborador"
                        aria-label="Colaborador"
                        value={data.colaborador}
                        className="w-full border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            {...register('colaborador', { required: true })}
                        onChange={(e) => setData({ ...data, colaborador: e.target.value })}
                    />
                    {errors.colaborador && <p className="text-red-500 text-xs italic">Campo obrigatório</p>}
                </div>
                <div>
                    <label htmlFor="turno" className="block text-gray-700 font-bold">
                        Turno:
                    </label>
                    <input
                        type="text"
                        id="turno"
                        aria-label="Turno"
                        value={data.turno}
                        className="w-full border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            {...register('turno', { required: true })}
                        onChange={(e) => setData({ ...data, turno: e.target.value })}
                    />
                    {errors.turno && <p className="text-red-500 text-xs italic">Campo obrigatório</p>}
                </div>
                <div>
                    <label htmlFor="area" className="block text-gray-700 font-bold">
                        Área:
                    </label>
                    <input
                        id="area"
                        type="text"
                        aria-label="Área"
                        value={data.area}
                        className="w-full border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            {...register('area', { required: true })}
                        onChange={(e) => setData({ ...data, area: e.target.value })}
                    />
                    {errors.area && <p className="text-red-500 text-xs italic">Campo obrigatório</p>}
                </div>
                <div>
                    <label htmlFor="tag" className="block text-gray-700 font-bold">
                        Tag:
                    </label>
                    <input
                        id="tag"
                        type="text"
                        aria-label="Tag"
                        className="w-full border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        {...register('tag', { required: true })}
                        value={data.tag}
                        onChange={(e) => setData({ ...data, tag: e.target.value })}
                    />
                    {errors.tag && <p className="text-red-500 text-xs italic">Campo obrigatório</p>}
                </div>
                    <div>
                        <label htmlFor="criticidade" className="block text-gray-700 font-bold items-center">
                            Crítica:
                        </label>
                        <select 
                            className="w-full border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="criticidade"
                            name="criticidade"
                            aria-label="Crítica"
                            value={data.criticidade}
                            onChange={(e) =>
                                setData({ ...data, criticidade: e.target.value })
                            }
                        >
                            <option value="escolha">Escolha a criticidade</option>
                            <option value="baixa">Baixa</option>
                            <option value="média">Média</option>
                            <option value="alta">Alta</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="modoDeParada" className="block text-gray-700 font-bold">
                            Modo de parada:
                        </label>
                        <input
                            id="modoDeParada"
                            type="text"
                            aria-label="Modo de parada"
                            className="w-full border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            {...register('modoDeParada', { required: true })}
                            value={data.modoDeParada}
                            onChange={(e) =>
                                setData({ ...data, modoDeParada: e.target.value })
                            }
                        />
                        {errors.modoDeParada && <p className="text-red-500 text-xs italic">Campo obrigatório</p>}
                    </div>
                    <div className="flex flex-row gap-3">
                        <label htmlFor="parouUnidade" className="block text-gray-700 font-bold">
                            Parou unidade:
                        </label>
                        <input
                            id="parouUnidade"
                            type="checkbox"
                            aria-label="Parou unidade"
                            className="w-10 border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            {...register('parouUnidade', { required: true })}
                            checked={data.parouUnidade}
                            onChange={(e) =>
                                setData({ ...data, parouUnidade: e.target.checked })
                            }
                        />
                    </div>
                    <div>
                        <label htmlFor="tipoDeParada" className="block text-gray-700 font-bold">
                            Tipo de parada:
                        </label>
                        <input
                            id="tipoDeParada"
                            type="text"
                            aria-label="Tipo de parada"
                            className="w-full border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            {...register('tipoDeParada', { required: true })}
                            value={data.tipoDeParada}
                            onChange={(e) =>
                                setData({ ...data, tipoDeParada: e.target.value })
                            }
                        />
                        {errors.tipoDeParada && <p className="text-red-500 text-xs italic">Campo obrigatório</p>}
                    </div>
                    <div className="w-full">
                        <label htmlFor="motivo" className="block text-gray-700 font-bold">
                            Motivo da parada:
                        </label>
                        <div className="flex flex-col gap-1">
                            <textarea
                                rows={4}
                                id="motivo"
                                aria-label="Motivo da parada"
                                className="w-full border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                {...register('motivo', { required: true })}
                                value={data.motivo}
                                onChange={(e) =>
                                    setData({ ...data, motivo: e.target.value })
                                }
                            />
                            {errors.motivo && <p className="text-red-500 text-xs italic">Campo obrigatório</p>}
                        </div>
                    </div>
                    <div>
                        <label htmlFor="disciplina" className="block text-gray-700 font-bold">
                            Disciplina:
                        </label>
                        <input
                            type="text"
                            id="motivo"
                            aria-label="Motivo da parada"
                            className="w-full border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            {...register('disciplina', { required: true })}
                            value={data.disciplina}
                            onChange={(e) =>
                                setData({ ...data, disciplina: e.target.value })
                            }
                        />
                        {errors.disciplina && <p className="text-red-500 text-xs italic">Campo obrigatório</p>}
                    </div>
                    <div>
                        <label htmlFor="tempoDeParada" className="block text-gray-700 font-bold">
                            Tempo de Parada:
                        </label>
                        <input
                            type="text"
                            id="tempoDeParada"
                            aria-label="Tempo de Parada"
                            className="w-full border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            {...register('tempoDeParada', { required: true })}
                            value={data.tempoDeParada}
                            onChange={(e) =>
                                setData({ ...data, tempoDeParada: e.target.value })
                            }
                        />
                        {errors.tempoDeParada && <p className="text-red-500 text-xs italic">Campo obrigatório</p>}
                    </div>
                    <div>
                        <label htmlFor="horaInicial" className="block text-gray-700 font-bold">
                            Hora Inicial:
                        </label>
                        <input
                            type="time"
                            id="horaInicial"
                            aria-label="Hora Inicial"
                            className="w-full border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            {...register('horaInicial', { required: true })}
                            value={data.horaInicial}
                            onChange={(e) =>
                                setData({ ...data, horaInicial: e.target.value })
                            }
                        />
                        {errors.horaInicial && <p className="text-red-500 text-xs italic">Campo obrigatório</p>}
                    </div>
                    <div>
                        <label htmlFor="horaFinal" className="block text-gray-700 font-bold">
                            Hora Final:
                        </label>
                        <input
                            type="time"
                            id="horaFinal"
                            aria-label="Hora Final"
                            className="w-full border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            {...register('horaFinal', { required: true })}
                            value={data.horaFinal}
                            onChange={(e) =>
                                setData({ ...data, horaFinal: e.target.value })
                            }
                        />
                        {errors.horaFinal && <p className="text-red-500 text-xs italic">Campo obrigatório</p>}
                    </div>
                    <div>
                        <label htmlFor="dataInicial" className="block text-gray-700 font-bold">
                            Data Inicial:
                        </label>
                        <input
                            type="date"
                            id="dataInicial"
                            aria-label="Data Inicial"
                            className="w-full border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            {...register('dataInicial', { required: true })}
                            value={data.dataInicial}
                            onChange={(e) =>
                                setData({ ...data, dataInicial: e.target.value })
                            }
                        />
                        {errors.dataInicial && <p className="text-red-500 text-xs italic">Campo obrigatório</p>}
                    </div>
                    <div>
                        <label htmlFor="dataFinal" className="block text-gray-700 font-bold">
                            Data Final:
                        </label>
                        <input
                            type="date"
                            id="dataFinal"
                            aria-label="Data Final"
                            className="w-full border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            {...register('dataFinal', { required: true })}
                            value={data.dataFinal}
                            onChange={(e) =>
                                setData({ ...data, dataFinal: e.target.value })
                            }
                        />
                        {errors.dataFinal && <p className="text-red-500 text-xs italic">Campo obrigatório</p>}
                    </div>
                    <div className="w-full">
                        <label htmlFor="apontamento" className="block text-gray-700 font-bold">
                            Apontamento:
                        </label>
                        <textarea
                            rows={4}
                            id="apontamento"
                            aria-label="Apontamento"
                            className="w-full border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            {...register('apontamento', { required: true })}
                            value={data.apontamento}
                            onChange={(e) =>
                                setData({ ...data, apontamento: e.target.value })
                            }
                        />
                        {errors.apontamento && <p className="text-red-500 text-xs italic">Campo obrigatório</p>}
                    </div>
                </div>
                <div className="flex items-center justify-end gap-4 mr-10">
                    <button
                        type="reset"
                        className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-32"
                    >
                        Cancelar
                    </button>
                    <button
                        type="submit"
                        className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-32"
                    >
                        Enviar
                    </button>
                </div>
            </form>
        </div>
    );
}