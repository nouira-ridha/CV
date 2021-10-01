import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PetitComponent } from './petit/petit.component';
import { ColorComponent } from './color/color.component';
import { FormsModule } from '@angular/forms';
import { CvComponent } from './cvTeck/cv/cv.component';
import { ListeCvComponent } from './cvTeck/liste-cv/liste-cv.component';
import { ItemCvComponent } from './cvTeck/item-cv/item-cv.component';
import { DetailCvComponent } from './cvTeck/detail-cv/detail-cv.component';

@NgModule({
  declarations: [
    AppComponent,
    PetitComponent,
    ColorComponent,
    CvComponent,
    ListeCvComponent,
    ItemCvComponent,
    DetailCvComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
