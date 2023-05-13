import { Component, Input, OnInit } from '@angular/core';
import { PersonHeader } from 'src/types/PersonHeader';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Input() person: PersonHeader | null = null;
  isHeaderModalOpen: boolean = false;

  ngOnInit() {

  }

  openHeaderModal() {
    this.isHeaderModalOpen = true;
  }

  saveHeaderInfo(newPerson: PersonHeader) {
    // if (this.person) {
    //   this._dataService.updateData(this.person.id, newPerson).subscribe(data => {
    //     this.person = data;
    //   });
    // }
    // this.isHeaderModalOpen = false;
  }

  closeModal() {
    this.isHeaderModalOpen = false;
  }
}
