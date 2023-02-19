import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('../app/pages/home/home.module').then((m) => m.HomeModule),
  },

  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  imports: [
    [
      RouterModule.forRoot(routes, {
        anchorScrolling: 'enabled',
        scrollPositionRestoration: 'enabled',
      }),
    ],
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
