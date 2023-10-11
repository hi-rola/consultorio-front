import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Error404PageComponent } from './pages/error404-page/error404-page.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MaterialModule } from '../material/material.module';

import { EstatusConsultaPipe } from '../consultas/pipes/estatus-consulta.pipe';
import { NombreDiaFiltroPipe } from '../consultas/pipes/nombre-dia-filtro.pipe';

@NgModule({
  declarations: [
    Error404PageComponent,
    HeaderComponent,
    FooterComponent,
    EstatusConsultaPipe,
    NombreDiaFiltroPipe,
  ],
  imports: [CommonModule, MaterialModule],
  exports: [
    Error404PageComponent,
    HeaderComponent,
    FooterComponent,
    EstatusConsultaPipe,
    NombreDiaFiltroPipe,
  ],
})
export class SharedModule {}
