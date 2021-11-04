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
import { StyleComponent } from './derective/style/style.component';
import { ClassComponent } from './derective/class/class.component';
import { HighlightDirective } from './derective/highlight.directive';
import { RainbowDirective } from './derective/rainbow.directive';
import { DefaultImagePipe } from './cvTeck/default-image.pipe';
import { EmbaucherComponent } from './cvTeck/embaucher/embaucher.component';
import {ROUTING} from './app.routing';
import { HeaderComponent } from './header/header.component';
import { RouterSimulatorComponent } from './router-simulator/router-simulator.component';
import { DetailPlusComponent } from './cvTeck/detail-plus/detail-plus.component';
import { AddCvComponent } from './cvTeck/add-cv/add-cv.component';
import { DeleteCvComponent } from './cvTeck/delete-cv/delete-cv.component';
import { ErrorComponent } from './error/error.component';

@NgModule({
  declarations: [
    AppComponent,
    PetitComponent,
    ColorComponent,
    CvComponent,
    ListeCvComponent,
    ItemCvComponent,
    DetailCvComponent,
    StyleComponent,
    ClassComponent,
    HighlightDirective,
    RainbowDirective,
    DefaultImagePipe,
    EmbaucherComponent,
    HeaderComponent,
    RouterSimulatorComponent,
    DetailPlusComponent,
    AddCvComponent,
    DeleteCvComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ROUTING
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
