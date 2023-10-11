import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Consulta } from 'src/app/consultas/interfaces/consulta.interface';

@Component({
  selector: 'usuarios-card-consulta',
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
