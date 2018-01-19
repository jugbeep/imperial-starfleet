import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LaserCannon } from './laser-cannon/laser-cannon.component';
import { DeathSquare } from './death-square/death-square.component';
import { Turret} from './turret/turret.component';



@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    LaserCannon,
    DeathSquare,
    Turret
  ]
})
export class InternalDefencesModule { }
