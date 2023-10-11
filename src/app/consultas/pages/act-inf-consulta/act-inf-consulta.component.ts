import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';
import { ConsultasService } from '../../services/consultas.service';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { Consulta } from '../../interfaces/consulta.interface';

@Component({
  selector: 'app-act-inf-consulta',
  templateUrl: './act-inf-consulta.component.html',
  styleUrls: ['./act-inf-consulta.component.css'],
})
export class ActInfConsultaComponent implements OnInit {
  public id_consulta!: number;
  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'top';

  formConsulta = this.fb.group({
    fecha: ['', Validators.required],
    hora_inicio: ['', Validators.required],
    hora_fin: ['', Validators.required],
    estado: [''],
  });

  constructor(
    private fb: FormBuilder,
    private _snackBar: MatSnackBar,
    private datePipe: DatePipe,
    private consultasService: ConsultasService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.id_consulta = this.activatedRoute.snapshot.params['id'];

    this.consultasService
      .getConsultaById(this.id_consulta)
      .subscribe((response) => this.setValueFormCconsulta(response));
  }

  setValueFormCconsulta(response: Consulta) {
    this.formConsulta.setValue({
      fecha: response.fecha!,
      hora_inicio: response.hora_inicio!,
      hora_fin: response.hora_fin!,
      estado: response.estado?.toString()!,
    });
  }

  get form(): any {
    return this.formConsulta?.controls;
  }

  actualizarInformacion() {
    if (this.formConsulta.valid) {
      const { fecha, hora_inicio, hora_fin, estado } = this.formConsulta.value;

      let fechaTransform = this.datePipe.transform(fecha, 'yyyy-MM-dd')!;

      this.consultasService
        .updateConsulta(
          fechaTransform,
          hora_inicio!,
          hora_fin!,
          estado!,
          this.id_consulta
        )
        .subscribe((response) => {
          switch (response.mensaje) {
            case 'Información actualizada exitosamente':
              this.mostrarSnackBar(response.mensaje);
              this.router.navigate(['/admin/consultas']);
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
