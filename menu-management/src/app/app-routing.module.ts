import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ChefComponent} from "./components/chef/chef.component";
import {AdministradorComponent} from "./components/administrador/administrador.component";
import {ClienteComponent} from "./components/cliente/cliente.component";

const routes: Routes = [
  { path: '', redirectTo: '/cliente', pathMatch: 'full' },
  {path: 'cliente', component: ClienteComponent},
  {path: 'chef', component: ChefComponent},
  {path: 'admin', component: AdministradorComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
