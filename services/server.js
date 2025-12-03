import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import { Resend } from "resend";

dotenv.config();

const allowedOrigins = [
    "http://localhost:5173",
    "https://andreucreates.dev"
];

const app = express();
app.use(
    cors({
        origin: allowedOrigins,
    })
);
app.use(express.json());

const resend = new Resend(process.env.RESEND_API_KEY);

app.post("/send-email", async (req, res) => {
    const { nombre, correo, mensaje } = req.body;

    try {
        await resend.emails.send({
            from: "Formulario <onboarding@resend.dev>",
            to: "a.aguado.pitxer@gmail.com",
            subject: `Nuevo mensaje de ${nombre}`,
            text: `
                Nombre: ${nombre}
                Correo: ${correo}

                Mensaje: 
                ${mensaje}
            `,
        });

        return res.json({ ok: true, message: "Correo enviado correctamente" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ ok: false, error: "Error enviando correo" });
    }
});

const PORT = process.env.PORT || 3001;
app.listen(3001, () => console.log(`Servidor en http://localhost:${PORT}`));