import { OnDestroy, Component, ElementRef, ViewChild } from '@angular/core';

import { IDrawingDetails, IFigure } from '../drawingDetails.interface';

@Component({
  selector: 'app-picture',
  templateUrl: './picture.component.html',
  styleUrls: ['./picture.component.css']
})
export class PictureComponent {
  containerSize: number = 500;
  pictures: IDrawingDetails;
  _selectedPicture: IFigure;

  get selectedPicture(): IFigure {
    if (this._selectedPicture == null && this.pictures !== null) {
      this._selectedPicture = this.pictures.shapes[0];
    }
    return this._selectedPicture;
  }
  set selectedPicture(picture: IFigure) {
    this._selectedPicture = picture;
  }

  constructor() { }

  drawFigure(data: IDrawingDetails) {
    this.pictures = data;

    this.pictures.shapes.forEach(shape => {
      shape.svgPath = "M";
      shape.coordinates.forEach((coordinate) => {
        shape.svgPath += ` ${coordinate.x} ${coordinate.y}`
      });
      shape.svgPath += "Z";
    })
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
