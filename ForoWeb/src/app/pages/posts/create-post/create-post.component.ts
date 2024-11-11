import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { PostService } from '../../../core/services/posts/posts.service';
import { MaterialComponentModule } from '../../../shared/material-component.module';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../../core/services/auth/auth.service';  // Importa AuthService correctamente

@Component({
  selector: 'app-create-post',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MaterialComponentModule,
    CommonModule
  ],
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.scss']
})
export class CreatePostComponent {

  submitted = false;  // Indica si el formulario ha sido enviado


  postForm: FormGroup;

  constructor(private postService: PostService, private authService: AuthService) {
    // Inicializamos el formulario con las validaciones
    this.postForm = new FormGroup({
      title: new FormControl('', [Validators.required]),
      content: new FormControl('', [Validators.required]),
    });
  }

  onSubmit() {
    this.submitted = true;  // Marcar el formulario como enviado
    if (this.authService.isLoggedIn()) {  // Accede correctamente al servicio para comprobar el login
      if (this.postForm.valid) {
        const newPost = this.postForm.value;
        const userData = JSON.parse(localStorage.getItem('userData') || '{}'); // Obtener datos del usuario de localStorage
        newPost.authorEmail = userData.email; // Establecer el email del autor

        // Llamamos al servicio para crear el post
        this.postService.createPost(newPost).subscribe({
          next: (response) => {
            console.log('Post creado exitosamente:', response);
            this.postForm.reset();
            this.submitted = false;  // Resetear la bandera de envío
          },
          error: (error) => {
            console.error('Error al crear el post:', error);
          }
        });
      } else {
        console.error('El formulario es inválido');
      }
    } else {
      console.error('El usuario no está logueado');
      // Aquí puedes redirigir al usuario a la página de login si no está logueado.
    }
  }
}
