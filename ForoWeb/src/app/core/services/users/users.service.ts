import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { endpoint } from '../../../shared/apis/endpoints';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }

  register(userData: any): Observable<any> {
    return this.http.post(endpoint.USER_REGISTER, userData);
  }

  login(userData: any): Observable<any> {
    return this.http.post(endpoint.USER_LOGIN, userData);
    
  }
}
