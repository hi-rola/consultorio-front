import { Component, EventEmitter, OnInit, Output } from '@angular/core';
@Component({
  selector: 'usuarios-consultas-filtro',
  templateUrl: './filtro.component.html',
  styleUrls: ['./filtro.component.css'],
})
export class FiltroComponent implements OnInit {
  @Output() public emitFecha = new EventEmitter<string>();

  public fechasFiltro: string[] = [];

  ngOnInit(): void {
    this.fechasFiltro = this.getSemanaFiltro();
  }

  filtrar(fecha: string) {
    this.emitFecha.emit(fecha);
  }

  // Se obtienen las fechas de la semana actual
  getSemanaFiltro(): string[] {
    const fechaActual = new Date();
    let semana: string[] = [];

    for (let i = 1; i <= 7; i++) {
      let numeroDia = fechaActual.getDate() - fechaActual.getDay() + i;
      let fecha = new Date(fechaActual.setDate(numeroDia))
        .toISOString()
        .slice(0, 10);
      semana.push(fecha);
    }

    return semana;
  }
}
