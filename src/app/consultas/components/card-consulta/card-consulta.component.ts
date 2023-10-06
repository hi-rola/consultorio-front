import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Consulta } from '../../interfaces/consulta.interface';

@Component({
  selector: 'consultas-card-consulta',
  templateUrl: './card-consulta.component.html',
  styleUrls: ['./card-consulta.component.css'],
})
export class CardConsultaComponent {
  @Input() public consulta!: Consulta;
  @Output() public emitConsulta = new EventEmitter<Consulta>();

  reservar(consulta: Consulta) {
    this.emitConsulta.emit(consulta);
  }
}
