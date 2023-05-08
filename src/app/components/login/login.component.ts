import { Component } from '@angular/core';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  email = '';
  password = '';

  constructor() {}

  login() {
    console.log('Email:', this.email);
    console.log('Password:', this.password);
    // Aquí llamarás al servicio de autenticación una vez que lo hayas creado
  }
  cancel() {
    console.log('Cancelar');
    // Aquí, redirige al usuario a la página de inicio o a la página anterior
  }
}
