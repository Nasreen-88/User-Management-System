// import { Component, OnInit } from '@angular/core';
// import { UserService } from '../user.service';
// import { User } from '../user.interface';




// @Component({
//   selector: 'app-all-users',
//   templateUrl: './all-users.component.html',
//   styleUrls: ['./all-users.component.css']
// })
// export class AllUsersComponent {

//   users: User[] = [];

//   constructor(private userService: UserService) {}

//   types: { label: string; value: string }[] = [
//     { label: 'Admin', value: 'admin' },
//     { label: 'Manager', value: 'manager' },
//     { label: 'User', value: 'user' }
//   ];

//   ngOnInit(): void {
//     this.getUsers();
//   }

//   getUsers(): void {
//     this.userService.getUsers().subscribe(users => {
//       this.users = users;
//     });
//   }

//   deleteUser(userId: number): void {
//     if (confirm('Are you sure you want to delete this user?')) {
//       this.userService.deleteUser(userId).subscribe(() => {
//         this.users = this.users.filter(user => user.id !== userId);
//       });
//     }
//   }

//   // users: User[] =[
//   //   {
//   //     name: "john",
//   //     email: "john@gmail.com",
//   //     phone: 1223456,
//   //     experience : 5,
//   //     type: "Admin"
//   //   },

//   //   {
//   //     name: "john",
//   //     email: "john@gmail.com",
//   //     phone: 1223456,
//   //     experience : 5,
//   //     type: "Manager"
//   //   },
//   //   {
//   //     name: "john",
//   //     email: "john@gmail.com",
//   //     phone: 1223456,
//   //     experience : 5,
//   //     type: "user"
//   //   },

//   // ];

//   // types: { label: string; value: string }[] = [
//   //   { label: 'Admin', value: 'admin' },
//   //   { label: 'Manager', value: 'manager' },
//   //   { label: 'User', value: 'user' }
//   // ];

//   // constructor()
//   // {

//   // }

//   // viewUser(user :User): void {
//   //   console.log("User viewed");
    
//   // }

//   //  deleteUser(user :User): void {

//   //   console.log("User deleted");

//   // }

// }


import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user.interface';

@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.css']
})
export class AllUsersComponent implements OnInit {
  users: any[] = [];

  constructor(private userService: UserService) { }


  // ngOnInit() {
  //   this.userService.getUsers().subscribe((users: any[]) => {
  //     this.users = users;
  //   });
  // }


  ngOnInit() {
    this.userService.getUsers().subscribe(
      (res:any)=>{
        console.log(res);
        this.users = res
      },
      (err:any)=>{
        console.log(err);
      }
    )
  }

  editUser(id:number  )
  {

  }
  deleteUser(id: number) {
    this.userService.deleteUser(id).subscribe(() => {
      this.users = this.users.filter(user => user.id !== id);
    });
  }
}