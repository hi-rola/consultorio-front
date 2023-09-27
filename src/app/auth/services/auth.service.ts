import { AuthResponse } from './../interfaces/AuthResponse.interface';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { enviroments } from 'src/enviroments/enviroments';
import { Observable, catchError, map, of, tap } from 'rxjs';
import { Usuario } from 'src/app/usuarios/interfaces/usuario.interface';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private baseUrl: string = enviroments.baseUrl;
  private _usuario!: Usuario;

  get usuario() {
    return { ...this._usuario };
  }

  constructor(private http: HttpClient) {}

  login(correo: string, contrasena: string): Observable<AuthResponse> {
    const body = { correo, contrasena };
    return this.http
      .post<AuthResponse>(`${this.baseUrl}/auth/login`, body)
      .pipe(
        tap((response) => {
          if (response.ok === true) {
            localStorage.setItem('token', response.token!);
            localStorage.setItem(
              'user',
              `${
                response.id_usuario!.toString() +
                ',' +
                response.nombre +
                ',' +
                response.apellidos
              }`
            );
          }
        }),
        map((response) => response)
      );
  }

  registrar(
    nombre: string,
    apellidos: string,
    contrasena: string,
    correo: string,
    rol: number,
    estado: number
  ): Observable<AuthResponse> {
    const body = { nombre, apellidos, contrasena, correo, rol, estado };
    return this.http
      .post<AuthResponse>(`${this.baseUrl}/auth/registrar`, body)
      .pipe(
        tap((response) => {
          if (response.ok === true) {
            localStorage.setItem('token', response.token!);
            localStorage.setItem(
              'user',
              `${
                response.id_usuario!.toString() +
                ',' +
                response.nombre +
                ',' +
                response.apellidos
              }`
            );
          }
        }),
        map((response) => response)
      );
  }

  validarToken(): Observable<boolean> {
    const url = 'this.baseUrl}/auth/renovarToken';
    const headers = new HttpHeaders().set(
      'x-token',
      localStorage.getItem('token') || ''
    );

    return this.http.get<AuthResponse>(url, { headers: headers }).pipe(
      map((response) => {
        localStorage.setItem('token', response.token!);
        this._usuario = {
          id_usuario: response.id_usuario!,
          nombre: response.nombre!,
          apellidos: response.apellidos!,
          correo: response.correo!,
        };
        return response.ok;
      }),
      catchError((error) => of(false))
    );
  }
}
