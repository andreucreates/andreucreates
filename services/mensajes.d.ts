export type MensajeInsert = {
  nombre: string;
  correo: string;
  mensaje: string;
};

export type MensajeRow = {
  id: string | number;
  created_at: string;
  nombre: string;
  correo: string;
  mensaje: string;
};

declare module "../services/mensajes.js" {
  export function createMensaje(
    payload: MensajeInsert
  ): Promise<MensajeRow>;
}
