import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';
import { User } from '../types/User';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'portafolio-rh';
  user: User | null = null;
  userId: number = 4;
  constructor(private dataService: DataService<User>) {}

  ngOnInit() {
    this.dataService.getData('user/'+this.userId)
      .subscribe(user => {
        this.user = user;
      });
  }
}
