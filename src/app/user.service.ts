// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs';
// import { User } from './user.interface';

// @Injectable({
//   providedIn: 'root'
// })
// export class UserService {

//   private apiUrl = 'https://jsonplaceholder.typicode.com/users'; 

//   constructor(private http: HttpClient) {}

//   getUsers(): Observable<User[]> {
//     return this.http.get<User[]>(this.apiUrl);
//   }

//   getUserById(userId: number): Observable<User> {
//     const url = `${this.apiUrl}/${userId}`;
//     return this.http.get<User>(url);
//   }

//   addUser(user: User): Observable<User> {
//     return this.http.post<User>(this.apiUrl, user);
//   }

//   updateUser(userId: number, user: User): Observable<User> {
//     const url = `${this.apiUrl}/${userId}`;
//     return this.http.put<User>(url, user);
//   }

//   deleteUser(userId: number): Observable<any> {
//     const url = `${this.apiUrl}/${userId}`;
//     return this.http.delete(url);
//   }
// }



import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable(
  {
      providedIn: 'root'
    }
)
export class UserService {
  private apiUrl = 'https://jsonplaceholder.typicode.com/users';

  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get("https://jsonplaceholder.typicode.com/users");
  }

  getUserById(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  addUser(user: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, user);
  }

  updateUser(id: number, user: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${id}`, user);
  }

  deleteUser(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }
}
