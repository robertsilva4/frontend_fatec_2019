import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageLayoutComponent } from './pages/page-layout/page-layout.component';
import { PageLoginComponent } from './pages/page-login/page-login.component';
import { PageHomeComponent } from './pages/page-home/page-home.component';
import { PageCarrinhoComponent } from './pages/page-carrinho/page-carrinho.component';
import { PageClienteComponent } from './pages/page-cliente/page-cliente.component';
import { PagePedidosComponent } from './pages/page-pedidos/page-pedidos.component';

const routes: Routes = [
  //{ path: "login", component: PageLoginComponent },
  {
    path: "", component: PageLayoutComponent, children: [
      { path: "home", component: PageHomeComponent },
      { path: "login", component: PageLoginComponent },
      { path: "carrinho", component: PageCarrinhoComponent },
      { path: "cliente", component: PageClienteComponent },
      { path: "pedidos", component: PagePedidosComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
