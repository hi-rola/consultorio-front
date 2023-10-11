import { AuthResponse } from './../interfaces/AuthResponse.interface';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { enviroments } from 'src/enviroments/enviroments';
import { Observable, catchError, map, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private baseUrl: string = enviroments.baseUrl;
  private usuario?: AuthResponse;

  get currentUsuario(): AuthResponse | undefined {
    if (!this.usuario) return undefined;
    return structuredClone(this.usuario);
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
        tap((response) => (this.usuario = response))
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
            this.usuario = response;
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

  logout() {
    this.usuario = undefined;
    localStorage.removeItem('token');
  }

  validarToken(): Observable<boolean> {
    const url = `${this.baseUrl}/auth/renovarToken`;

    if (!localStorage.getItem('token')) return of(false);

    const headers = new HttpHeaders().set(
      'x-token',
      localStorage.getItem('token') || ''
    );

    return this.http.get<AuthResponse>(url, { headers: headers }).pipe(
      tap((response) => (this.usuario = response)),
      map((response) => {
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
        return response.ok;
      }),
      catchError((error) => of(false))
    );
  }
}
