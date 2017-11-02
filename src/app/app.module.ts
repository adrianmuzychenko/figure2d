import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { ColorPickerModule } from 'angular4-color-picker';
import { LocalStorageModule } from 'angular-2-local-storage';
import { NgDragDropModule } from 'ng-drag-drop';


import { AppComponent } from './app.component';
import { AppDrawingComponent } from './drawing/drawing.component';
import { PictureComponent } from './drawing/picture/picture.component';
import { ShapeDetailsComponent } from './drawing/shapes/shape-details/shape.details.component';
import { ShapesListComponent } from './drawing/shapes/shapes-list.component';

@NgModule({
  declarations: [
    AppComponent,
    AppDrawingComponent,
    PictureComponent,
    ShapeDetailsComponent,
    ShapesListComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    NgDragDropModule.forRoot(),
    ColorPickerModule,
    LocalStorageModule.withConfig({
      prefix: 'app-drawing',
      storageType: 'localStorage'
  })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
