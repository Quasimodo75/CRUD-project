import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Items } from '../interfaces/items';

@Injectable({
  providedIn: 'root',
})
export class CrudService {
  private apiUrl = 'http://localhost:7000/api'; // This the base URL

  constructor(private http: HttpClient) {}

  // Function to call Node.js endpoint

  create(items: Items): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/create`, items);
  }

  read(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/items`);
  }

  remove(id: string): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/items/${id}`);
  }
  update(items: Items, id: string): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}"/items/:${id}`, items);
  }
}
