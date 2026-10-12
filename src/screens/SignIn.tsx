import { useState } from "react"
import { useNavigate } from "react-router-dom";
import ojoVisible from "../assets/ojoVisible.png"
import ojoNoVisible from "../assets/ojoNoVisible.png"
import ACLogo from "../assets/ac-logo.svg"
import { signIn } from "../services/authServices";
import toast, { Toaster } from "react-hot-toast";

export default function SignIn() {
    const navigate = useNavigate()

    const [correo, setCorreo] = useState("")
    const [password, setPassword] = useState("")
    const [visible, setVisible] = useState(false)

    const trySignIn = async () => {
        try {
            const data = await signIn(correo, password)

            if(data.session) {
                navigate("/buzon")
                return
            }
        } catch (e) {
            const message = e instanceof Error ? e.message : "Ha ocurrido un error"
            toast.error(message)
        }
    }

    return (
        <div className="flex flex-col gap-8 items-center mb-10">
            <h1 className="text-6xl text-slate-950 font-bold">Acceso a modulo administrativo</h1>
            <img src={ACLogo} className="w-40 h-40"/>
            <div className="flex flex-col gap-4">
                <label className="text-slate-950">Correo:</label>
                <input
                    className="w-64 rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-slate-100 placeholder-slate-500 focus:outline-none focus:border-yellow-500 transition-colors"
                    id="mail-input"
                    type="email"
                    placeholder="Introduzca su correo"
                    value={correo}
                    onChange={(e) => setCorreo(e.target.value)}
                />
            </div>
            <div className="flex flex-col gap-4 relative">
                <label className="text-slate-950">Contraseña</label>
                <input
                    className="w-64 rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 pr-10 text-slate-100 placeholder-slate-500 focus:outline-none focus:border-yellow-500 transition-colors"
                    id="password-input"
                    type={visible ? "visible" : "password"}
                    placeholder="Introduzca su correo"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button
                    onClick={() => setVisible((v) => !v)}
                    className="absolute right-2 bottom-2 h-6 w-6 flex items-center justify-center"
                >
                    <img 
                        src={visible ? ojoNoVisible : ojoVisible}
                        alt={visible ? "Ocultar contraseña" : "Mostrar contraseña"}
                        className="h-5 w-5 brightness-0 invert"
                    />
                </button>
            </div>
            <div className="flex flex-col">
                <button
                    className="border border-slate-950 px-5 py-2.5 rounded-full bg-emerald-400 hover:bg-emerald-300 text-slate-950 font-medium transition-colors"
                    onClick={trySignIn}
                >
                    Iniciar sesión
                </button>
                {/* <NavLink to="/signUp">¿Aún no tienes cuenta? Registrate</NavLink> */}
            </div>
            <Toaster position="top-left"/>
        </div>
    )
}