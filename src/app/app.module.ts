import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { KittyCardComponent } from './kitty-card-list/kitty-card/kitty-card.component';
import { KittyCardListComponent } from './kitty-card-list/kitty-card-list.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    KittyCardComponent,
    KittyCardListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
