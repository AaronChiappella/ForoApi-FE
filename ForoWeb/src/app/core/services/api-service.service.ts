import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../envirotments/envirotment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  get<T>(url: string, headers?: HttpHeaders): Observable<T> {
    return this.http.get<T>(`${this.baseUrl}/${url}`);
  }

  post<T>(url: string, data: any, headers?: HttpHeaders): Observable<T> {
    return this.http.post<T>(`${this.baseUrl}/${url}`, data);
  }

  // otros métodos: put, delete, etc.
}
