import { Component, OnInit } from '@angular/core';
import {
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
  MatSnackBar,
} from '@angular/material/snack-bar';
import { Consulta } from 'src/app/consultas/interfaces/consulta.interface';
import { ConsultasService } from 'src/app/consultas/services/consultas.service';
import { AuthService } from '../../../auth/services/auth.service';
import { AuthResponse } from 'src/app/auth/interfaces/AuthResponse.interface';

@Component({
  selector: 'usuarios-consultas',
  templateUrl: './consultas.component.html',
  styleUrls: ['./consultas.component.css'],
})
export class ConsultasComponent implements OnInit {
  public consultas: Consulta[] = [];
  public consultasHistorial: Consulta[] = [];
  public id_usuario!: number;
  public fechaActual!: string;

  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'top';

  constructor(
    private consultasService: ConsultasService,
    private _snackBar: MatSnackBar,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.id_usuario = this.usuario?.id_usuario!;
    this.fechaActual = this.consultasService.getFechaActualConsultaFiltro();
    this.getConsultasPorFecha();
    this.getConsultasPorUsuario();
  }

  get usuario(): AuthResponse | undefined {
    return this.authService.currentUsuario;
  }

  reservarConsulta(consulta: Consulta) {
    this.consultasService
      .reservarConsultaUsuario(this.id_usuario, consulta.id_consulta!)
      .subscribe((response) => {
        if (response === true) {
          this.getConsultasPorFecha();
          this.getConsultasPorUsuario();
          this.mostrarSnackBar('¡Consulta reservada exitosamente!');
        } else {
          this.mostrarSnackBar(
            '¡Problemas al procesar la solicitud, intentelo más tarde!'
          );
        }
      });
  }

  mostrarSnackBar(mensaje: string) {
    this._snackBar.open(mensaje, '', {
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
    });
  }

  getConsultasPorFecha() {
    this.consultasService
      .getConsultasPorFecha(this.fechaActual)
      .subscribe((response) => {
        this.consultas = response;
      });
  }

  getConsultasPorUsuario() {
    this.consultasService
      .getConsultasPorIdUsuario(this.id_usuario)
      .subscribe((response) => {
        this.consultasHistorial = response;
      });
  }

  filtrar(fecha: string) {
    this.consultasService.getConsultasPorFecha(fecha).subscribe((response) => {
      this.consultas = response;
    });
  }
}
