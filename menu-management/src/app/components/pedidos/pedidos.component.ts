import {Component, OnInit} from '@angular/core';
import {PedidoService} from "../../services/pedido.service";
import {MenuService} from "../../services/menu.service";
import {Router} from "@angular/router";
import {Pedido} from "../../models/pedido";

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.css']
})
export class PedidosComponent implements OnInit {
  pedidos = [];
  currentRout: String;

  constructor(public pedidoService: PedidoService, public router: Router) {
  }

  ngOnInit(): void {
    this.currentRout = this.router.url
    if (this.currentRout === '/admin') {
      this.pedidoService.getPedidos().subscribe(pedido => {
        this.pedidos = pedido
      })
    } else {
      this.pedidoService.getPedidosPorEntregar().subscribe(pedido => {
        this.pedidos = pedido
      })
    }
  }

  finalizarPedido(event, pedido: Pedido) {
    pedido.entregado = true
    this.pedidoService.updatePedido({...pedido, fecha_finalizacion: new Date()})
  }
}
