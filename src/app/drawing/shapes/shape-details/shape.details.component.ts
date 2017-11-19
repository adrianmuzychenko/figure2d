import { Component, Input, Output, EventEmitter } from '@angular/core';
import { IFigure } from '../../drawingDetails.interface';

@Component({
  selector: 'app-shape-details',
  templateUrl: './shape.details.component.html',
  styleUrls: ['./shape.details.component.css']
})
export class ShapeDetailsComponent {
  @Input() figureDetails: IFigure;
  @Input('index') figureIndex: number;
  @Output() deletedShapeIndex = new EventEmitter<number>();
  
  isCollapsed = false;

  constructor() {}

  addCoordinate() {
    this.figureDetails.coordinates.push({ x: 0, y: 0 });
  }

  removeCoordinate(index) {
    this.figureDetails.coordinates.splice(index, 1);
  }

  onCoordinateDrop(e: any, insertIndex: number) {
    this.figureDetails.coordinates.splice(e.dragData.startIndex, 1);
    this.figureDetails.coordinates.splice(insertIndex, 0, e.dragData.coordinates);
  }

  removeShape(shapeIndex: number){
    this.deletedShapeIndex.emit(shapeIndex);
  }
  
}
