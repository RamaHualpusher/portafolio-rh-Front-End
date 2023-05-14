import { Component, Input, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { User } from 'src/types/User';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  @Input() user: User | null = null;
  @Input() isLoggedIn: boolean | null = null;
  isAboutModalOpen: boolean = false;
  constructor(private dataService: DataService<User>){}
  ngOnInit() {
  }

  openAboutModal() {
    this.isAboutModalOpen = true;
  }

  saveAboutInfo(newAboutInfo: string) {
    if (this.user) {
      const updatedUser: User = {
        ...this.user,
        aboutme: newAboutInfo
      };

      this.dataService.updateData('user', this.user.id, updatedUser).subscribe(updatedUser => {
        this.user = updatedUser;
      });

      this.isAboutModalOpen = false;
    }
  }



  closeModal() {
    this.isAboutModalOpen = false;
  }
}
