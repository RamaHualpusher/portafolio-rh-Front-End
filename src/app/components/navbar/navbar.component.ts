import { Component, OnInit, Input } from '@angular/core';
import { PersonHeader } from 'src/types/PersonHeader';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { AuthService } from 'src/app/auth-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  @Input() person: PersonHeader | null = null;
  isLoggedIn = false;
  private destroy$ = new Subject<void>();

  constructor(private authService: AuthService, private router: Router) {
    this.authService.isLoggedIn.pipe(takeUntil(this.destroy$)).subscribe(
      isLoggedIn => this.isLoggedIn = isLoggedIn
    );
  }

  ngOnInit(): void {
  }

  logout() {
    this.authService.logout();
    this.router.navigateByUrl('/login');
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
