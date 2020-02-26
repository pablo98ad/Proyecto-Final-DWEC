import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//importamos los dos modulos
import {InglesModule} from './pages/ingles/ingles.module'
import {GeografiaModule} from './pages/geografia/geografia.module'
import { AppComponent } from './app.component';

const routes: Routes = [
  /*{path:'',component:AppComponent}*/

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
