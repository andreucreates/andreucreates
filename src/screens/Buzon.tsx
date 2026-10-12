import { useEffect, useState } from "react"
import Mensaje from "../models/Mensaje"
import { getAllMensajes } from "../services/mensajesServices"
import Spinner from "../components/Spinner"

export default function Buzon() {
    const [mensajes, setMensajes] = useState<Mensaje[] | null>(null)
    const celda = "border border-slate-700 px-4 py-2 min-w-35"
    const celdaH = celda + " bg-teal-700"
    const celdaT = celda + " bg-white text-slate-900"

    useEffect(() => {
        getAllMensajes().then(setMensajes)
    }, [])

    if (!mensajes) return (<Spinner/>)

    return(
        <div className="p-10 flex flex-col gap-10 justify-center items-center">
            <div className="w-full">
                <h1 className="text-6xl font-bold text-slate-950 self-start mb-5">Listado de mensajes</h1>
            </div>
            <div className="overflow-x-auto rounded-2xl border border-slate-700">
                <table className="w-full border-collapse">
                    <thead>
                        <th className={celdaH}>Nombre</th>
                        <th className={celdaH}>Correo</th>
                        <th className={celdaH}>Mensaje</th>
                        <th className={celdaH}>Fecha</th>
                    </thead>
                    <tbody>
                        {mensajes?.map((m) => (
                            <tr key={m.id}>
                                <td className={celdaT}>{m.nombre}</td>
                                <td className={celdaT}>{m.correo}</td>
                                <td className={celdaT}>{m.mensaje}</td>
                                <td className={celdaT}>{m.createdAt.split("T")[0].replaceAll("-", "/")}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}