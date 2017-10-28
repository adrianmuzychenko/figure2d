import { OnDestroy, Component, ElementRef, ViewChild } from '@angular/core';
import { Surface, Path, Text, Group } from '@progress/kendo-drawing';

import { IDrawingDetails } from '../drawingDetails.interface';

@Component({
  selector: 'app-picture',
  templateUrl: './picture.component.html',
  styleUrls: ['./picture.component.css']
})
export class PictureComponent implements OnDestroy {

  constructor() { }

  @ViewChild('surface')
  private surfaceElement: ElementRef;
  private surface: Surface;

  public ngOnDestroy() {
    this.surface.destroy();
  }

  drawFigure(data: IDrawingDetails) {
    const element = this.surfaceElement.nativeElement;
    this.surface = Surface.create(element);
    let path = new Path({
      fill: {
        color: data.color,
        opacity: 0.4
      },
      stroke: {
        color: data.color
      }
    });
    data.coordinates.forEach(coordinate => {
      path.lineTo(coordinate.valueX, coordinate.valueY);
    })
    path.close();
    const group = new Group();
    group.append(path);
    this.surface.draw(group);
  }

}
