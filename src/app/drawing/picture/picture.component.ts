import { OnDestroy, Component, ElementRef, ViewChild } from '@angular/core';
import { Surface, Path, Text, Group } from '@progress/kendo-drawing';

import { IDrawingDetails, IFigure } from '../drawingDetails.interface';

@Component({
  selector: 'app-picture',
  templateUrl: './picture.component.html',
  styleUrls: ['./picture.component.css']
})
export class PictureComponent implements OnDestroy {
  @ViewChild('surface')
  surfaceElement: ElementRef;
  containerSize: number = 500;
  surface: Surface;
  pictures: IDrawingDetails;

  constructor() { }

  public ngOnDestroy() {
    this.surface.destroy();
  }

  drawFigure(data: IDrawingDetails) {
    this.pictures = data;
    const element = this.surfaceElement.nativeElement;
    this.surface = Surface.create(element);
    const group = new Group();

    this.pictures.shapes.forEach(shape => {
      let path = new Path({
        fill: {
          color: shape.color
        },
        stroke: {
          color: shape.color
        }
      });
      shape.coordinates.forEach(coordinate => {
        path.lineTo(coordinate.x, coordinate.y);
      });
      path.close();
      group.append(path);
    })

    this.surface.draw(group);
  }

  rotateLeft() {
    this.pictures.shapes[0].coordinates.map(coordinate => {
      let offset = this.containerSize - coordinate.x;
      coordinate.x = coordinate.y;
      coordinate.y = offset;
    });
  }

  rotateRight() {
    this.pictures.shapes[0].coordinates.map(coordinate => {
      let offset = this.containerSize - coordinate.y;
      coordinate.y = coordinate.x;
      coordinate.x = offset;
    });
  }

  movePicture(offsetX: number, offsetY: number) {
    this.pictures.shapes[0].coordinates.map(coordinate => {
      coordinate.x += offsetX;
      coordinate.y += offsetY;
    });
  }

  zoomPicture(zoom: number) {
    this.pictures.shapes[0].coordinates.map(coordinate => {
      coordinate.x = Math.round(coordinate.x * zoom);
      coordinate.y = Math.round(coordinate.y * zoom);
    });
  }
}
