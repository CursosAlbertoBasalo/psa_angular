import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./domain/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'item',
    loadChildren: () =>
      import('./domain/item/item.module').then((m) => m.ItemModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
