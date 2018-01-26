import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LaserCannonComponent } from './laser-cannon/laser-cannon.component';
import { DeathSquareComponent } from './death-square/death-square.component';
import { TurretComponent } from './turret/turret.component';



@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    LaserCannonComponent,
    DeathSquareComponent,
    TurretComponent
  ],
  exports: [DeathSquareComponent, TurretComponent, LaserCannonComponent]

})
export class InternalDefencesModule { }
