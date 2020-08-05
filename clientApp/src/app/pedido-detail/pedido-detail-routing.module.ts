import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PedidoDetailPage } from './pedido-detail.page';

const routes: Routes = [
  {
    path: '',
    component: PedidoDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PedidoDetailPageRoutingModule {}
