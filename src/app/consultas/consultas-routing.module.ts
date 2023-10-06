import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { ConsultasComponent } from './pages/consultas/consultas.component';
import { RegistraConsultaComponent } from './pages/agendar-consulta/agendar-consulta.component';
import { ActInfConsultaComponent } from './pages/act-inf-consulta/act-inf-consulta.component';
import { ConsultarComponent } from './pages/consultar/consultar.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutPageComponent,
    children: [
      {
        path: 'consultas',
        component: ConsultasComponent,
      },
      {
        path: 'registrar-consulta',
        component: RegistraConsultaComponent,
      },
      {
        path: 'actualizar-informacion/:id',
        component: ActInfConsultaComponent,
      },
      {
        path: 'consultar/:id',
        component: ConsultarComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConsultasRoutingModule {}
