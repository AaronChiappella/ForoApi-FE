import { Component, EventEmitter, Input, LOCALE_ID, Output } from '@angular/core';
import { Post } from '../../core/models/post.model';
import { CommonModule, registerLocaleData } from '@angular/common';
import es from '@angular/common/locales/es'
import { PostsComponent } from '../posts/posts.component';

registerLocaleData(es);

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [
    CommonModule,PostsComponent
  ],
  providers:[
    {provide: LOCALE_ID, useValue:'es'}
  ],
  templateUrl: './post.component.html',
  styleUrl: './post.component.scss'
})
export class PostComponent {
  @Input({required: true}) post!: Post; 




}
