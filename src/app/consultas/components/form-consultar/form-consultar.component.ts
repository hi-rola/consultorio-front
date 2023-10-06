import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatAccordion } from '@angular/material/expansion';
import { ConsultasService } from '../../services/consultas.service';
import { FormBuilder } from '@angular/forms';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'consultas-form-consultar',
  templateUrl: './form-consultar.component.html',
  styleUrls: ['./form-consultar.component.css'],
})
export class FormConsultarComponent implements OnInit {
  @ViewChild(MatAccordion) accordion!: MatAccordion;
  @Input() public id_usuario!: string;
  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'top';
  public claseCaries: string[] = [];
  public gradoCaries: string[] = [];
  step = 0;

  form = this.fb.group({
    arcadaSupDer: this.fb.group({
      incisivo_central_sup_der_cla: '',
      incisivo_central_sup_der_gra: '',
      incisivo_lateral_sup_der_cla: '',
      incisivo_lateral_sup_der_gra: '',
      canino_sup_der_cla: '',
      canino_sup_der_gra: '',
      primer_premolar_sup_der_cla: '',
      primer_premolar_sup_der_gra: '',
      segundo_premolar_sup_der_cla: '',
      segundo_premolar_sup_der_gra: '',
      primer_molar_sup_der_cla: '',
      primer_molar_sup_der_gra: '',
      segundo_molar_sup_der_cla: '',
      segundo_molar_sup_der_gra: '',
      tercer_molar_sup_der_cla: '',
      tercer_molar_sup_der_gra: '',
    }),
    arcadaSupIzq: this.fb.group({
      incisivo_central_sup_izq_cla: '',
      incisivo_central_sup_izq_gra: '',
      incisivo_lateral_sup_izq_cla: '',
      incisivo_lateral_sup_izq_gra: '',
      canino_sup_izq_cla: '',
      canino_sup_izq_gra: '',
      primer_premolar_sup_izq_cla: '',
      primer_premolar_sup_izq_gra: '',
      segundo_premolar_sup_izq_cla: '',
      segundo_premolar_sup_izq_gra: '',
      primer_molar_sup_izq_cla: '',
      primer_molar_sup_izq_gra: '',
      segundo_molar_sup_izq_cla: '',
      segundo_molar_sup_izq_gra: '',
      tercer_molar_sup_izq_cla: '',
      tercer_molar_sup_izq_gra: '',
    }),
    arcadaInfDer: this.fb.group({
      incisivo_central_inf_der_cla: '',
      incisivo_central_inf_der_gra: '',
      incisivo_lateral_inf_der_cla: '',
      incisivo_lateral_inf_der_gra: '',
      canino_inf_der_cla: '',
      canino_inf_der_gra: '',
      primer_premolar_inf_der_cla: '',
      primer_premolar_inf_der_gra: '',
      segundo_premolar_inf_der_cla: '',
      segundo_premolar_inf_der_gra: '',
      primer_molar_inf_der_cla: '',
      primer_molar_inf_der_gra: '',
      segundo_molar_inf_der_cla: '',
      segundo_molar_inf_der_gra: '',
      tercer_molar_inf_der_cla: '',
      tercer_molar_inf_der_gra: '',
    }),
    arcadaInfIzq: this.fb.group({
      incisivo_central_inf_izq_cla: '',
      incisivo_central_inf_izq_gra: '',
      incisivo_lateral_inf_izq_cla: '',
      incisivo_lateral_inf_izq_gra: '',
      canino_inf_izq_cla: '',
      canino_inf_izq_gra: '',
      primer_premolar_inf_izq_cla: '',
      primer_premolar_inf_izq_gra: '',
      segundo_premolar_inf_izq_cla: '',
      segundo_premolar_inf_izq_gra: '',
      primer_molar_inf_izq_cla: '',
      primer_molar_inf_izq_gra: '',
      segundo_molar_inf_izq_cla: '',
      segundo_molar_inf_izq_gra: '',
      tercer_molar_inf_izq_cla: '',
      tercer_molar_inf_izq_gra: '',
      mensaje: '',
    }),
  });

  constructor(
    private consultasService: ConsultasService,
    private fb: FormBuilder,
    private _snackBar: MatSnackBar,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.claseCaries = this.consultasService.getCariesClases();
    this.gradoCaries = this.consultasService.getCariesGrados();
  }

  fijarStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }

  registrar() {
    const {
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
    } = this.form['controls'].arcadaSupDer.value;
    const {
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
    } = this.form['controls'].arcadaSupIzq.value;
    const {
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
    } = this.form['controls'].arcadaInfDer.value;
    const {
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
    } = this.form['controls'].arcadaInfIzq.value;

    this.consultasService
      .registrarDiagnostico(
        incisivo_central_sup_der_cla!,
        incisivo_central_sup_der_gra!,
        incisivo_lateral_sup_der_cla!,
        incisivo_lateral_sup_der_gra!,
        canino_sup_der_cla!,
        canino_sup_der_gra!,
        primer_premolar_sup_der_cla!,
        primer_premolar_sup_der_gra!,
        segundo_premolar_sup_der_cla!,
        segundo_premolar_sup_der_gra!,
        primer_molar_sup_der_cla!,
        primer_molar_sup_der_gra!,
        segundo_molar_sup_der_cla!,
        segundo_molar_sup_der_gra!,
        tercer_molar_sup_der_cla!,
        tercer_molar_sup_der_gra!,
        incisivo_central_sup_izq_cla!,
        incisivo_central_sup_izq_gra!,
        incisivo_lateral_sup_izq_cla!,
        incisivo_lateral_sup_izq_gra!,
        canino_sup_izq_cla!,
        canino_sup_izq_gra!,
        primer_premolar_sup_izq_cla!,
        primer_premolar_sup_izq_gra!,
        segundo_premolar_sup_izq_cla!,
        segundo_premolar_sup_izq_gra!,
        primer_molar_sup_izq_cla!,
        primer_molar_sup_izq_gra!,
        segundo_molar_sup_izq_cla!,
        segundo_molar_sup_izq_gra!,
        tercer_molar_sup_izq_cla!,
        tercer_molar_sup_izq_gra!,
        incisivo_central_inf_der_cla!,
        incisivo_central_inf_der_gra!,
        incisivo_lateral_inf_der_cla!,
        incisivo_lateral_inf_der_gra!,
        canino_inf_der_cla!,
        canino_inf_der_gra!,
        primer_premolar_inf_der_cla!,
        primer_premolar_inf_der_gra!,
        segundo_premolar_inf_der_cla!,
        segundo_premolar_inf_der_gra!,
        primer_molar_inf_der_cla!,
        primer_molar_inf_der_gra!,
        segundo_molar_inf_der_cla!,
        segundo_molar_inf_der_gra!,
        tercer_molar_inf_der_cla!,
        tercer_molar_inf_der_gra!,
        incisivo_central_inf_izq_cla!,
        incisivo_central_inf_izq_gra!,
        incisivo_lateral_inf_izq_cla!,
        incisivo_lateral_inf_izq_gra!,
        canino_inf_izq_cla!,
        canino_inf_izq_gra!,
        primer_premolar_inf_izq_cla!,
        primer_premolar_inf_izq_gra!,
        segundo_premolar_inf_izq_cla!,
        segundo_premolar_inf_izq_gra!,
        primer_molar_inf_izq_cla!,
        primer_molar_inf_izq_gra!,
        segundo_molar_inf_izq_cla!,
        segundo_molar_inf_izq_gra!,
        tercer_molar_inf_izq_cla!,
        tercer_molar_inf_izq_gra!,
        mensaje!,
        this.id_usuario
      )
      .subscribe((response) => {
        switch (response.msj) {
          case 'Diagnóstico registrado exitosamente':
            this.mostrarSnackBar(response.mensaje);
            this.router.navigate(['/boca-sana/consultas']);
            break;
          default:
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
}
