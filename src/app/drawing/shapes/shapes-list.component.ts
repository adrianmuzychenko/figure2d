import { Component, Output, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { ToastrService } from 'ngx-toastr';

import { IDrawingDetails } from '../drawingDetails.interface';
import { AppSettings } from '../../shared/constants';

@Component({
  selector: 'app-shapes-list',
  templateUrl: './shapes-list.component.html',
  styleUrls: ['./shapes-list.component.css']
})
export class ShapesListComponent {
  @Input('shapes') drawingDetails: IDrawingDetails;

  constructor(private http: HttpClient, private toastr: ToastrService) { }

  addShape() {
    this.drawingDetails.shapes.push({
      coordinates: [{ x: 0, y: 0 }],
      color: "#396a34"
    });
  }

  removeShape(shapeIndex: number) {
    this.drawingDetails.shapes.splice(shapeIndex, 1);
  }

  saveData() {
    this.http.post(`${AppSettings.baseURL}/shapes`, this.drawingDetails)
      .subscribe(data =>{
        this.toastr.success(data['message'], 'Success!', {positionClass: 'toast-bottom-right'});
      }, err =>{
        this.toastr.error(err['message'], 'Error!', {positionClass: 'toast-bottom-right'});        
      });
  }

  onShapeDrop(e: any, insertIndex: number) {
    this.drawingDetails.shapes.splice(e.dragData.startIndex, 1);
    this.drawingDetails.shapes.splice(insertIndex, 0, e.dragData.shape);
  }

}
