import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { endpoint } from '../../../shared/apis/endpoints';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, private router: Router) { }

  register(userData: any): Observable<any> {
    return this.http.post(endpoint.USER_REGISTER, userData);
  }

  login(userData: any): Observable<any> {
    return this.http.post(endpoint.USER_LOGIN, userData);
    
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('token'); // Devuelve true si existe un token
  }


  logout() {
    localStorage.removeItem('token'); // Elimina el token al cerrar sesión
  }

}
