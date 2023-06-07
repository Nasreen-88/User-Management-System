import { Pipe, PipeTransform } from '@angular/core';
import { User } from './models/user.model';


@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(users: User[], searchTerm: string): User[] {
    if (!searchTerm) {
     
      return users;
    }

    const lowerCaseSearchTerm = searchTerm.toLowerCase();
    return users.filter(user =>
      user.name.toLowerCase().includes(lowerCaseSearchTerm) ||
      user.email.toLowerCase().includes(lowerCaseSearchTerm)
    );
  }

}
