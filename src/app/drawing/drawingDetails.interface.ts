interface ICoordinate {
  valueX: number;
  valueY: number;
}

export interface IDrawingDetails {
  color: string;
  coordinates: ICoordinate[];
}