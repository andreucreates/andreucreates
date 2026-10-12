import { Navigate } from "react-router-dom"
import type { User } from "@supabase/supabase-js"
import { useEffect, useState } from "react"
import { getUser } from "../services/authServices"
import Spinner from "./Spinner"

export default function RutaProtegida({ children }: { children : React.ReactNode}) {
    const [usuario, setUsuario] = useState<User | null>(null)
    const [cargando, setCargando] = useState(true)

    useEffect(() => {
        getUser().then((u) => {
            setUsuario(u)
            setCargando(false)
        })
    }, [])
    if (cargando) return <Spinner />
    if (!usuario) return <Navigate to="/signIn" replace/>

    return children
}