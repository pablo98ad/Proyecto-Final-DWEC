import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InglesRoutingModule } from './ingles-routing.module';
import { MenuInglesComponent } from './menu-ingles/menu-ingles.component';
import { SingularPluralComponent } from './singular-plural/singular-plural.component';
import { PluralesComponent } from './plurales/plurales.component';
//para trabajar con formularios
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [MenuInglesComponent, SingularPluralComponent, PluralesComponent],
  imports: [
    CommonModule,
    InglesRoutingModule,
    FormsModule
  ],
  exports: [MenuInglesComponent, SingularPluralComponent, PluralesComponent]
})
export class InglesModule { }
