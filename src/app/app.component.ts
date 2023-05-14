import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';
import { User } from '../types/User';
import { Observable } from 'rxjs';
import { AuthService } from './auth-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'portafolio-rh';
  isLoggedIn$: Observable<boolean>;
  user: User | null = null;
  userId: number = 4;
  constructor(private dataService: DataService<User>, private authService: AuthService) {
    this.isLoggedIn$ = this.authService.isLoggedIn;
  }

  ngOnInit() {
    this.dataService.getData('user/'+this.userId)
      .subscribe(user => {
        this.user = user;
      });
  }
}
