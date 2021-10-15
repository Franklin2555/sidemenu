import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    // { title: 'Inbox', url: '/folder/Inbox', icon: 'mail' },
    // { title: 'Outbox', url: '/folder/Outbox', icon: 'paper-plane' },
    // { title: 'Favorites', url: '/folder/Favorites', icon: 'heart' },
    // { title: 'Archived', url: '/folder/Archived', icon: 'archive' },
    // { title: 'Trash', url: '/folder/Trash', icon: 'trash' },
    { title: 'Inicio', url: '/inicio', icon: 'home' },
    { title: 'Clientes', url: '/clientes', icon: 'people' },
    { title: 'Acciones', url: '/accioness', icon: 'build' },
    { title: 'Alert', url: '/alert/', icon: 'alert' },
    { title: 'Avatar', url: '/avatar/', icon: 'beaker' },
    { title: 'Favoritos', url: '/favorito/', icon: 'star' },
    { title: 'Tarjetas', url: '/card/', icon: 'card' },
    { title: 'FAB', url: '/fab/', icon: 'card' },
  ];
  //public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}
