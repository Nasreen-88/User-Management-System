
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

    // Making the HTTP POST request to add the user

    const postRequest = this.http.post('http://localhost:3000/addUser', user);

    const subscription: Subscription = postRequest.subscribe({
      next: (response) => {
        // Handle the success response from the server
        console.log('User added successfully', response);
        // Redirect to the user list page or perform any other action
        this.router.navigate(['/allUsers']);// it will take to list of users
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

  }

}



