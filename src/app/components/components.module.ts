import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AvatarComponent } from './avatar/avatar.component';
import { IonicModule } from '@ionic/angular';
import { BotonComponent } from './boton/boton.component';



@NgModule({
  declarations: [
    AvatarComponent,
    BotonComponent
  ],
  exports: [
    AvatarComponent,
    BotonComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ]
})
export class ComponentsModule { }
