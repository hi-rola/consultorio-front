import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'auth-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css'],
})
export class LoginPageComponent {
  public hide = true;
  public mensajeLogin = false;
  private isValidEmail = /\S+@\S+\.\S+/;

  formLogin = this.fb.group({
    correo: [
      'paco3@gmail.com',
      [Validators.required, Validators.pattern(this.isValidEmail)],
    ],
    contrasena: ['paco3', Validators.required],
  });

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService
  ) {}

  get form(): any {
    return this.formLogin?.controls;
  }

  login() {
    const { correo, contrasena } = this.formLogin.value;
    this.authService.login(correo!, contrasena!).subscribe((response) => {
      if (response.mensaje === 'Correo y/o contraseña invalidos') {
        this.mensajeLogin = true;
      } else {
        //TODO: Router user
      }
    });
  }
}
