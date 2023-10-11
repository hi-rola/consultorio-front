import { Pipe, PipeTransform } from '@angular/core';
import { Consulta } from '../interfaces/consulta.interface';

@Pipe({
  name: 'estatusConsulta',
})
export class EstatusConsultaPipe implements PipeTransform {
  transform(consulta: Consulta): string {
    let estado = '';
    if (consulta.estado === 0) estado = 'Reservado';
    if (consulta.estado === 1) estado = 'Disponible';
    if (consulta.estado === 2) estado = 'Consultado';
    return estado;
  }
}
