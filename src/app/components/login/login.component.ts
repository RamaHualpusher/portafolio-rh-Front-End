// login.component.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth-service.service';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  username = '';
  password = '';
  private destroy$ = new Subject<void>();

  constructor(private authService: AuthService, private router: Router) {
    this.authService.isLoggedIn.pipe(takeUntil(this.destroy$)).subscribe(
      isLoggedIn => {
        if (isLoggedIn) {
          this.router.navigateByUrl('/');
          alert('Inicio de sesión exitoso');
        }
      },
      error => console.error('Inicio de sesión fallido', error)
    );
  }

  login(event: Event) {
    event.preventDefault();
    this.authService.login(this.username, this.password).subscribe();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  cancel() {
    // Redirige al usuario a la página de inicio
    this.router.navigateByUrl('/');
  }
}
