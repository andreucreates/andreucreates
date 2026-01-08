import { supabase } from "./supabase.js";

/**
 * Inserta un mensaje en la tabla "Mensaje"
 * @param {{ nombre: string, correo: string, mensaje: string }} payload
 * @returns {Promise<any>} Devuelve el registro insertado (id, created_at, etc.)
 */
export async function createMensaje(payload) {
  const { nombre, correo, mensaje } = payload;

  const { data, error } = await supabase
    .from("Mensajes")
    .insert([{ nombre, correo, mensaje }])
    .select()
    .single();

  if (error) {
    console.error("Mensaje:", error.message);
    throw error;
  }

  return data;
}