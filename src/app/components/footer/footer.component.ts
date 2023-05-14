import { Component, Input, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { Social } from 'src/types/Social';
import { User } from 'src/types/User';
import { UserContact } from 'src/types/UserContact';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit{
  @Input() user: User | null = null;
  @Input() social: Social[] | null = null;
  @Input() isLoggedIn: boolean | null = null;
  currentYear: number;
  isContactModalOpen: boolean = false;
  isSocialModalOpen: boolean = false;
  selectedSocial: any = null;

  constructor(private dataService: DataService<any>) {
    this.currentYear = new Date().getFullYear();
  }

  ngOnInit() {
  }

  openContactModal() {
    this.isContactModalOpen = true;
  }

  openSocialModal(social: Social | null = null) {
    this.selectedSocial = social;
    this.isSocialModalOpen = true;
  }

  closeContactModal() {
    this.isContactModalOpen = false;
  }

  closeSocialModal() {
    this.isSocialModalOpen = false;
  }

  saveContact(editedData: UserContact) {
    if (this.user) {
      const updatedUser: User = {
        ...this.user,
        phone: editedData.phone,
        email: editedData.email,
        address: editedData.address
      };

      this.dataService.updateData('user', this.user.id, updatedUser).subscribe(updatedUser => {
        this.user = updatedUser;
      });

      this.isContactModalOpen = false;
    }
  }

  saveSocial(editedSocial: Social) {
    editedSocial.userId = this.user?.id;
    if (editedSocial.id) {
      this.dataService.updateData('social', editedSocial.id, editedSocial).subscribe(updatedSocial => {
        const index = this.social!.findIndex(social => social.id === updatedSocial.id);
        if (index !== -1) {
          this.social![index] = updatedSocial;
        }
      });
    } else {
      this.dataService.createData('social', editedSocial).subscribe(createdSocial => {
        this.social!.push(createdSocial);
      });
    }
    this.isSocialModalOpen = false;
  }

  deleteSocial(id: number) {
    this.dataService.deleteData('social', id).subscribe(() => {
      this.social = this.social!.filter(social => social.id !== id);
    });
  }
}
