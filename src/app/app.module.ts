import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//importamos los dos modulos
import {InglesModule} from './pages/ingles/ingles.module'
import {GeografiaModule} from './pages/geografia/geografia.module';
import { InicioComponent } from './inicio/inicio.component';
import { NotFoundComponent } from './not-found/not-found.component'

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    //importamos los dos modulos
    InglesModule,
    GeografiaModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
