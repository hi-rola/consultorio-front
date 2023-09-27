import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'auth-registro-page',
  templateUrl: './registro-page.component.html',
  styleUrls: ['./registro-page.component.css'],
})
export class RegistroPageComponent {
  public hide = false;
  public mensajeCorreo = false;
  private isValidEmail = /\S+@\S+\.\S+/;

  formRegistro = this.fb.group({
    nombre: ['', Validators.required],
    apellidos: ['', Validators.required],
    contrasena: ['', Validators.required],
    correo: ['', [Validators.required, Validators.pattern(this.isValidEmail)]],
    rol: [1],
    estado: [1],
  });

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService
  ) {}

  get form(): any {
    return this.formRegistro?.controls;
  }

  registrar() {
    const { nombre, apellidos, contrasena, correo, rol, estado } =
      this.formRegistro.value;

    if (this.formRegistro.valid) {
      this.authService
        .registrar(nombre!, apellidos!, contrasena!, correo!, rol!, estado!)
        .subscribe((response) => {
          if (response.mensaje === 'Correo existente, ingrese otro') {
            this.mensajeCorreo = true;
          } else {
            //TODO: Router usuario
          }
        });
    }
  }
}
