import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';

const routes: Routes = [
  { path: 'auth', component: AuthComponent },
  {
    path: 'shopping-list',
    loadChildren: () =>
      import('./shopping-list/shoping.module').then((m) => m.ShopingModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
