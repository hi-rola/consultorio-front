import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';
import { ConsultasService } from '../../services/consultas.service';
import { Router } from '@angular/router';

@Component({
  selector: 'consultas-agendar-consulta',
  templateUrl: './agendar-consulta.component.html',
  styleUrls: ['./agendar-consulta.component.css'],
})
export class RegistraConsultaComponent {
  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'top';

  formAgendarConsulta = this.fb.group({
    fecha: ['', Validators.required],
    hora_inicio: ['2:00 PM', Validators.required],
    hora_fin: ['3:00 PM', Validators.required],
    estado: [1],
  });

  constructor(
    private fb: FormBuilder,
    private _snackBar: MatSnackBar,
    private datePipe: DatePipe,
    private consultasService: ConsultasService,
    private router: Router
  ) {}

  get form(): any {
    return this.formAgendarConsulta?.controls;
  }

  registrarConsulta() {
    if (this.formAgendarConsulta.valid) {
      const { fecha, hora_inicio, hora_fin, estado } =
        this.formAgendarConsulta.value;

      let fechaTransform = this.datePipe.transform(fecha, 'yyyy-MM-dd')!;

      this.consultasService
        .registrarConsulta(fechaTransform, hora_inicio!, hora_fin!, estado!)
        .subscribe((response) => {
          switch (response.mensaje) {
            case 'Consulta registrada exitosamente':
              this.mostrarSnackBar(response.mensaje);
              this.router.navigate(['/boca-sana/consultas']);
              break;
            case 'Horario no disponible, ingrese otro hora de inicio y fin':
              this.mostrarSnackBar(response.mensaje);
              break;
            default:
              this.mostrarSnackBar(
                '¡Problemas al procesar la solicitud, intentelo más tarde!'
              );
          }
        });
    }
  }

  mostrarSnackBar(mensaje: string) {
    this._snackBar.open(mensaje, '', {
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
    });
  }
}
