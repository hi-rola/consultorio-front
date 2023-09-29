import { Component, OnInit } from '@angular/core';
import { ConsultasService } from '../../services/consultas.service';
import { Consulta } from '../../interfaces/consulta.interface';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';

@Component({
  selector: 'app-consultas',
  templateUrl: './consultas.component.html',
  styleUrls: ['./consultas.component.css'],
})
export class ConsultasComponent implements OnInit {
  public consultas: Consulta[] = [];
  public id_usuario!: number;
  public fechaActual!: string;

  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'top';

  constructor(
    private consultasService: ConsultasService,
    private _snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.id_usuario = this.getUser();
    this.fechaActual = this.consultasService.getFechaActualConsultaFiltro();
    this.getConsultasPorFecha();
  }

  reservarConsulta(consulta: Consulta) {
    this.consultasService
      .reservarConsulta(this.id_usuario, consulta.id_consulta)
      .subscribe((response) => {
        if (response === true) {
          this.getConsultasPorFecha();
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

  filtrar(fecha: string) {
    this.consultasService.getConsultasPorFecha(fecha).subscribe((response) => {
      this.consultas = response;
    });
  }

  //TODO: Mover a servicio de usuario
  getUser(): number {
    return Number(
      localStorage
        .getItem('user')
        ?.substring(0, localStorage.getItem('user')?.indexOf(','))
    );
  }
}
