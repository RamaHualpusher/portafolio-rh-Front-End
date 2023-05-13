import { Component, Input, OnInit } from '@angular/core';
import { UserAboutMe } from 'src/types/UserAboutMe';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  @Input() person: UserAboutMe | null = null;
  isAboutModalOpen: boolean = false;

  ngOnInit() {
  }

  openAboutModal() {
    this.isAboutModalOpen = true;
  }

  saveAboutInfo(newAboutInfo: string) {
    if (this.person) {
      this.person = {
        id: this.person.id,
        aboutme: newAboutInfo
      };
    }
    this.isAboutModalOpen = false;
  }



  closeModal() {
    this.isAboutModalOpen = false;
  }
}
