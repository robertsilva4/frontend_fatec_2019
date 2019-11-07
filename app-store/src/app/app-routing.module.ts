import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageLayoutComponent } from './pages/page-layout/page-layout.component';
import { PageLoginComponent } from './pages/page-login/page-login.component';

const routes: Routes = [
  {
    path: "", component: PageLayoutComponent, children: [
      { path: "login", component: PageLoginComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
