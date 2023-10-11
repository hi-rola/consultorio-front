export interface Usuario {
  id_usuario?: number;
  nombre: string;
  apellidos: string;
  correo: string;
  rol?: number;
  token?: string;
  ok?: number;
  mensaje?: string;
}
