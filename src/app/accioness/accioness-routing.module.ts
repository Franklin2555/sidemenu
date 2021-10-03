import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AccionessPage } from './accioness.page';

const routes: Routes = [
  {
    path: '',
    component: AccionessPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AccionessPageRoutingModule {}
