import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { StuffyAddListComponent } from './feature/stuffy-add-list/stuffy-add-list.component';
import { StuffyListComponent } from './feature/stuffy-list/stuffy-list.component';


@NgModule({
  declarations: [
    AppComponent,
    StuffyAddListComponent,
    StuffyListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
