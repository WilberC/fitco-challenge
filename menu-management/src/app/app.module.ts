import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from "@angular/forms";

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {MenusComponent} from './components/menus/menus.component';
import {MenuFormComponent} from './components/menu-form/menu-form.component';
import {PedidosComponent} from './components/pedidos/pedidos.component';
import {PedidoFormComponent} from './components/pedido-form/pedido-form.component';
import {AngularFireModule} from '@angular/fire';
import {AngularFireAnalyticsModule} from '@angular/fire/analytics';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import {environment} from '../environments/environment';
import { ClienteComponent } from './components/cliente/cliente.component';
import { AdministradorComponent } from './components/administrador/administrador.component';
import { ChefComponent } from './components/chef/chef.component';

@NgModule({
  declarations: [
    AppComponent,
    MenusComponent,
    MenuFormComponent,
    PedidosComponent,
    PedidoFormComponent,
    ClienteComponent,
    AdministradorComponent,
    ChefComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAnalyticsModule,
    AngularFirestoreModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
