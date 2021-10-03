import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AccionessPageRoutingModule } from './accioness-routing.module';

import { AccionessPage } from './accioness.page';

import { ComponentsModule } from '../components/components.module';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AccionessPageRoutingModule,
    ComponentsModule
  ],
  declarations: [AccionessPage]
})
export class AccionessPageModule {}
