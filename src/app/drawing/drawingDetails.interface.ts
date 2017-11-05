interface ICoordinates {
  x?: number;
  y?: number;
}

export interface IFigure {
  name?: string;
  color: string;
  coordinates: ICoordinates[];
}

export interface IDrawingDetails {
  shapes: IFigure[];
}