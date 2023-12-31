import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardRotingModule } from './modules/dashboar/dasboar-routing.module';

const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: '/dashboard' },
    
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      routes,
      {enableTracing:false, useHash: true}
    ),
      DashboardRotingModule  
  
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
