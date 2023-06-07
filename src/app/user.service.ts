
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './models/user.model';

@Injectable(
    {
        providedIn: 'root'
      }
  )
  
    export class UserService {
  
    // private apiUrl = 'https://localhost:3000/users';
    private apiUrl = "http://localhost:3000/users/{id}";
    private apiUrlforPost = "http://localhost:3000/addUser"
    private apiUrlforPut = "http://localhost:3000/editUser/{id}"

    // private apiUrl = 'https://127.0.0.1:3000/users'

    constructor(private http: HttpClient) { }
    getUsers() {
      return this.http.get<any[]>('http://localhost:3000/users');
    }

    // getUser(id: number): Observable<User> {
    //   const url = `${this.apiUrl}/${id}`;
    //   return this.http.get<User>(url);
    // }
    
    //from


    getUser(id: number): Observable<User> {
      const url = `${this.apiUrl}/${id}`;
      return this.http.get<User>(url);
     }

    //to
    
    updateUser(user: User): Observable<User> {
      const url = `${this.apiUrl}/${user.id}`;
      return this.http.put<User>(this.apiUrlforPut, user);
    }

    // addUser(user: any): Observable<any> {
    //       return this.http.post<any>(this.apiUrl, user);
    //     }

    addUser(user: User): Observable<User> {
      return this.http.post<User>(this.apiUrlforPost, user);
    }

  }