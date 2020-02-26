import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenuGeografiaComponent } from './menu-geografia/menu-geografia.component';
import { DistanciaComponent } from './distancia/distancia.component';
import { DecimalSexagesimalComponent } from './decimal-sexagesimal/decimal-sexagesimal.component';


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
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GeografiaRoutingModule { }
