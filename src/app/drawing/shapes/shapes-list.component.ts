import { Component, EventEmitter, Output } from '@angular/core';

import { LocalStorageService } from 'angular-2-local-storage';
import { IDrawingDetails } from '../drawingDetails.interface';

@Component({
  selector: 'app-shapes-list',
  templateUrl: './shapes-list.component.html',
  styleUrls: ['./shapes-list.component.css']
})
export class ShapesListComponent {
  @Output() draw: EventEmitter<IDrawingDetails> = new EventEmitter();
  drawingDetails: IDrawingDetails;

  constructor(public localStorageService: LocalStorageService) {
    let drawingDetails = this.localStorageService.get('coordinates') as IDrawingDetails;
    if (drawingDetails) {
      this.drawingDetails = drawingDetails;
    } else {
      this.drawingDetails = {
        shapes: [{
          coordinates: [{ x: 0, y: 0 }],
          color: "#396a34"
        }]
      }
    }
  }

  ngAfterViewInit() {
    this.drawFigure();
  }

  ngDoCheck() {
    this.localStorageService.set('coordinates', this.drawingDetails);
    this.drawFigure();
  }

  drawFigure() {
    this.draw.emit(this.drawingDetails);
  }

  addShape() {
    this.drawingDetails.shapes.push({
      coordinates: [{ x: 0, y: 0 }],
      color: "#396a34"
    });
  }

  removeShape(shapeIndex: number){
    this.drawingDetails.shapes.splice(shapeIndex, 1);
  }

}
