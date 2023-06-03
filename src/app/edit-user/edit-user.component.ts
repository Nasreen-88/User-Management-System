import { Component,OnInit  } from '@angular/core';
import { User } from '../user.interface';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit{

  editUserForm!: FormGroup;
  userId!: number;

  constructor(    private formBuilder: FormBuilder,
    private userService: UserService,
    private route: ActivatedRoute,
    private router: Router)
  {
    
    this.editUserForm = this.formBuilder.group({
      id: ['', Validators.required],
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      experience: ['', Validators.required],
      type: ['', Validators.required]
    });
}

ngOnInit() {
  this.userId = Number(this.route.snapshot.paramMap.get('id'));
  this.userService.getUserById(this.userId).subscribe(user => {
    this.editUserForm.setValue({
      id: user.id,
      name: user.name,
      email: user.email,
      phone: user.phone,
      experience: user.experience,
      type: user.type
    });
  });
}

onSubmit(): void {
  if (this.editUserForm.invalid) {
    return;
  }

  const updatedUser = this.editUserForm.value;
    this.userService.updateUser(this.userId, updatedUser).subscribe(() => {
      this.router.navigate(['/users']);
    });
}
}
