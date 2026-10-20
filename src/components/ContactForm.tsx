import React, { useState } from "react";
import { createMensaje } from "../services/mensajesServices.js";
import { Toaster, toast } from "react-hot-toast";

type ContactFormProps = {
    setContactFormVisibility: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function ContactForm({ setContactFormVisibility }: ContactFormProps) {
    const [nombre, setNombre] = useState("");
    const [correo, setCorreo] = useState("");
    const [mensaje, setMensaje] = useState("");
    const [enviado, setEnviado] = useState(false);
    const [enviando, setEnviando] = useState(false);

    // const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    //     e.preventDefault();

    //     const response = await fetch("http://localhost:3001/send-email", {
    //         method: "POST",
    //         headers: { "Content-Type": "application/json" },
    //         body: JSON.stringify({ nombre, correo, mensaje }),
    //     });

    //     const data = await response.json();

    //     if (data.ok) {
    //         setEnviado(true);
    //         setNombre("");
    //         setCorreo("");
    //         setMensaje("");

    //         // Oculta el mensaje de enviado después de unos segundos, si quieres
    //         setTimeout(() => setEnviado(false), 4000);
    //     }
    // };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (nombre === "" || correo === "" || mensaje === "") {
            toast.error("Campos incompletos. Por favor, revise que todos los campos hayan sido rellenados.")
            return
        }

        setEnviando(true);
        const payload = {
            nombre: nombre.trim(),
            correo: correo.trim(),
            mensaje: mensaje.trim(),
        };

        try {
            await createMensaje(payload);

            setEnviado(true);
            setNombre("");
            setCorreo("");
            setMensaje("");

            setTimeout(() => setEnviado(false), 4000);
        } catch (err: unknown) {
            console.error("Error guardando el mensaje", err);
        } finally {
            setEnviando(false);
        }
    }

    return (
        <div className="fixed inset-0 z-40 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
            <div className="w-full max-w-md rounded-2xl border border-slate-800 bg-slate-950 p-6 shadow-xl">
                <div className="flex items-center justify-between mb-2">
                    <h2 className="text-lg font-semibold">Contacto</h2>
                    <button
                        type="button"
                        className="w-8 h-8 flex items-center justify-center rounded-full text-slate-100 hover:bg-slate-800 transition-colors"
                        onClick={() => setContactFormVisibility(false)}
                    >
                        ✕
                    </button>
                </div>

                <p className="mb-6 text-sm text-slate-400">
                    ¿Tienes alguna consulta o propuesta? Rellena el formulario y te responderé con la mayor brevedad posible.
                </p>

                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <div className="flex flex-col gap-1">
                        <label htmlFor="name-input">Nombre</label>
                        <input
                            id="name-input"
                            name="nombre"
                            placeholder="Introduzca su nombre"
                            value={nombre}
                            onChange={(e) => setNombre(e.target.value)}
                            className="rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-slate-100 placeholder-slate-500 focus:outline-none focus:border-indigo-500 transition-colors"
                        />
                    </div>

                    <div className="flex flex-col gap-1">
                        <label htmlFor="mail-input">Correo electrónico</label>
                        <input
                            id="mail-input"
                            name="correo"
                            type="email"
                            placeholder="Introduzca su correo"
                            value={correo}
                            onChange={(e) => setCorreo(e.target.value)}
                            className="rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-slate-100 placeholder-slate-500 focus:outline-none focus:border-indigo-500 transition-colors"
                        />
                    </div>

                    <div className="flex flex-col gap-1">
                        <label htmlFor="message-input">Mensaje</label>
                        <textarea
                            id="message-input"
                            name="mensaje"
                            placeholder="Introduzca su mensaje"
                            value={mensaje}
                            onChange={(e) => setMensaje(e.target.value)}
                            rows={5}
                            className="rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-slate-100 placeholder-slate-500 focus:outline-none focus:border-indigo-500 transition-colors"
                        />
                    </div>

                    <button 
                        type="submit" 
                        className="self-start rounded-full bg-indigo-500 px-5 py-2.5 font-medium text-white transition-colors hover:bg-indigo-400 disabled:opacity-50 disabled:cursor-not-allowed" 
                        disabled={enviando}
                        >
                        {enviando ? "Enviando..." : "Enviar"}
                    </button>

                    {enviado && <p className="text-sm text-emerald-400">Mensaje enviado ✔</p>}
                </form>
            </div>
            <Toaster position="top-center"/>
        </div>
    );
}
