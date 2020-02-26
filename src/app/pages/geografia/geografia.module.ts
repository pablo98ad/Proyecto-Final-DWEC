import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GeografiaRoutingModule } from './geografia-routing.module';
import { MenuGeografiaComponent } from './menu-geografia/menu-geografia.component';
import { DistanciaComponent } from './distancia/distancia.component';
import { DecimalSexagesimalComponent } from './decimal-sexagesimal/decimal-sexagesimal.component';
//para trabajar con formularios
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [MenuGeografiaComponent, DistanciaComponent, DecimalSexagesimalComponent],
  imports: [
    CommonModule,
    GeografiaRoutingModule,
    FormsModule
  ],
  exports: [MenuGeografiaComponent, DistanciaComponent, DecimalSexagesimalComponent]
})
export class GeografiaModule { }
