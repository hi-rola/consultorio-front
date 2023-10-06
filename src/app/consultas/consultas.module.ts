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
import { LoaderComponent } from '../loader/loader.component';
import { RegistraConsultaComponent } from './pages/agendar-consulta/agendar-consulta.component';
import { ActInfConsultaComponent } from './pages/act-inf-consulta/act-inf-consulta.component';
import { ConsultarComponent } from './pages/consultar/consultar.component';
import { InfPacienteComponent } from './components/inf-paciente/inf-paciente.component';
import { FormConsultarComponent } from './components/form-consultar/form-consultar.component';

@NgModule({
  declarations: [
    LayoutPageComponent,
    ConsultasComponent,
    CardConsultaComponent,
    FiltroComponent,
    LoaderComponent,

    //Pipes
    EstatusConsultaPipe,
    NombreDiaFiltroPipe,
    RegistraConsultaComponent,
    ActInfConsultaComponent,
    ConsultarComponent,
    InfPacienteComponent,
    FormConsultarComponent,
  ],
  imports: [CommonModule, ConsultasRoutingModule, MaterialModule, SharedModule],
})
export class ConsultasModule {}
