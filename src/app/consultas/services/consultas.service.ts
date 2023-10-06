import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { enviroments } from 'src/enviroments/enviroments';
import { Observable, catchError, map, of } from 'rxjs';
import {
  Consulta,
  ConsultaUsuario,
  Diagnostico,
  InformacionUsuarioConsulta,
} from '../interfaces/consulta.interface';

@Injectable({
  providedIn: 'root',
})
export class ConsultasService {
  private baseUrl: string = enviroments.baseUrl;
  constructor(private http: HttpClient) {}

  getConsultaById(id_consulta: number): Observable<Consulta> {
    return this.http.get<Consulta>(`${this.baseUrl}/consultas/` + id_consulta);
  }

  getConsultasPorFecha(fecha: string): Observable<Consulta[]> {
    return this.http.get<Consulta[]>(
      `${this.baseUrl}/consultas-fecha/` + fecha
    );
  }

  registrarConsulta(
    fecha: string,
    hora_inicio: string,
    hora_fin: string,
    estado: number
  ): Observable<Consulta> {
    const body = { fecha, hora_inicio, hora_fin, estado };
    return this.http.post<Consulta>(`${this.baseUrl}/consultas`, body);
  }

  updateConsulta(
    fecha: string,
    hora_inicio: string,
    hora_fin: string,
    estado: string,
    id_consulta: number
  ): Observable<Consulta> {
    const body = { fecha, hora_inicio, hora_fin, estado };
    return this.http.put<Consulta>(
      `${this.baseUrl}/consultas/` + id_consulta,
      body
    );
  }

  reservarConsultaUsuario(
    id_usuario: number,
    id_consulta: number
  ): Observable<boolean> {
    const body = { id_usuario, id_consulta };
    return this.http
      .post<ConsultaUsuario>(`${this.baseUrl}/usuarios`, body)
      .pipe(
        map((response) => response.ok),
        catchError(() => of(false))
      );
  }

  getInformacionUsuarioConsulta(
    id_consulta: number
  ): Observable<InformacionUsuarioConsulta> {
    return this.http.get<InformacionUsuarioConsulta>(
      `${this.baseUrl}/consultas-info/` + id_consulta
    );
  }

  getFechaActualConsultaFiltro(): string {
    const date = new Date();
    const anio = date.getFullYear();
    const mes = date.getMonth() + 1;
    const dia = date.getDate();
    return anio + '-' + mes + '-' + dia;
  }

  registrarDiagnostico(
    incisivo_central_sup_der_cla: string,
    incisivo_central_sup_der_gra: string,
    incisivo_lateral_sup_der_cla: string,
    incisivo_lateral_sup_der_gra: string,
    canino_sup_der_cla: string,
    canino_sup_der_gra: string,
    primer_premolar_sup_der_cla: string,
    primer_premolar_sup_der_gra: string,
    segundo_premolar_sup_der_cla: string,
    segundo_premolar_sup_der_gra: string,
    primer_molar_sup_der_cla: string,
    primer_molar_sup_der_gra: string,
    segundo_molar_sup_der_cla: string,
    segundo_molar_sup_der_gra: string,
    tercer_molar_sup_der_cla: string,
    tercer_molar_sup_der_gra: string,
    incisivo_central_sup_izq_cla: string,
    incisivo_central_sup_izq_gra: string,
    incisivo_lateral_sup_izq_cla: string,
    incisivo_lateral_sup_izq_gra: string,
    canino_sup_izq_cla: string,
    canino_sup_izq_gra: string,
    primer_premolar_sup_izq_cla: string,
    primer_premolar_sup_izq_gra: string,
    segundo_premolar_sup_izq_cla: string,
    segundo_premolar_sup_izq_gra: string,
    primer_molar_sup_izq_cla: string,
    primer_molar_sup_izq_gra: string,
    segundo_molar_sup_izq_cla: string,
    segundo_molar_sup_izq_gra: string,
    tercer_molar_sup_izq_cla: string,
    tercer_molar_sup_izq_gra: string,
    incisivo_central_inf_der_cla: string,
    incisivo_central_inf_der_gra: string,
    incisivo_lateral_inf_der_cla: string,
    incisivo_lateral_inf_der_gra: string,
    canino_inf_der_cla: string,
    canino_inf_der_gra: string,
    primer_premolar_inf_der_cla: string,
    primer_premolar_inf_der_gra: string,
    segundo_premolar_inf_der_cla: string,
    segundo_premolar_inf_der_gra: string,
    primer_molar_inf_der_cla: string,
    primer_molar_inf_der_gra: string,
    segundo_molar_inf_der_cla: string,
    segundo_molar_inf_der_gra: string,
    tercer_molar_inf_der_cla: string,
    tercer_molar_inf_der_gra: string,
    incisivo_central_inf_izq_cla: string,
    incisivo_central_inf_izq_gra: string,
    incisivo_lateral_inf_izq_cla: string,
    incisivo_lateral_inf_izq_gra: string,
    canino_inf_izq_cla: string,
    canino_inf_izq_gra: string,
    primer_premolar_inf_izq_cla: string,
    primer_premolar_inf_izq_gra: string,
    segundo_premolar_inf_izq_cla: string,
    segundo_premolar_inf_izq_gra: string,
    primer_molar_inf_izq_cla: string,
    primer_molar_inf_izq_gra: string,
    segundo_molar_inf_izq_cla: string,
    segundo_molar_inf_izq_gra: string,
    tercer_molar_inf_izq_cla: string,
    tercer_molar_inf_izq_gra: string,
    mensaje: string,
    id_usuario: string
  ): Observable<Diagnostico> {
    const body = {
      incisivo_central_sup_der_cla,
      incisivo_central_sup_der_gra,
      incisivo_lateral_sup_der_cla,
      incisivo_lateral_sup_der_gra,
      canino_sup_der_cla,
      canino_sup_der_gra,
      primer_premolar_sup_der_cla,
      primer_premolar_sup_der_gra,
      segundo_premolar_sup_der_cla,
      segundo_premolar_sup_der_gra,
      primer_molar_sup_der_cla,
      primer_molar_sup_der_gra,
      segundo_molar_sup_der_cla,
      segundo_molar_sup_der_gra,
      tercer_molar_sup_der_cla,
      tercer_molar_sup_der_gra,
      incisivo_central_sup_izq_cla,
      incisivo_central_sup_izq_gra,
      incisivo_lateral_sup_izq_cla,
      incisivo_lateral_sup_izq_gra,
      canino_sup_izq_cla,
      canino_sup_izq_gra,
      primer_premolar_sup_izq_cla,
      primer_premolar_sup_izq_gra,
      segundo_premolar_sup_izq_cla,
      segundo_premolar_sup_izq_gra,
      primer_molar_sup_izq_cla,
      primer_molar_sup_izq_gra,
      segundo_molar_sup_izq_cla,
      segundo_molar_sup_izq_gra,
      tercer_molar_sup_izq_cla,
      tercer_molar_sup_izq_gra,
      incisivo_central_inf_der_cla,
      incisivo_central_inf_der_gra,
      incisivo_lateral_inf_der_cla,
      incisivo_lateral_inf_der_gra,
      canino_inf_der_cla,
      canino_inf_der_gra,
      primer_premolar_inf_der_cla,
      primer_premolar_inf_der_gra,
      segundo_premolar_inf_der_cla,
      segundo_premolar_inf_der_gra,
      primer_molar_inf_der_cla,
      primer_molar_inf_der_gra,
      segundo_molar_inf_der_cla,
      segundo_molar_inf_der_gra,
      tercer_molar_inf_der_cla,
      tercer_molar_inf_der_gra,
      incisivo_central_inf_izq_cla,
      incisivo_central_inf_izq_gra,
      incisivo_lateral_inf_izq_cla,
      incisivo_lateral_inf_izq_gra,
      canino_inf_izq_cla,
      canino_inf_izq_gra,
      primer_premolar_inf_izq_cla,
      primer_premolar_inf_izq_gra,
      segundo_premolar_inf_izq_cla,
      segundo_premolar_inf_izq_gra,
      primer_molar_inf_izq_cla,
      primer_molar_inf_izq_gra,
      segundo_molar_inf_izq_cla,
      segundo_molar_inf_izq_gra,
      tercer_molar_inf_izq_cla,
      tercer_molar_inf_izq_gra,
      mensaje,
      id_usuario,
    };
    return this.http.post<Diagnostico>(`${this.baseUrl}/diagnosticos`, body);
  }

  getCariesClases(): string[] {
    return [
      'Ninguno',
      'Clase 1: Carie en las caras oclusales del sector posterior',
      'Clase 2: Caries en las caras ínter-proximales del sector posterior',
      'Caries 3: Caries en las caras inter-proximales del sector anterior',
      'Clase 4: Caries las caras ínter-proximales del sector anterior y el borde incisal',
      'Clase 5: Carie la parte cervical',
    ];
  }

  getCariesGrados(): string[] {
    return [
      'Ninguno',
      'Grado 1: Afecta sólo al esmalte',
      'Grado 2: Afecta al esmalte y a la dentina',
      'Grado 3: Afecta al esmalte, dentina y a la pulpa',
    ];
  }
}
