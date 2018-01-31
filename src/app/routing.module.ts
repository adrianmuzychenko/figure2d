import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ColorPickerModule } from 'angular4-color-picker';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { AppDrawingComponent } from './drawing/drawing.component';
import { ShapesListComponent } from './drawing/shapes/shapes-list.component';
import { PictureComponent } from './drawing/picture/picture.component';
import { ShapeDetailsComponent } from './drawing/shapes/shape-details/shape.details.component';
import { MovingFigureDirective } from './drawing/picture/moving-figure/moving-figure.directive';
import { NgDragDropModule } from 'ng-drag-drop';

const appRoutes = [
  {
    path: '',
    component: AppDrawingComponent
  },
  {
    path: '**',
    redirectTo: '/'
  }
];

@NgModule({
  declarations: [
    AppDrawingComponent,
    ShapesListComponent,
    PictureComponent,
    ShapeDetailsComponent,
    MovingFigureDirective
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    NgDragDropModule,
    FormsModule,
    ToastrModule.forRoot(),
    ColorPickerModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [],
  exports: [RouterModule]
})
export class RoutingModule {}
