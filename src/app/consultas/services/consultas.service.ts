import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { enviroments } from 'src/enviroments/enviroments';
import { Observable, catchError, map, of, tap } from 'rxjs';
import { Consulta, ConsultaUsuario } from '../interfaces/consulta.interface';

@Injectable({
  providedIn: 'root',
})
export class ConsultasService {
  private baseUrl: string = enviroments.baseUrl;
  constructor(private http: HttpClient) {}

  getConsultas(): Observable<Consulta[]> {
    return this.http.get<Consulta[]>(`${this.baseUrl}/consultas`);
  }

  getConsultasPorFecha(fecha: string): Observable<Consulta[]> {
    return this.http.get<Consulta[]>(
      `${this.baseUrl}/consultas-fecha/` + fecha
    );
  }

  reservarConsulta(
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

  getFechaActualConsultaFiltro(): string {
    const date = new Date();
    const anio = date.getFullYear();
    const mes = date.getMonth() + 1;
    const dia = date.getDate();
    return anio + '-' + mes + '-' + dia;
  }
}
