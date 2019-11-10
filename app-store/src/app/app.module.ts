import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PageLayoutComponent } from './pages/page-layout/page-layout.component';
import { FormsModule } from '@angular/forms';
import { PageLoginComponent } from './pages/page-login/page-login.component';
import { NavCategoriasComponent } from './components/nav-categorias/nav-categorias.component';
import { PageHomeComponent } from './pages/page-home/page-home.component';
import { CarouselHomeComponent } from './components/carousel-home/carousel-home.component';

@NgModule({
  declarations: [
    AppComponent,
    PageLayoutComponent,
    PageLoginComponent,
    NavCategoriasComponent,
    PageHomeComponent,
    CarouselHomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
