import { Component } from "@angular/core";

import { IDrawingDetails } from "../drawingDetails.interface";
import { DrawingService } from "../drawing.service";

@Component({
  selector: "app-shapes-list",
  templateUrl: "./shapes-list.component.html",
  styleUrls: ["./shapes-list.component.css"]
})
export class ShapesListComponent {
  drawingDetails: IDrawingDetails;

  constructor(private drawingService: DrawingService) {}

  addShape() {
    this.drawingService.drawingDetails.shapes.push({
      coordinates: [{ x: 0, y: 0 }],
      color: "#396a34"
    });
  }

  removeShape(shapeIndex: number) {
    this.drawingService.drawingDetails.shapes.splice(shapeIndex, 1);
  }

  saveData() {
    this.drawingService.saveDrawingDetails();
  }

  onShapeDrop(e: any, insertIndex: number) {
    this.drawingService.drawingDetails.shapes.splice(e.dragData.startIndex, 1);
    this.drawingService.drawingDetails.shapes.splice(
      insertIndex,
      0,
      e.dragData.shape
    );
  }
}
