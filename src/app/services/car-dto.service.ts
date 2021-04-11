import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CarDto } from '../models/carDto';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarDtoService {

  apiUrl = 'https://localhost:44396/api/'
  constructor(private httpClient:HttpClient) { }

  getCarsDetails():Observable<ListResponseModel<CarDto>> {
    let newPath = this.apiUrl + "cars/getcardetails";
    return this.httpClient.get<ListResponseModel<CarDto>>(newPath);
  }
  getCarsDetailsByBrandId(brandId:number):Observable<ListResponseModel<CarDto>> {
    let newPath = this.apiUrl + "cars/getcardetailsbybrandid?brandId=" + brandId
    return this.httpClient.get<ListResponseModel<CarDto>>(newPath);
  }
  getCarsDetailsByColorId(colorId:number):Observable<ListResponseModel<CarDto>> {
    let newPath = this.apiUrl + "cars/getcardetailsbycolorid?colorId=" + colorId;
    return this.httpClient.get<ListResponseModel<CarDto>>(newPath);
  }
  getCarsDetailsByCarId(carId:number):Observable<ListResponseModel<CarDto>> {
    let newPath = this.apiUrl + "cars/getcardetailsbyid?id=" + carId;
    return this.httpClient.get<ListResponseModel<CarDto>>(newPath);
  }
  getCarDetailsByBrandAndColor(brandId:number,colorId:number):Observable<ListResponseModel<CarDto>>{
    let newPath = this.apiUrl + "cars/getcarsbycolorandbrand?brandId=+" + brandId + "&colorId=" + colorId;
    return this.httpClient.get<ListResponseModel<CarDto>>(newPath); 
  }
}
