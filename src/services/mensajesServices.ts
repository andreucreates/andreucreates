import { supabase } from "./supabaseClient.js";
import Mensaje from "../models/Mensaje.js";

/**
 * Inserta un mensaje en la tabla "Mensaje"
 * @param {{ nombre: string, correo: string, mensaje: string }} payload
 * @returns {Promise<any>} Devuelve el registro insertado (id, created_at, etc.)
 */

export type MensajeInsert = {
  nombre: string
  correo: string
  mensaje: string
}

export type MensajeRow = {
  id: string
  created_at: string
  nombre: string
  correo: string
  mensaje: string
}

export async function createMensaje(payload: MensajeInsert): Promise<Mensaje>{
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

export async function getMensajeById(id: string) {
  const { data, error } = await supabase
    .from("Mensajes")
    .select("*")
    .eq("id", id)
    .single()

  if (error) {
    console.error("Mensaje:", error.message);
    throw error;
  }

  return data ? Mensaje.fromSupabase(data) : null
}

export async function getAllMensajes() {
  const { data, error } = await supabase
    .from("Mensajes")
    .select("*")

  if (error) {
    console.error("Mensaje:", error.message);
    throw error;
  }

  return data.map(datoPlano => Mensaje.fromSupabase(datoPlano))
}

export async function deleteMensajeById(id: string) {
  const { data, error } = await supabase
    .from("Mensajes")
    .delete()
    .eq("id", id)
    .select()

  if (error) {
    console.error("Mensaje:", error.message);
    throw error;
  }

  return data.length > 0
}