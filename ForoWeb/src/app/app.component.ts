import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { PostsComponent } from './pages/posts/posts.component';
import { RegisterComponent } from './pages/users/register/register.component';
import { LoginComponent } from './pages/users/login/login.component';
import { routes } from './app.routes';
import { LayoutComponent } from "./shared/components/layout/layout.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule, // Aquí es donde se configuran las rutas
    ReactiveFormsModule,
    RouterOutlet,
    LayoutComponent,
],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']  // Cambia 'styleUrl' a 'styleUrls'
})
export class AppComponent {
  title = 'ForoWeb';
}
