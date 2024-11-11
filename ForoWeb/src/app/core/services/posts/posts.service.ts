// shared/services/post.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { endpoint } from '../../../shared/apis/endpoints';
import { BaseResponse } from '../../../shared/models/base-response';
import { Post } from '../../models/classes.model';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  constructor(private http: HttpClient) {}

  getPosts(): Observable<BaseResponse<Post[]>> {
    return this.http.get<BaseResponse<Post[]>>(endpoint.LIST_POST);
  }

  createPost(postData: any): Observable<any> {
    return this.http.post(endpoint.POST_REGISTER, postData);
  }

  editPost(postId: number, postData: any): Observable<any> {
    return this.http.put(`${endpoint.POST_EDIT}/${postId}`, postData);
  }

  deletePost(postId: number): Observable<any> {
    return this.http.delete(`${endpoint.POST_REMOVE}/${postId}`);
  }
}
