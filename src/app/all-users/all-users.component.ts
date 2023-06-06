
import { Component, OnInit, TemplateRef } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { User } from '../models/user.model';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import Swal from 'sweetalert2';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { FilterPipe } from '../filter.pipe';
import { PaginationConfig } from 'ngx-bootstrap/pagination';




@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.css'],
})
export class AllUsersComponent implements OnInit {
  // users!: any[];
  users: User[] = [];
  selectedUser!: User;
  modalRef!: BsModalRef;
  searchForm: FormGroup;
  filteredUsers!: User[];
  searchQuery: string = '';
  paginationForm: FormGroup; // Reactive form for pagination

  paginatedUsers: any[] = [];
  totalItems = 0;
  currentPage = 1;
  itemsPerPage = 5;


  // pageSize = 10; // Number of users to display per page



  constructor(private userService: UserService,
     private modalService: BsModalService,
     private router: Router,
     private paginationConfig: PaginationConfig,
     private formBuilder: FormBuilder) {

    // this.totalItems = this.users.length;
  //  this.paginationConfig.pageSize = this.pageSize;

  this.paginationForm = this.formBuilder.group({
    pageSize: [5], // Default page size
    // currentPage: [1] // Default current page
  });

    this.searchForm = new FormGroup({
      searchQuery: new FormControl('')
    });
   }

  //  pageChanged(event: any): void {
  //   this.currentPage = event.page;
  // }
  
  
  
  ngOnInit() {
    this.userService.getUsers().subscribe(users => {
      this.users = users;
      this.filteredUsers = users;
      this.totalItems = this.users.length;
      this.paginateUsers();

    });
    this.searchForm.get('searchQuery')?.valueChanges.subscribe(() => {
      this.search();
    });

    // this.applyPagination();
    
  }
  paginateUsers(): void {
    const startIndex = (this.currentPage - 1) * this.getPageSize();
    const endIndex = startIndex + this.getPageSize();
    this.paginatedUsers = this.users.slice(startIndex, endIndex);
    // this.paginatedUsers = this.users.slice((this.currentPage - 1) * this.itemsPerPage, this.currentPage * this.itemsPerPage);
  }

  // applyPagination(): void {
  //   const pageSize = this.paginationForm.get('pageSize')?.value;
  //   const startIndex = (this.currentPage - 1) * pageSize;
  //   const endIndex = startIndex + pageSize;
  
  //   this.paginatedUsers = this.users.slice(startIndex, endIndex);
  // }
  
  // pageChanged(event: any): void {
  //   this.paginationForm.patchValue({
  //     currentPage: event.page
  //   });
  //   this.paginateUsers();
  // }
  pageChanged(event: any): void {
    this.currentPage = event.page;
    this.paginateUsers();
  }
  

  getPageSize(): number {
    return this.paginationForm.value.pageSize;
  }

  getCurrentPage(): number {
    return this.paginationForm.value.currentPage;
  }

  onPageSizeChange(): void {
    this.paginateUsers();
  }

  // onPageSizeChange(): void {
  //   this.itemsPerPage = this.paginationForm.value.pageSize;
  //   this.paginateUsers();
  // }
  
  search(): void {
    const searchTerm = this.searchForm.get('searchQuery')?.value.toLowerCase();
    this.filteredUsers = this.users.filter(user => {
      const name = user.name.toLowerCase();
      const email = user.email.toLowerCase();
      return name.includes(searchTerm) || email.includes(searchTerm);
    });
  }
 
  openModal(template: any, user: User) {
    this.selectedUser = user;
    this.modalRef = this.modalService.show(template);
  }
  // openModal(template: TemplateRef<any>, user: User) {
  //   this.selectedUser = user;
  //   this.modalRef = this.modalService.show(template);
  // }

  closeModal() {
    this.modalRef.hide();
  }


  editUser(user: User) {
    // Redirect to the edit user page with the user ID
    this.router.navigate(['/editUser', user.id]);
  }

  deleteUser(user: User) {
    Swal.fire({
      title: 'Confirm Delete',
      text: 'Are you sure you want to delete this user?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Delete'
    }).then((result) => {
      if (result.isConfirmed) {
        // Delete the user from the list
        const index = this.users.indexOf(user);
        if (index > -1) {
          this.users.splice(index, 1);
        }
        // Show success message
        Swal.fire('Deleted!', 'User has been deleted.', 'success');
      }
    });
  }
  

}















































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










  // ngOnInit(): void {
  //   this.userService.getUsers().subscribe(users => {
  //     this.users = users;
  //   });
  // }

  // ngOnInit() {
  //     this.userService.getUsers().subscribe(
  //       (res:any)=>{
  //         console.log(res);
  //         this.users = res
  //       },
  //       (err:any)=>{
  //         console.log(err);
  //       }
  //     )
  //   }


  // ngOnInit() {
  //   this.userService.getUsers().subscribe((users: any[]) => {
  //     this.users = users;
  //   });
  // }

//Working code  below
  // ngOnInit() {
  //   this.userService.getUsers().subscribe(
  //     (res:any)=>{
  //       console.log(res);
  //       this.users = res
  //     },
  //     (err:any)=>{
  //       console.log(err);
  //     }
  //   )
  // }

  // editUser(id:number  )
  // {

  // }
  // deleteUser(id: number) {
  //   this.userService.deleteUser(id).subscribe(() => {
  //     this.users = this.users.filter(user => user.id !== id);
  //   });
  // }
