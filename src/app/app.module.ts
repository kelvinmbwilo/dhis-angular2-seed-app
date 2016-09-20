import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { DhisMenuComponent } from './dhis-menu/dhis-menu.component';
import { Constants } from './shared/costants';
import {DhisMenuService} from './dhis-menu/dhis-menu-service.service';

@NgModule({
  declarations: [
    AppComponent,
    DhisMenuComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    Constants,
    DhisMenuService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
