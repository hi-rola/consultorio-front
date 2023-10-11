import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsuariosRoutingModule } from './usuarios-routin.module';
import { MaterialModule } from '../material/material.module';
import { SharedModule } from '../shared/shared.module';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { ConsultasComponent } from '../usuarios/pages/consultas/consultas.component';
import { CardConsultaComponent } from './components/card-consulta/card-consulta.component';
import { FiltroComponent } from './components/filtro/filtro.component';

@NgModule({
  declarations: [
    LayoutPageComponent,
    ConsultasComponent,
    CardConsultaComponent,
    FiltroComponent,
  ],
  imports: [CommonModule, UsuariosRoutingModule, MaterialModule, SharedModule],
})
export class UsuariosModule {}
