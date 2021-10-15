import { Component, OnInit } from '@angular/core';

interface Componente{

  icon: string;
  name: string;
  redirectTo: string;
  
}

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  componentes: Componente[]=[
    { 
    icon:'people',
    name:'Clientes',
    redirectTo:'/clientes'
  },
  { 
    icon:'alert',
    name:' Alertas',
    redirectTo:'/alert'
  },
  { 
    icon:'basketball',
    name:'Clientes',
    redirectTo:'/clientes'
  },
  { 
    icon:'beaker',
    name:'Avatar',
    redirectTo:'/avatar'
  },
  { 
    icon:'star',
    name:'Favoritos',
    redirectTo:'/favorito'
  },
  { 
    icon:'card',
    name:'Tarjetas',
    redirectTo:'/card'
  },
  { 
    icon:'card',
    name:'FAB',
    redirectTo:'/fab'
  },]
  constructor() { }

  ngOnInit() {
  }

}
