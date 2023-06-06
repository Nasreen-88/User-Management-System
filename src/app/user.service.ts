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


//2.
// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs';
// import { User } from './models/user.model';


// @Injectable(
//   {
//       providedIn: 'root'
//     }
// )

// export class UserService {
//   private apiUrl = 'http://localhost:3000/users'; // Replace with your API endpoint URL

//   constructor(private http: HttpClient) { }
//   getUsers() {
//          return this.http.get("http://localhost:3000/users");
//        }

//   // getUsers(): Observable<User[]> {
//   //   return this.http.get<User[]>(this.apiUrl);
//   // }

//   getUserById(id: number): Observable<User> {
//     const url = `${this.apiUrl}/${id}`;
//     return this.http.get<User>(url);
//   }
// }





// export class UserService {
//   private apiUrl = 'https://jsonplaceholder.typicode.com/users';

//   constructor(private http: HttpClient) { }

//   getUsers() {
//     return this.http.get("https://jsonplaceholder.typicode.com/users");
//   }

//   getUserById(id: number): Observable<any> {
//     return this.http.get<any>(`${this.apiUrl}/${id}`);
//   }

//   addUser(user: any): Observable<any> {
//     return this.http.post<any>(this.apiUrl, user);
//   }

//   updateUser(id: number, user: any): Observable<any> {
//     return this.http.put<any>(`${this.apiUrl}/${id}`, user);
//   }

//   deleteUser(id: number): Observable<any> {
//     return this.http.delete<any>(`${this.apiUrl}/${id}`);
//   }
// }

//3.

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
      return this.http.put<User>(url, user);
    }

    // addUser(user: any): Observable<any> {
    //       return this.http.post<any>(this.apiUrl, user);
    //     }

    addUser(user: User): Observable<User> {
      return this.http.post<User>(this.apiUrlforPost, user);
    }

  }