import { Component } from '@angular/core';
import { FooterComponent } from "../footer/footer.component";
import { HeaderComponent } from "../header/header.component";
import { SidebarComponent } from "../sidebar/sidebar/sidebar.component";
import { PostsComponent } from '../../../pages/posts/posts.component';
import { CreatePostComponent } from "../../../pages/posts/create-post/create-post.component";
import { AuthService } from '../../../core/services/auth/auth.service';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [
    FooterComponent,
    HeaderComponent,
    SidebarComponent,
    PostsComponent,
    CreatePostComponent
],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent {

constructor(private authService: AuthService ){ }

isLogedIn = this.authService.isLoggedIn();


}
