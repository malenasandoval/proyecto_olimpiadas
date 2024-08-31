import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InicioRoutingModule } from './inicio-routing.module';

// VISTA - PÁGINA - INTERFAZ DEL USUARIO
import { InicioComponent } from './pages/inicio/inicio.component';

// COMPONENTES QUE IMPORTAMOS DESDE MATERIAL
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [
    InicioComponent
  ],
  imports: [
    CommonModule,
    InicioRoutingModule,
    MatButtonModule,
    MatCardModule
  ],
  exports:[
    MatButtonModule,
    MatCardModule
  ]
})
export class InicioModule { }
