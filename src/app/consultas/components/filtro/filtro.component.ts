import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'consultas-filtro',
  templateUrl: './filtro.component.html',
  styleUrls: ['./filtro.component.css'],
})
export class FiltroComponent {
  @Output() public emitFecha = new EventEmitter<string>();

  public fechasFiltro: string[] = [
    '2023-09-25',
    '2023-09-26',
    '2023-09-27',
    '2023-09-28',
    '2023-09-29',
    '2023-09-30',
  ];

  filtrar(fecha: string) {
    this.emitFecha.emit(fecha);
  }
}
