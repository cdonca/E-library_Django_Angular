import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  idClana;
  rola;
  constructor() {
    this.idClana = null;
    this.rola = null;
  }
  addLoginInfo() {
    this.idClana = localStorage.getItem('id_clana');
    this.rola = localStorage.getItem('rola');
  }
}
