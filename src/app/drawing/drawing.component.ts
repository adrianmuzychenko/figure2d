import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-drawing',
  templateUrl: './drawing.component.html',
  styleUrls: ['./drawing.component.css']
})
export class AppDrawingComponent {
  @ViewChild('pictureComponent') pictureComponent;
  constructor() { }

  onDraw(data) {
    this.pictureComponent.drawFigure(data);
  }

}
