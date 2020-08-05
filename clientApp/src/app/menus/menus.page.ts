import {Component, OnInit} from '@angular/core';
import {Menu} from "../models/menu";
import {MenuService} from "../service/menu.service";
import {PedidoService} from "../service/pedido.service";
import {Router} from "@angular/router";

@Component({
    selector: 'app-menus',
    templateUrl: './menus.page.html',
    styleUrls: ['./menus.page.scss'],
})
export class MenusPage implements OnInit {
    menus = []

    constructor(public menuService: MenuService, public pedidoService: PedidoService, public router: Router) {
    }

    ngOnInit() {
        this.menuService.getMenus().subscribe(menu => {
            this.menus = menu
        })
    }

    comprarMenu(menuObj: Menu) {
        menuObj.cantidad -= 1;
        this.menuService.updateMenu(menuObj);
        // -----------------------------
        const menuComprado = {
            ...menuObj,
            entregado: false,
            fecha_creacion: new Date(),
        }
        this.pedidoService.addPedidos(menuComprado)
        this.router.navigate(['/pedidos'])
        // -----------------------------
    }
}