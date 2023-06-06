import { Component, Input  } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { User } from '../models/user.model'; 

@Component({
  selector: 'app-user-details-modal',
  templateUrl: './user-details-modal.component.html',
  styleUrls: ['./user-details-modal.component.css']
})
export class UserDetailsModalComponent {
  @Input()
  user!: User;
  constructor(public modalRef: BsModalRef) {}

  closeModal() {
    this.modalRef.hide();
  }

}
