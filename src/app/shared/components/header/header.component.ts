import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../auth/services/auth.service';
import { AuthResponse } from 'src/app/auth/interfaces/AuthResponse.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'shared-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {}

  get usuario(): AuthResponse | undefined {
    return this.authService.currentUsuario;
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/auth/login']);
  }
}
