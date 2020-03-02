import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenuGeografiaComponent } from './menu-geografia/menu-geografia.component';
import { DistanciaComponent } from './distancia/distancia.component';
import { DecimalSexagesimalComponent } from './decimal-sexagesimal/decimal-sexagesimal.component';
import { NotFoundComponent } from 'src/app/not-found/not-found.component';


const routes: Routes = [
  {path: 'geografia',component: MenuGeografiaComponent,
  children: [
    {
      path: 'coordenadas',
      component: DecimalSexagesimalComponent
    },
    {
      path: 'distancia',
      component: DistanciaComponent
    }
  ] }
  ,
  {path: 'not-found',component: NotFoundComponent },
  {path: '**', redirectTo: 'not-found'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GeografiaRoutingModule { }
