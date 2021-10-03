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
    name:'Ir a Alert',
    redirectTo:'/alert'
  },
  { 
    icon:'basketball',
    name:'Si funciona :)',
    redirectTo:'/clientes'
  }]
  constructor() { }

  ngOnInit() {
  }

}
