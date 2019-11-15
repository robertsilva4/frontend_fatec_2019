import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PageLayoutComponent } from './pages/page-layout/page-layout.component';
import { FormsModule } from '@angular/forms';
import { PageLoginComponent } from './pages/page-login/page-login.component';
import { NavCategoriasComponent } from './components/nav-categorias/nav-categorias.component';
import { PageHomeComponent } from './pages/page-home/page-home.component';
import { CarouselHomeComponent } from './components/carousel-home/carousel-home.component';
import { CardProdutoComponent } from './components/card-produto/card-produto.component';
import { ItemCategoriaComponent } from './components/item-categoria/item-categoria.component';
import { PageCarrinhoComponent } from './pages/page-carrinho/page-carrinho.component';
import { PageClienteComponent } from './pages/page-cliente/page-cliente.component';
import { PagePedidosComponent } from './pages/page-pedidos/page-pedidos.component';

@NgModule({
  declarations: [
    AppComponent,
    PageLayoutComponent,
    PageLoginComponent,
    NavCategoriasComponent,
    PageHomeComponent,
    CarouselHomeComponent,
    CardProdutoComponent,
    ItemCategoriaComponent,
    PageCarrinhoComponent,
    PageClienteComponent,
    PagePedidosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
