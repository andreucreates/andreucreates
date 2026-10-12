import { supabase } from "./supabaseClient";

export async function signIn(correo: string, password: string) {
    const { data, error } = await supabase.auth.signInWithPassword({
        email: correo,
        password,
    })
    if (error) throw error
    return data
}

export async function signUp(correo: string, password: string) {
    const { data, error } = await supabase.auth.signUp({
        email: correo,
        password,
    })
    if (error) throw error
    return data
}

export async function signOut() {
    const { error } = await supabase.auth.signOut()
    if (error) throw error
}

export async function getUser() {
    const {data: { user }, error} = await supabase.auth.getUser()

    if (error){
        console.error("Error al obtener el usuario", error.message)
        return null
    }

    if (!user){
        console.warn("No hay una sesión activa")
        return null
    } 

    return user
}

export async function getUserId() {
    const {data: {user}, error} = await supabase.auth.getUser()

    if (error){
        console.error("Error al obtener el usuario", error.message)
        return null
    }

    if (!user){
        console.warn("No hay una sesión activa")
        return null
    } 

    return user.id
}