import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CarImage } from '../models/carImage';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarImageService {

  apiUrl = "https://localhost:44396/"

  constructor(private httpClient : HttpClient) { }

  getCarImages():Observable<ListResponseModel<CarImage>>
  {
     let newPath = this.apiUrl+"api/carimages/getall"
     return this.httpClient.get<ListResponseModel<CarImage>>(newPath)
  }

  getCarImagesById(carId:number):Observable<ListResponseModel<CarImage>>
  {
    let newPath = this.apiUrl+"api/carimages/getimagesbycarid?carId="+carId
    return this.httpClient.get<ListResponseModel<CarImage>>(newPath);
  }
}
