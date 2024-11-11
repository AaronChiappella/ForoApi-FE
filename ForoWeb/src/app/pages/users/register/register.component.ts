import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { User } from '../../../core/models/classes.model';
import { UsersService } from '../../../core/services/users/users.service';
import { AuthService } from '../../../core/services/auth/auth.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from '../../../shared/interceptors/auth.interceptor';
import { MaterialComponentModule } from '../../../shared/material-component.module';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-register',
  standalone: true,
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  imports: [
    ReactiveFormsModule,
  ],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'] // Cambiado a 'styleUrls'
})
export class RegisterComponent {

  formulario: FormGroup;

  constructor(private authService: AuthService) {
    // Inicializa el formulario con validaciones
    this.formulario = new FormGroup({
      nickname: new FormControl('', [Validators.required, Validators.minLength(3)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(3)])
    });
  }

  onSubmit() {
    // Verificar si el formulario es válido
    if (this.formulario.valid) {
      const newUser: User = this.formulario.value;

      // Llamar a AuthService para manejar el registro
      this.authService.register(newUser).subscribe({
        next: (response) => {
          console.log('Usuario registrado exitosamente:', response);
          // Opcionalmente, reiniciar el formulario o navegar a otra página
          this.formulario.reset();
        },
        error: (error) => {
          console.error('Error durante el registro:', error);
        }
      });
    } else {
      console.error('El formulario es inválido');
    }
  }
}
