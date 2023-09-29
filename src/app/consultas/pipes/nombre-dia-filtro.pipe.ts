import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nombreDiaFiltro',
})
export class NombreDiaFiltroPipe implements PipeTransform {
  dias = [
    'Lunes',
    'Martes',
    'Miércoles',
    'Jueves',
    'Viernes',
    'Sábado',
    'Domingo',
  ];
  transform(fecha: string): string {
    const numeroDia = new Date(fecha).getDay();
    return this.dias[numeroDia];
  }
}
