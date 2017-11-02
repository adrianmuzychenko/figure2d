import { Component, EventEmitter, Output, Input } from '@angular/core';
import { IDrawingDetails } from '../drawingDetails.interface';
import { LocalStorageService } from 'angular-2-local-storage';

@Component({
  selector: 'app-inputs',
  templateUrl: './inputs.component.html',
  styleUrls: ['./inputs.component.css']
})
export class InputsComponent {
  drawingDetails: IDrawingDetails;
  @Output() draw: EventEmitter<IDrawingDetails> = new EventEmitter();

  constructor(public localStorageService: LocalStorageService) {
    let coordinates = this.localStorageService.get('coordinates') as IDrawingDetails;
    if (coordinates) {
      this.drawingDetails = coordinates;
    } else {
      this.drawingDetails = {
        coordinates: [{ x: 0, y: 0 }],
        color: "#396a34"
      };
    }
  }
  ngAfterViewInit() {
    this.drawFigure();
  }

  ngDoCheck() {
    this.localStorageService.set('coordinates', this.drawingDetails);
    this.drawFigure();
  }

  addCoordinate() {
    this.drawingDetails.coordinates.push({ x: 0, y: 0 });
  }

  removeCoordinate(index) {
    this.drawingDetails.coordinates.splice(index, 1);
  }

  drawFigure() {
    this.draw.emit(this.drawingDetails);
  }

  onCoordinateDrop(e: any, insertIndex) {
    this.drawingDetails.coordinates.splice(e.dragData.startIndex, 1);
    this.drawingDetails.coordinates.splice(insertIndex, 0, e.dragData.coordinates);
  }
}
