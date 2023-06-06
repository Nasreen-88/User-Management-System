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
import { HttpClient } from '@angular/common/http';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent {
  addUserForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private userService: UserService, private router: Router, private http: HttpClient) {
    this.addUserForm = this.formBuilder.group({
      id: ['', Validators.required],
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
     // Retrieving the form values and   Use the values to add the user to the database
     const id = this.addUserForm.value.id;
     const name = this.addUserForm.value.name;
     const email = this.addUserForm.value.email;
     const phone = this.addUserForm.value.phone;
     const experience = this.addUserForm.value.experience;
     const type = this.addUserForm.value.type;

     // Create the user object
    const user = {
      id: id,
      name: name,
      email: email,
      phone: phone,
      experience: experience,
      type: type
    };

    // Make the HTTP POST request to add the user


    const postRequest = this.http.post('http://localhost:3000/addUser', user);

  const subscription: Subscription = postRequest.subscribe({
    next: (response) => {
      // Handle the success response from the server
      console.log('User added successfully', response);
      // Redirect to the user list page or perform any other action
      this.router.navigate(['/allUsers']);
    },
    error: (error) => {
      // Handle the error response from the server
      console.error('Error adding user', error);
      // Display an error message or perform any other action
    },
    complete: () => {
      // This block will be executed when the request is complete
      console.log('Request completed');
    }
  });
    // this.http.post<any>("http://localhost:3000/addUser", user)

    // //The response from the server is then handled using the subscribe() method, where we can perform any necessary actions (e.g., resetting the form, redirecting to another page)

    // .subscribe(
    //   (response) => {
    //     // User added successfully
    //     console.log('User added:', response);
    //     // Reset the form
    //     this.addUserForm.reset();
    //     // Redirect to the user list page or any other page as needed
    //     this.router.navigate(['/user-list']);
    //   },
    //   (error) => {
    //     // Handle error if the request fails
    //     console.error('Error adding user:', error);
    //   }
    // );

    
  }

   }   
   
   
   
   
  //  this.http.post('/addUser', user)
  //     .subscribe(
  //       response => {
  //         // Handle the successful response

  //     this.userService.addUser(this.addUserForm.value).subscribe(() => {
  //     this.router.navigate(['/addUser']);
  //   });
  //         console.log('User added successfully');
  //         this.addUserForm.reset(); // Reset the form
  //       },
  //       error => {
  //         // Handle the error response
  //         console.error('Failed to add user', error);
  //       }
  //     );
   // this.userService.addUser(this.addUserForm.value).subscribe(() => {
    //   this.router.navigate(['/allUsers']);
    // });
  

    // Reset the form
    // this.addUserForm.reset();



// n@gmail.com 1231231230