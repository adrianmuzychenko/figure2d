import {
  Directive,
  ElementRef,
  HostListener,
  Input,
  Output,
  EventEmitter
} from "@angular/core";
import { IFigure } from "../../drawingDetails.interface";

@Directive({
  selector: "[appMoveFigure]"
})
export class MovingFigureDirective {
  @Input() canMoveFigure: boolean;
  @Input() shape: IFigure;
  @Output() onChangeCanMoveFigure = new EventEmitter<boolean>();
  @Output() onCoordinatesChange = new EventEmitter<Array<any>>();

  constructor(private elementRef: ElementRef) {}

  @HostListener("mousedown", ["$event"])
  onMouseDown() {
    this.onChangeCanMoveFigure.emit(true);
  }

  @HostListener("mouseup", ["$event"])
  onMouseUp() {
    this.onChangeCanMoveFigure.emit(false);
  }

  @HostListener("mousemove", ["$event"])
  onMouseMove(event) {
    if (this.canMoveFigure) {
      this.shape.coordinates.map(coordinate => {
        coordinate.x += event.movementX;
        coordinate.y += event.movementY;
      });
      this.onCoordinatesChange.emit(this.shape.coordinates);
    }
  }
}
