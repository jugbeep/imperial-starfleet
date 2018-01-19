import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { TieFighterComponent } from './tie-fighter/tie-fighter.component';
import { InternalDefencesModule } from './internal-defences/internal-defences.module';



@NgModule({
  declarations: [
    AppComponent,
    TieFighterComponent
  ],
  imports: [
    BrowserModule,
    InternalDefencesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
