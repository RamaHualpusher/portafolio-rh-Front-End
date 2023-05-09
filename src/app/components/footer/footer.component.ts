import { Component } from '@angular/core';
import { DataService } from 'src/app/data.service';


interface Social {
  id: number;
  name: string;
  url: string;
  icon: string;
}

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})



export class FooterComponent {
  data: any;
  currentYear: number;
  isContactModalOpen: boolean = false;
  isSocialModalOpen: boolean = false;
  selectedSocial: any = null;



  constructor(private _dataService: DataService) {
    this.data = this._dataService.getData();
    this.currentYear = new Date().getFullYear();
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

  saveContact(editedData: any) {
    this.data.phone = editedData.phone;
    this.data.email = editedData.email;
    this.data.address = editedData.address;
    this.isContactModalOpen = false;
  }

  saveSocial(editedSocial: Social) {
    if (editedSocial.id) {
      const index = this.data.social.findIndex((social: Social) => social.id === editedSocial.id);
      if (index !== -1) {
        this.data.social[index] = editedSocial;
      }
    } else {
      editedSocial.id = this.data.social.length + 1;
      this.data.social.push(editedSocial);
    }
    this.isSocialModalOpen = false;
  }

  deleteSocial(id: number) {
    const index = this.data.social.findIndex((social: Social) => social.id === id);
    if (index !== -1) {
      this.data.social.splice(index, 1);
    }
  }


}
