import { Component, OnInit } from '@angular/core';
import { Post } from '../../core/models/post.model';
import { PostService } from '../../core/services/posts/posts.service';
import { BaseResponse } from '../../shared/models/base-response';
import { PostComponent } from "../post/post.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-posts',
  standalone: true,
  imports: [PostComponent, CommonModule],
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.scss'
})
export class PostsComponent implements OnInit {
  posts: Post[] = [];
  errorMessage: string | null = null;

  constructor(private postService: PostService) {}

  ngOnInit() {
      this.loadPosts();
  }

  loadPosts() {
      this.postService.getPosts().subscribe({
          next: (response: BaseResponse<Post[]>) => {
            console.log(response);
            
              if (response.isSuccess) {
                  this.posts = response.data; // Asignar los datos
              } else {
                  this.errorMessage = response.message; // Manejar el error
              }
          },
          error: (err) => {
              this.errorMessage = "Error al cargar los posts.";
              console.error(err);
          }
      });
  }
}