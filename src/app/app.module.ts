import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { FormsModule } from '@angular/forms';
import { CardComponent } from './card/card.component';
import { ListComponent } from './list/list.component';
import { ItemComponent } from './item/item.component';
import { CvComponent } from './cv/cv.component';
import { DetailComponent } from './detail/detail.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    SecondComponent,
    CardComponent,
    ListComponent,
    ItemComponent,
    CvComponent,
    DetailComponent,
    
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
