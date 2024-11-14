import { Component } from '@angular/core';
import { MaterialComponentModule } from '../../material-component.module';
import { AuthService } from '../../../core/services/auth/auth.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    MaterialComponentModule,
    CommonModule
],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  constructor(private authService: AuthService, private router: Router, private snackBar: MatSnackBar) { }

  isAuthenticated: boolean = this.authService.isLoggedIn();


handleLogout() {
  try {
    this.authService.logout();
    console.log('Logged out successfully');
  } catch (error) {
    console.error('Logout failed', error);
    this.snackBar.open('Logout failed, please try again.', 'Close', { duration: 3000 });
  }
}

handleProfile() {
  try {
    this.router.navigate(['/layout/profile']); // Ruta corregida
      } catch (error) {
    console.error('Navigation failed', error);
    this.snackBar.open('User settings failed. Please try again later.', 'Close', { duration: 3000 });
  }
}


handleLogin() {
  try {
    this.router.navigate(['/login']);
  } catch (error) {
    console.error('Login failed', error);
    this.snackBar.open('Login failed, please try again.', 'Close', { duration: 3000 });
  }
}
  

}
