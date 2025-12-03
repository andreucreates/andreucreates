import React from "react";

export default function ContactButton() {
    const email = "aagupit@upv.edu.es";
    const subject = encodeURIComponent("Consulta desde tu web");
    const body = encodeURIComponent("Hola Andreu, me gustaría contactar contigo sobre...");

    const mailToLink = `mailto:${email}?subject=${subject}&body=${body}`;

    return (
        <button
            onClick={() => window.location.href = mailToLink}
            className="contact-button"
        >
            Contacta conmigo
        </button>
    )
}