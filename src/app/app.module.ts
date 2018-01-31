import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { ColorPickerModule } from 'angular4-color-picker';
import { NgDragDropModule } from 'ng-drag-drop';
import { ToastrModule } from 'ngx-toastr';

import { RoutingModule } from './routing.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    HttpClientModule,
    FormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    NgDragDropModule.forRoot(),
    ColorPickerModule,
    RoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
