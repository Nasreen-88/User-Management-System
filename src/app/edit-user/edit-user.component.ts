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

  
  ngOnInit(): void {
   
    this.editUserForm = this.formBuilder.group({
      id: ['', Validators.required],
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      experience: ['', Validators.required],
      type: ['', Validators.required],
    });

    this.route.params.subscribe(params => {
      this.userId = params['id'];
      this.userService.getUser(this.userId).subscribe(user => {
        this.editUserForm.patchValue({
          id:user.id,
          name: user.name,
          email: user.email,
          phone: user.phone,
          experience: user.experience,
          type: user.type
        });
      });
    });

    // this.userService.getUser(this.userId).subscribe((user) => {
    //   this.editUserForm.patchValue({
    //     name: user.name,
    //     email: user.email,
    //     phone: user.phone,
    //     experience: user.experience,
    //     type: user.type,
    //   });
    // });
  }
//To
  // onSubmit(): void {
  //   if (this.editUserForm.invalid) {
  //     return;
  //   }

  //   const updatedUserData = { id: this.userId, ...this.editUserForm.value };

  //   this.userService.updateUser(updatedUserData).subscribe(() => {
  //     this.router.navigate(['/editUser']);
  //   });
  // }

  onSubmit(): void {
    if (this.editUserForm.invalid) {
      return;
    }

    const updatedUserData = { id: this.userId, ...this.editUserForm.value };

    this.userService.updateUser(updatedUserData).subscribe(() => {
      this.router.navigate(['/allUsers']);
    });
  }

  onCancel(): void {
    this.router.navigate(['/allUsers']);
  }
}