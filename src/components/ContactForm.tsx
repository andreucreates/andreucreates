import React, { useState } from "react";

type ContactFormProps = {
    setContactFormVisibility: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function ContactForm({ setContactFormVisibility }: ContactFormProps) {
    const [nombre, setNombre] = useState("");
    const [correo, setCorreo] = useState("");
    const [mensaje, setMensaje] = useState("");
    const [enviado, setEnviado] = useState(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const response = await fetch("http://localhost:3001/send-email", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ nombre, correo, mensaje }),
        });

        const data = await response.json();

        if (data.ok) {
            setEnviado(true);
            setNombre("");
            setCorreo("");
            setMensaje("");

            // Oculta el mensaje de enviado después de unos segundos, si quieres
            setTimeout(() => setEnviado(false), 4000);
        }
    };

    return (
        <div className="contact-form-overlay">
            <div className="contact-form">
                <div className="contact-form-header">
                    <h2>Contacto</h2>
                    <button
                        type="button"
                        className="contact-form-close"
                        onClick={() => setContactFormVisibility(false)}
                    >
                        ✕
                    </button>
                </div>

                <p className="contact-form-subtitle">
                    ¿Tienes alguna consulta o propuesta? Rellena el formulario y te responderé lo antes posible.
                </p>

                <form onSubmit={handleSubmit} className="contact-form-body">
                    <div className="form-group">
                        <label htmlFor="name-input">Nombre</label>
                        <input
                            id="name-input"
                            name="nombre"
                            placeholder="Introduzca su nombre"
                            value={nombre}
                            onChange={(e) => setNombre(e.target.value)}
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="mail-input">Correo electrónico</label>
                        <input
                            id="mail-input"
                            name="correo"
                            type="email"
                            placeholder="Introduzca su correo"
                            value={correo}
                            onChange={(e) => setCorreo(e.target.value)}
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="message-input">Mensaje</label>
                        <textarea
                            id="message-input"
                            name="mensaje"
                            placeholder="Introduzca su mensaje"
                            value={mensaje}
                            onChange={(e) => setMensaje(e.target.value)}
                            rows={5}
                        />
                    </div>

                    <button type="submit" className="contact-form-submit">
                        Enviar
                    </button>

                    {enviado && <p className="contact-form-success">Mensaje enviado ✔</p>}
                </form>
            </div>
        </div>
    );
}
