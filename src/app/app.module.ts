import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import { ColorPickerModule } from 'angular4-color-picker';
import { NgDragDropModule } from 'ng-drag-drop';
import { ToastrModule } from 'ngx-toastr';

import { AppComponent } from './app.component';
import { AppDrawingComponent } from './drawing/drawing.component';
import { PictureComponent } from './drawing/picture/picture.component';
import { ShapeDetailsComponent } from './drawing/shapes/shape-details/shape.details.component';
import { ShapesListComponent } from './drawing/shapes/shapes-list.component';
import { MovingFigureDirective } from './drawing/picture/moving-figure/moving-figure.directive';

@NgModule({
  declarations: [
    AppComponent,
    AppDrawingComponent,
    PictureComponent,
    ShapeDetailsComponent,
    ShapesListComponent,
    MovingFigureDirective
  ],
  imports: [
    HttpClientModule,
    FormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    NgDragDropModule.forRoot(),
    ColorPickerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
