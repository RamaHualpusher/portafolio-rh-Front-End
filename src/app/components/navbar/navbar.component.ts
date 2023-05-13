import { Component, OnInit, Input } from '@angular/core';
import { PersonHeader } from 'src/types/PersonHeader';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  @Input() person: PersonHeader | null = null;
  isLoggedIn = false; // Para cambiar a true cuando el usuario inicia sesión

  ngOnInit(): void {
  }


  logout() {
    console.log('Cerrar sesión');
    // Aquí, cierra la sesión y redirige al usuario a la página de inicio de sesión
  }
}
