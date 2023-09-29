export interface Consulta {
  id_consulta: number;
  fecha: string;
  hora_inicio: string;
  hora_fin: string;
  estado: number;
  fecha_creacion?: string;
  ultima_actualizacion?: string;
}

export interface ConsultaUsuario {
  id_consulta_usuario?: number;
  id_usuario?: number;
  id_consulta?: number;
  ok: boolean;
  mensaje?: string;
}
