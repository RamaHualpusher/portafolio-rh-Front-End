import { Component } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  data: any;
  title: string = '';
  isLoggedIn = false; // Para cambiar a true cuando el usuario inicia sesión

  constructor(private _dataService: DataService) {
    this.data = this._dataService.getData();
    this.title = this.data.alias;
  }
  logout() {
    console.log('Cerrar sesión');
    // Aquí, cierra la sesión y redirige al usuario a la página de inicio de sesión
  }
}
