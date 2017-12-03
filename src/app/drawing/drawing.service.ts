import { EventEmitter, Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { ToastrService } from "ngx-toastr";

import { AppSettings } from "../shared/constants";
import { IDrawingDetails } from "./drawingDetails.interface";

@Injectable()
export class DrawingService {
  drawingDetails: IDrawingDetails = {
    shapes: []
  };

  constructor(private http: HttpClient, private toastr: ToastrService) {
    this.http.get(`${AppSettings.baseURL}/shapes`).subscribe(data => {
      if (data) {
        this.drawingDetails = data as IDrawingDetails;
      }
    });
  }

  saveDrawingDetails() {
    this.http
      .post(`${AppSettings.baseURL}/shapes`, this.drawingDetails)
      .subscribe(
        data => {
          this.toastr.success(data["message"], "Success!", {
            positionClass: "toast-bottom-right"
          });
        },
        err => {
          this.toastr.error(err["message"], "Error!", {
            positionClass: "toast-bottom-right"
          });
        }
      );
  }
}
