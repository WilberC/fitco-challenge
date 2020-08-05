import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';

const routes: Routes = [
    {path: '', redirectTo: '/menus', pathMatch: 'full'},
    {
        path: 'menus',
        loadChildren: () => import('./menus/menus.module').then(m => m.MenusPageModule)
    },
    {
        path: 'pedidos',
        loadChildren: () => import('./pedidos/pedidos.module').then(m => m.PedidosPageModule)
    },
    {
        path: 'pedido-detail',
        loadChildren: () => import('./pedido-detail/pedido-detail.module').then(m => m.PedidoDetailPageModule)
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
