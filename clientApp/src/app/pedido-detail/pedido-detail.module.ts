import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PedidoDetailPageRoutingModule } from './pedido-detail-routing.module';

import { PedidoDetailPage } from './pedido-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PedidoDetailPageRoutingModule
  ],
  declarations: [PedidoDetailPage]
})
export class PedidoDetailPageModule {}
