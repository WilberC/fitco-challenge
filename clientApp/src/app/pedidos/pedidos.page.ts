import {Component, OnInit} from '@angular/core';
import {PedidoService} from "../service/pedido.service";

@Component({
    selector: 'app-pedidos',
    templateUrl: './pedidos.page.html',
    styleUrls: ['./pedidos.page.scss'],
})
export class PedidosPage implements OnInit {
    pedidos = []

    constructor(public pedidoService: PedidoService) {
    }

    ngOnInit() {
        this.pedidoService.getPedidos().subscribe(pedido => {
            this.pedidos = pedido
        })
    }

}
