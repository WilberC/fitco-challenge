import {Component, OnInit} from '@angular/core';
import {MenuService} from "../../services/menu.service";
import {Menu} from "../../models/menu";

@Component({
  selector: 'app-menu-form',
  templateUrl: './menu-form.component.html',
  styleUrls: ['./menu-form.component.css']
})
export class MenuFormComponent implements OnInit {
  menu = {} as Menu

  constructor(public menuService: MenuService) {
  }

  ngOnInit(): void {
  }

  addMenu() {
    if (this.menu.nombre !== '' && this.menu.cantidad !== 0 && this.menu.precio !== 0) {
      this.menuService.addMenu(this.menu)
      this.menu = {} as Menu
    }
  }

}
