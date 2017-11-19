import { Component, ViewChild, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { IDrawingDetails } from './drawingDetails.interface';
import { AppSettings } from '../shared/constants';

@Component({
  selector: 'app-drawing',
  templateUrl: './drawing.component.html',
  styleUrls: ['./drawing.component.css']
})
export class AppDrawingComponent implements OnInit {
  @ViewChild('pictureComponent') pictureComponent;
  drawingDetails: IDrawingDetails;

  constructor(private http: HttpClient) {
    this.drawingDetails = {
      shapes: []
    }
  }

  ngOnInit(): void {
    this.http.get(`${AppSettings.baseURL}/shapes`).subscribe(data => {
      if (data) {
        this.drawingDetails = data as IDrawingDetails;
      }
    });
  }

  ngDoCheck() {
    console.log('ngDoCheck');
    this.pictureComponent.drawFigure(this.drawingDetails);
  }

}
