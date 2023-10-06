export interface Consulta {
  id_consulta?: number;
  fecha?: string;
  hora_inicio?: string;
  hora_fin?: string;
  estado?: number;
  mensaje: string;
  ok: boolean;
  fecha_creacion?: string;
  ultima_actualizacion?: string;
}

export interface InformacionUsuarioConsulta {
  id_usuario: number;
  nombre: string;
  apellidos: string;
  correo: string;
  id_consulta: number;
  fecha: number;
  hora_inicio: string;
  hora_fin: string;
}

export interface ConsultaUsuario {
  id_consulta_usuario?: number;
  id_usuario?: number;
  id_consulta?: number;
  ok: boolean;
  mensaje?: string;
}

export interface Diagnostico {
  id_diagnostico: number;
  incisivo_central_sup_der_cla: string;
  incisivo_central_sup_der_gra: string;
  incisivo_lateral_sup_der_cla: string;
  incisivo_lateral_sup_der_gra: string;
  canino_sup_der_cla: string;
  canino_sup_der_gra: string;
  primer_premolar_sup_der_cla: string;
  primer_premolar_sup_der_gra: string;
  segundo_premolar_sup_der_cla: string;
  segundo_premolar_sup_der_gra: string;
  primer_molar_sup_der_cla: string;
  primer_molar_sup_der_gra: string;
  segundo_molar_sup_der_cla: string;
  segundo_molar_sup_der_gra: string;
  tercer_molar_sup_der_cla: string;
  tercer_molar_sup_der_gra: string;
  incisivo_central_sup_izq_cla: string;
  incisivo_central_sup_izq_gra: string;
  incisivo_lateral_sup_izq_cla: string;
  incisivo_lateral_sup_izq_gra: string;
  canino_sup_izq_cla: string;
  canino_sup_izq_gra: string;
  primer_premolar_sup_izq_cla: string;
  primer_premolar_sup_izq_gra: string;
  segundo_premolar_sup_izq_cla: string;
  segundo_premolar_sup_izq_gra: string;
  primer_molar_sup_izq_cla: string;
  primer_molar_sup_izq_gra: string;
  segundo_molar_sup_izq_cla: string;
  segundo_molar_sup_izq_gra: string;
  tercer_molar_sup_izq_cla: string;
  tercer_molar_sup_izq_gra: string;
  incisivo_central_inf_der_cla: string;
  incisivo_central_inf_der_gra: string;
  incisivo_lateral_inf_der_cla: string;
  incisivo_lateral_inf_der_gra: string;
  canino_inf_der_cla: string;
  canino_inf_der_gra: string;
  primer_premolar_inf_der_cla: string;
  primer_premolar_inf_der_gra: string;
  segundo_premolar_inf_der_cla: string;
  segundo_premolar_inf_der_gra: string;
  primer_molar_inf_der_cla: string;
  primer_molar_inf_der_gra: string;
  segundo_molar_inf_der_cla: string;
  segundo_molar_inf_der_gra: string;
  tercer_molar_inf_der_cla: string;
  tercer_molar_inf_der_gra: string;
  incisivo_central_inf_izq_cla: string;
  incisivo_central_inf_izq_gra: string;
  incisivo_lateral_inf_izq_cla: string;
  incisivo_lateral_inf_izq_gra: string;
  canino_inf_izq_cla: string;
  canino_inf_izq_gra: string;
  primer_premolar_inf_izq_cla: string;
  primer_premolar_inf_izq_gra: string;
  segundo_premolar_inf_izq_cla: string;
  segundo_premolar_inf_izq_gra: string;
  primer_molar_inf_izq_cla: string;
  primer_molar_inf_izq_gra: string;
  segundo_molar_inf_izq_cla: string;
  segundo_molar_inf_izq_gra: string;
  tercer_molar_inf_izq_cla: string;
  tercer_molar_inf_izq_gra: string;
  mensaje: string;
  id_usuario: number;
  ok: boolean;
  msj: string;
}
