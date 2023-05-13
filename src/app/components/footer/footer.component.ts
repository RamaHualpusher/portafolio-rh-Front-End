import { Component, Input, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { Social } from 'src/types/Social';
import { User } from 'src/types/User';
import { UserContact } from 'src/types/UserContact';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})



export class FooterComponent implements OnInit{
  @Input() userContact: UserContact | null = null;
  @Input() social: Social[] = [];
  currentYear: number;
  isContactModalOpen: boolean = false;
  isSocialModalOpen: boolean = false;
  selectedSocial: any = null;



  constructor() {
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

  saveContact(editedData: any) {
    this.userContact!.phone = editedData.phone;
    this.userContact!.email = editedData.email;
    this.userContact!.address = editedData.address;
    this.isContactModalOpen = false;
  }

  saveSocial(editedSocial: Social) {
    if (editedSocial.id) {
      const index = this.social.findIndex((social: Social) => social.id === editedSocial.id);
      if (index !== -1) {
        this.social[index] = editedSocial;
      }
    } else {
      editedSocial.id = this.social.length + 1;
      this.social.push(editedSocial);
    }
    this.isSocialModalOpen = false;
  }

  deleteSocial(id: number) {
    const index = this.social.findIndex((social: Social) => social.id === id);
    if (index !== -1) {
      this.social.splice(index, 1);
    }
  }


}
