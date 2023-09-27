import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { RegistroPageComponent } from './pages/registro-page/registro-page.component';
import { AuthRoutinRoutingModule } from './auth-routin-routing.module';
import { MaterialModule } from '../material/material.module';

@NgModule({
  declarations: [
    LayoutPageComponent,
    LoginPageComponent,
    RegistroPageComponent,
  ],
  imports: [CommonModule, AuthRoutinRoutingModule, MaterialModule],
})
export class AuthModule {}
