import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PostComponent } from "./pages/post/post.component";
import { CommonModule } from '@angular/common';
import { PostsComponent } from "./pages/posts/posts.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    CommonModule,  
    PostsComponent,
    
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'ForoWeb';

 

  
};



