import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../interfaces/user';
import { Login } from '../interfaces/login';



@Injectable({
  providedIn: 'root'
})
export class UserService {


  private apiUrl = 'http://localhost:7000/api'; // This the base URL 

  userData?: User;

  constructor(private http: HttpClient) {}

    // Function to call Node.js endpoint


    register(user:User): Observable<any> {
      return this.http.post<any>(`${this.apiUrl}/register`,user);
    }


    signIn(login: Login): Observable<any> {
      return this.http.post<any>(`${this.apiUrl}/login`, login);

}
}

