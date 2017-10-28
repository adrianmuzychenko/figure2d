import { Component, EventEmitter, Output } from '@angular/core';
import { IDrawingDetails } from '../drawingDetails.interface';

@Component({
  selector: 'app-inputs',
  templateUrl: './inputs.component.html',
  styleUrls: ['./inputs.component.css']
})
export class InputsComponent {
  drawingDetails: IDrawingDetails;
  @Output() draw: EventEmitter<IDrawingDetails> = new EventEmitter();

  constructor() {
    this.drawingDetails = {
      coordinates: [{ valueX: 0, valueY: 0 }],
      color: "#396a34"
    };
  }

  addCoordinate() {
    this.drawingDetails.coordinates.push({ valueX: 0, valueY: 0 });
  }

  removeCoordinate(index) {
    this.drawingDetails.coordinates.splice(index, 1);
  }

  drawImage(){
    this.draw.emit(this.drawingDetails);
  }

}
