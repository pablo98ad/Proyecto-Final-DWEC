import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenuInglesComponent } from './menu-ingles/menu-ingles.component';
import {PluralesComponent} from "./plurales/plurales.component";
import { SingularPluralComponent } from './singular-plural/singular-plural.component';

const routes: Routes = [
  {path: 'ingles',component:MenuInglesComponent,
  children: [
    {
      path: 'singular-plural',
      component: SingularPluralComponent
    },
    {
      path: 'plurales',
      component: PluralesComponent
    }
  ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InglesRoutingModule { }
