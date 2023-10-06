import { Component, Input, OnInit } from '@angular/core';
import { InformacionUsuarioConsulta } from '../../interfaces/consulta.interface';

@Component({
  selector: 'consultas-inf-paciente',
  templateUrl: './inf-paciente.component.html',
  styleUrls: ['./inf-paciente.component.css'],
})
export class InfPacienteComponent {
  @Input() public informacionUsuarioConsulta!: InformacionUsuarioConsulta;
}
