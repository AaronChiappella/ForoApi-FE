import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../../core/services/auth/auth.service';
import { Router } from '@angular/router';  // Importa Router para la navegación

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  formulario: FormGroup;

  constructor(private authService: AuthService, private router: Router) {
    // Inicializa el formulario con validaciones
    this.formulario = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(3)])
    });
  }

  onSubmit() {
    // Verifica si el formulario es válido
    if (this.formulario.valid) {
      const user = this.formulario.value;

      // Llama al servicio AuthService para iniciar sesión
      this.authService.login(user).subscribe({
        next: (response) => {
          console.log('Usuario logueado exitosamente:', response);
          // Después del login exitoso, redirige al layout
          this.router.navigate(['/layout']);  // Asegúrate de que '/layout' sea la ruta correcta para tu layout
          
          // Opcionalmente, puedes restablecer el formulario
          this.formulario.reset();
        },
        error: (error) => {
          console.error('Error durante el inicio de sesión:', error);
        }
      });
    } else {
      console.error('Formulario inválido');
    }
  }

}
