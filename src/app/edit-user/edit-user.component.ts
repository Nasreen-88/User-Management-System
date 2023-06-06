import { Component,OnInit  } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../user.service';
import { User } from '../models/user.model';


@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit{

  editUserForm!: FormGroup;
  userId!: number;
  user!: User;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService
  ) { }

  // ngOnInit(): void {
  //   this.userId = +this.route.snapshot.paramMap.get('id')!;
  //   this.userService.getUser(this.userId).subscribe(user => {
  //     this.editUserForm.patchValue(user);
  //   });
  // }
  

  // ngOnInit(): void {
  //   this.editUserForm = this.formBuilder.group({
  //     name: ['', Validators.required],
  //     email: ['', [Validators.required, Validators.email]],
  //     phone: ['', Validators.required],
  //     experience: ['', Validators.required],
  //     type: ['', Validators.required]
  //   });

  //   this.route.params.subscribe(params => {
  //     this.userId = +params['id'];
  //     this.userService.getUser(this.userId).subscribe(user => {
  //       this.editUserForm.patchValue(user);
  //     });
  //   });
  // }
//from
  ngOnInit(): void {
    //this.userId = +this.route.snapshot.paramMap.get('id'); // Get the user ID from the route parameter
    const idParam = this.route.snapshot.paramMap.get('id');
    this.userId = idParam ? +idParam : 1;

    this.editUserForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      experience: ['', Validators.required],
      type: ['', Validators.required],
    });

    this.userService.getUser(this.userId).subscribe((user) => {
      this.editUserForm.patchValue({
        name: user.name,
        email: user.email,
        phone: user.phone,
        experience: user.experience,
        type: user.type,
      });
    });
  }
//To
  onSubmit(): void {
    if (this.editUserForm.invalid) {
      return;
    }

    const updatedUserData = { id: this.userId, ...this.editUserForm.value };

    this.userService.updateUser(updatedUserData).subscribe(() => {
      this.router.navigate(['/users']);
    });
  }

  onCancel(): void {
    this.router.navigate(['/users']);
  }

  // ngOnInit() {
  //   this.userId = Number(this.route.snapshot.paramMap.get('id'));
  //   this.userService.getUser(this.userId).subscribe(data => {
  //   //  this.user = data;
  //     this.createForm(data);
  //   });
  // }

  // createForm(user: User) {
  //   this.editUserForm = this.formBuilder.group({
  //     name: [user.name, Validators.required],
  //     email: [user.email, [Validators.required, Validators.email]],
  //     phone: [user.phone, Validators.required],
  //     experience: [user.experience, Validators.required],
  //     type: [user.type, Validators.required]
  //   });
  // }

  // onSubmit() {
  //   if (this.editUserForm.valid) {
  //     const updatedUser: User = {
  //       id: this.userId,
  //       name: this.editUserForm.value.name,
  //       email: this.editUserForm.value.email,
  //       phone: this.editUserForm.value.phone,
  //       experience: this.editUserForm.value.experience,
  //       type: this.editUserForm.value.type
  //     };

  //     this.userService.updateUser(updatedUser).subscribe(() => {
  //       // Redirect to the all users page
  //       this.router.navigate(['/allUsers']);
  //     });
  //   }
  }

  // onCancel() {
  //   // Redirect to the all users page
  //   this.router.navigate(['/allUsers']);
  // }

  //   updateUser() {
  //   const updatedUser: User = { ...this.user, ...this.editUserForm.value };
  //   this.userService.updateUser(updatedUser).subscribe(() => {
  //     // Redirect to the user details page or any other appropriate page
  //     this.router.navigate(['/allUsers']);
  //   });
  // }

//   constructor(    private formBuilder: FormBuilder,
//     private userService: UserService,
//     private route: ActivatedRoute,
//     private router: Router)
//   {
    
//     this.editUserForm = this.formBuilder.group({
//       id: ['', Validators.required],
//       name: ['', Validators.required],
//       email: ['', [Validators.required, Validators.email]],
//       phone: ['', Validators.required],
//       experience: ['', Validators.required],
//       type: ['', Validators.required]
//     });
// }

// ngOnInit() {
//   this.userId = Number(this.route.snapshot.paramMap.get('id'));
//   // this.userService.getUserById(this.userId).subscribe(user => {
//   //   this.editUserForm.setValue({
//   //     id: user.id,
//   //     name: user.name,
//   //     email: user.email,
//   //     phone: user.phone,
//   //     experience: user.experience,
//   //     type: user.type
//   //   });
//   // });
// }

// onSubmit(): void {
//   if (this.editUserForm.invalid) {
//     return;
//   }

  // const updatedUser = this.editUserForm.value;
  //   this.userService.updateUser(this.userId, updatedUser).subscribe(() => {
  //     this.router.navigate(['/users']);
  //   });
//}

