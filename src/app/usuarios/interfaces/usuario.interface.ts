export interface Usuario {
  id_usuario?: number;
  nombre: string;
  apellidos: string;
  correo: string;
  rol?: number;
  fecha_creacion?: string;
  ultima_actualizacion?: string;
  estado?: number;
}
