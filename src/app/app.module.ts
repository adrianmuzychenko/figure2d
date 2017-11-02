import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { Surface, Path, Text, Group } from '@progress/kendo-drawing';
import { ColorPickerModule } from 'angular4-color-picker';
import { LocalStorageModule } from 'angular-2-local-storage';
import { NgDragDropModule } from 'ng-drag-drop';


import { AppComponent } from './app.component';
import { AppDrawingComponent } from './drawing/drawing.component';
import { PictureComponent } from './drawing/picture/picture.component';
import { InputsComponent } from './drawing/inputs/inputs.component';

@NgModule({
  declarations: [
    AppComponent,
    AppDrawingComponent,
    PictureComponent,
    InputsComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    NgDragDropModule.forRoot(),
    ColorPickerModule,
    LocalStorageModule.withConfig({
      prefix: 'my-app',
      storageType: 'localStorage'
  })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
