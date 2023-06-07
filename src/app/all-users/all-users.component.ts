
import { Component, OnInit, TemplateRef } from '@angular/core';
import { UserService } from '../user.service';
import { ActivatedRoute, Router } from '@angular/router';
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
  totalItems = 50;
  // currentPage = 1;
  itemsPerPage = 5;

  // --------------------
  pageSize: number = 10; // Number of users to display per page
  currentPage: number = 1; // Current page number

  // Method to handle page change
  onPageChange(event: any): void {
    this.currentPage = event.page;
  }

 // Method to get the current page users
  getCurrentPageUsers(): User[] {
    const startIndex = (this.currentPage - 1) * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    return this.users.slice(startIndex, endIndex);
  }

  //---------------------

  constructor(private userService: UserService,
    private modalService: BsModalService,
    private router: Router,
    private paginationConfig: PaginationConfig,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute) {


    this.paginationForm = this.formBuilder.group({
      pageSize: [5], // Default page size
    });

    this.searchForm = new FormGroup({
      searchQuery: new FormControl('')
    });
  }

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


  }
  paginateUsers(): void {
    const startIndex = (this.currentPage - 1) * this.getPageSize();
    const endIndex = startIndex + this.getPageSize();
    this.paginatedUsers = this.users.slice(startIndex, endIndex);
  }

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


  closeModal() {          
    this.modalRef.hide();
  }

  editUser(user: User): void  {
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
        // Showing success message
        Swal.fire('Deleted!', 'User has been deleted.', 'success');
      }
    });
  }


}






















