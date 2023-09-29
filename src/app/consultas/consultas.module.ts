import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { ConsultasComponent } from './pages/consultas/consultas.component';
import { ConsultasRoutingModule } from './consultas-routing.module';
import { MaterialModule } from '../material/material.module';
import { SharedModule } from '../shared/shared.module';
import { CardConsultaComponent } from './components/card-consulta/card-consulta.component';
import { EstatusConsultaPipe } from './pipes/estatus-consulta.pipe';
import { NombreDiaFiltroPipe } from './pipes/nombre-dia-filtro.pipe';
import { FiltroComponent } from './components/filtro/filtro.component';

@NgModule({
  declarations: [
    LayoutPageComponent,
    ConsultasComponent,
    CardConsultaComponent,
    FiltroComponent,

    //Pipes
    EstatusConsultaPipe,
    NombreDiaFiltroPipe,
  ],
  imports: [CommonModule, ConsultasRoutingModule, MaterialModule, SharedModule],
})
export class ConsultasModule {}
