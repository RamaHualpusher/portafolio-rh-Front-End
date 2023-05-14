import { Component, Input, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { User } from 'src/types/User';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Input() user: User | null = null;
  @Input() isLoggedIn: boolean | null = null;
  isHeaderModalOpen: boolean = false;
  constructor(private dataService: DataService<User>){}
  ngOnInit() {

  }

  openHeaderModal() {
    this.isHeaderModalOpen = true;
  }

  saveHeaderInfo(newHeaderInfo: User) {
    if (this.user) {
      const updatedUser: User = {
        ...this.user,
        name: newHeaderInfo.name,
        lastname: newHeaderInfo.lastname,
        profession: newHeaderInfo.profession,
        alias: newHeaderInfo.alias,
        phone: this.user.phone, // Se agregaron los campos faltantes
        email: this.user.email,
        address: this.user.address
      };

      this.dataService.updateData('user', this.user.id, updatedUser).subscribe(updatedUser => {
        this.user = updatedUser;
      });

      this.isHeaderModalOpen = false;
    }
  }

  closeModal() {
    this.isHeaderModalOpen = false;
  }
}
