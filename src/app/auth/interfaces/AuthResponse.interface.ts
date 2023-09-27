export interface AuthResponse {
  id_usuario?: number;
  nombre?: string;
  apellidos?: string;
  correo?: string;
  rol?: number;
  token?: string;
  ok: boolean;
  mensaje?: string;
}
