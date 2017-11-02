interface ICoordinates {
  x: number;
  y: number;
}

export interface IDrawingDetails {
  color: string;
  coordinates: ICoordinates[];
}