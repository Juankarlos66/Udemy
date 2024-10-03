import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CentroComercialPageRoutingModule } from './centro-comercial-routing.module';

import { CentroComercialPage } from './centro-comercial.page';
import { DepartamentosComponent } from './departamentos/departamentos.component';
import { ProductosComponent } from './productos/productos.component';
import { DetallesComponent } from './detalles/detalles.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CentroComercialPageRoutingModule
  ],
  declarations: [CentroComercialPage, DepartamentosComponent, ProductosComponent, DetallesComponent], 
})
export class CentroComercialPageModule {}
