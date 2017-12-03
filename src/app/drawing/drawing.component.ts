import { Component, OnInit } from "@angular/core";

import { IDrawingDetails } from "./drawingDetails.interface";
import { DrawingService } from "./drawing.service";

@Component({
  selector: "app-drawing",
  templateUrl: "./drawing.component.html",
  styleUrls: ["./drawing.component.css"],
  providers: [DrawingService]
})
export class AppDrawingComponent {
  constructor() {}
}
