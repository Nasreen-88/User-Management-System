import { forwardRef,Inject, Injectable } from '@angular/core';
import { UserService } from './user.service';


@Injectable()
// export class OtherserviceService {

//   constructor() { }
// }

export class OtherService {
  constructor(@Inject(forwardRef(() => UserService)) private userService: UserService) {
  }

  // Rest of the code
}
