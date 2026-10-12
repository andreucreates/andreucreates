export default class Mensaje {
    id: string | number
    createdAt: string
    nombre: string
    correo: string
    mensaje: string

    constructor(id: string, createdAt: string, nombre: string, correo: string, mensaje: string) {
        this.id = id
        this.createdAt = createdAt
        this.nombre = nombre
        this.correo = correo
        this.mensaje = mensaje
    }

    static fromSupabase(datosDB: {id: string; created_at: string; nombre: string; correo: string; mensaje: string}) {
        return new Mensaje(datosDB.id, datosDB.created_at, datosDB.nombre, datosDB.correo, datosDB.mensaje)
    }
}

