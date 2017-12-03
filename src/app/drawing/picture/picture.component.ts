import { Component } from "@angular/core";

import { IDrawingDetails, IFigure } from "../drawingDetails.interface";
import { KeyCodes } from "../../shared/constants";
import { DrawingService } from "../drawing.service";

@Component({
  selector: "app-picture",
  templateUrl: "./picture.component.html",
  host: { "(window:keydown)": "hotkeys($event)" },
  styleUrls: ["./picture.component.css"]
})
export class PictureComponent {
  containerSize: number = 500;
  pictures: IDrawingDetails;
  _selectedPicture: IFigure;
  canMoveFigure = false;

  constructor(private drawingService: DrawingService) {}

  ngDoCheck() {
    this.drawFigure(this.drawingService.drawingDetails);
  }

  hotkeys(event) {
    switch (event.keyCode) {
      case KeyCodes.left:
        this.movePicture(-1, 0);
        event.preventDefault();
        break;
      case KeyCodes.top:
        this.movePicture(0, -1);
        event.preventDefault();
        break;
      case KeyCodes.right:
        this.movePicture(1, 0);
        event.preventDefault();
        break;
      case KeyCodes.down:
        this.movePicture(0, 1);
        event.preventDefault();
        break;
    }
  }

  get selectedPicture(): IFigure {
    if (this._selectedPicture == null && this.pictures !== null) {
      this._selectedPicture = this.pictures.shapes[0];
    }
    return this._selectedPicture;
  }
  set selectedPicture(picture: IFigure) {
    this._selectedPicture = picture;
  }

  drawFigure(data: IDrawingDetails) {
    this.pictures = data;

    this.pictures.shapes.forEach(shape => {
      shape.svgPath = "M";
      shape.coordinates.forEach(coordinate => {
        shape.svgPath += ` ${coordinate.x} ${coordinate.y}`;
      });
      shape.svgPath += "Z";
    });
  }

  rotateLeft() {
    this.selectedPicture.coordinates.map(coordinate => {
      let offset = this.containerSize - coordinate.x;
      coordinate.x = coordinate.y;
      coordinate.y = offset;
    });
  }

  rotateRight() {
    this.selectedPicture.coordinates.map(coordinate => {
      let offset = this.containerSize - coordinate.y;
      coordinate.y = coordinate.x;
      coordinate.x = offset;
    });
  }

  movePicture(offsetX: number, offsetY: number) {
    this.selectedPicture.coordinates.map(coordinate => {
      coordinate.x += offsetX;
      coordinate.y += offsetY;
    });
  }

  zoomPicture(zoom: number) {
    this.selectedPicture.coordinates.map(coordinate => {
      coordinate.x = Math.round(coordinate.x * zoom);
      coordinate.y = Math.round(coordinate.y * zoom);
    });
  }
}
