// import { Component, OnInit } from '@angular/core';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { Router } from '@angular/router';
// import { UserService } from '../user.service';
// import { User } from '../user.interface';


// @Component({
//   selector: 'app-add-user',
//   templateUrl: './add-user.component.html',
//   styleUrls: ['./add-user.component.css']
// })
// export class AddUserComponent implements OnInit {

//   addUserForm: FormGroup;


//   constructor(
//     private formBuilder: FormBuilder,
//     private router: Router,
//     private userService: UserService
//   ) {
//     this.addUserForm = this.formBuilder.group({
//       id:['', Validators.required],
//       name: ['', Validators.required],
//       email: ['', [Validators.required, Validators.email]],
//       phone: ['', Validators.required],
//       experience: ['', Validators.required],
//       type: ['', Validators.required]
//     });
//   }

//   types: { label: string; value: string }[] = [
//     { label: 'Admin', value: 'admin' },
//     { label: 'Manager', value: 'manager' },
//     { label: 'User', value: 'user' }
//   ];

//   ngOnInit(): void {}

//   onSubmit(): void {
//     if (this.addUserForm.invalid) {
//       return;
//     }
//     const newUser: User = this.addUserForm.value;
//     this.userService.addUser(newUser).subscribe(() => {
//       // Handle successful user addition
//       this.router.navigate(['/users']);
//     });
//   }


//   // constructor(private formBuilder: FormBuilder)
//   //   {
//   //     this.addUserForm = this.formBuilder.group({
//   //       name: ['', Validators.required],
//   //       email: ['', [Validators.required, Validators.email]],
//   //       phone: ['', Validators.required],
//   //       experience: ['', Validators.required],
//   //       type: ['', Validators.required]
//   //     });
//   //   }

//     // types: { label: string; value: string }[] = [
//     //   { label: 'Admin', value: 'admin' },
//     //   { label: 'Manager', value: 'manager' },
//     //   { label: 'User', value: 'user' }
//     // ];

//   //   ngOnInit(): void {}

//   //   onSubmit(): void {
//   //     if (this.addUserForm.invalid) {
//   //       return;
//   //     }
//   //     const newUser = this.addUserForm.value;
//   //     // this.userService.addUser(newUser);
//   //     // Handle user creation
//   //     this.addUserForm.reset();
//   //   }

// }



import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent {
  addUserForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private userService: UserService, private router: Router) {
    this.addUserForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      experience: ['', Validators.required],
      type: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.addUserForm.invalid) {
      return;
    }

    this.userService.addUser(this.addUserForm.value).subscribe(() => {
      this.router.navigate(['/users']);
    });
  }
}
