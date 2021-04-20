import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutModule } from './layout/layout.module';


const routes: Routes = [
  {path: '', loadChildren: () => import('./layout/layout.module').then(m => m.LayoutModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
