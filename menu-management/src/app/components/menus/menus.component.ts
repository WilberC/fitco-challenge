import {Component, OnInit} from '@angular/core';
import {MenuService} from "../../services/menu.service";
import {Menu} from "../../models/menu";
import {Router} from "@angular/router";
import {PedidoService} from "../../services/pedido.service";

@Component({
  selector: 'app-menus',
  templateUrl: './menus.component.html',
  styleUrls: ['./menus.component.css']
})
export class MenusComponent implements OnInit {
  menus = []
  editingMenuObj: Menu;
  editing: Boolean = false;
  currentRout: String;

  constructor(public menuService: MenuService, public router: Router, public pedidoService: PedidoService) {
  }

  ngOnInit(): void {
    this.menuService.getMenus().subscribe(menu => {
      this.menus = menu
    })
    this.currentRout = this.router.url
  }

  cancelarEditar() {
    this.editing = !this.editing
  }

  editingCantidad(event, menu) {
    this.editingMenuObj = menu
    this.editing = !this.editing
  }

  agregarCantidad(value: any, menuObj: Menu) {
    if (value.cantidad > 0) {
      menuObj.cantidad += value.cantidad
      this.menuService.updateMenu(menuObj)
      this.editing = false
    }
  }

  comprarMenu(cantidad: any, menuObj: Menu) {
    if (cantidad.cantidad > 0 && menuObj.cantidad > 0) {
      menuObj.cantidad -= cantidad.cantidad;
      this.menuService.updateMenu(menuObj);
      // -----------------------------
      const menuComprado = {
        ...menuObj,
        entregado: false,
        fecha_creacion: new Date(),
        precio: cantidad.cantidad * menuObj.precio,
        cantidad: cantidad.cantidad
      }
      this.pedidoService.addPedidos(menuComprado)
      // -----------------------------
    }
  }

}
