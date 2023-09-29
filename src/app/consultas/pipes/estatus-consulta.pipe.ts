import { Pipe, PipeTransform } from '@angular/core';
import { Consulta } from '../interfaces/consulta.interface';

@Pipe({
  name: 'estatusConsulta',
})
export class EstatusConsultaPipe implements PipeTransform {
  transform(consulta: Consulta): string {
    return consulta.estado === 0 ? 'Reservado' : 'Disponible';
  }
}
