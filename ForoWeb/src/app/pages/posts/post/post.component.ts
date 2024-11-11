import { Component, EventEmitter, Input, LOCALE_ID, Output } from '@angular/core';
import { Post } from '../../../core/models/classes.model';
import { CommonModule, registerLocaleData } from '@angular/common';
import es from '@angular/common/locales/es'
import { PostsComponent } from '../posts.component';
import { MaterialComponentModule } from '../../../shared/material-component.module';

registerLocaleData(es);

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [
    CommonModule,PostsComponent,
    MaterialComponentModule
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
