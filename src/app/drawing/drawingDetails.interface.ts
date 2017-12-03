interface ICoordinates {
  x?: number;
  y?: number;
}

export interface IFigure {
  name?: string;
  color: string;
  svgPath?: string;
  coordinates: ICoordinates[];
}

export interface IDrawingDetails {
  shapes: IFigure[];
}
