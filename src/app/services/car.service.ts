import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Car } from '../models/car';
import { CarDetail } from '../models/carDetail';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  
  apiUrl = 'https://localhost:44396/api/'

  constructor(private httpClient:HttpClient) { }

  getCars():Observable<ListResponseModel<Car>>{
    let newPath = this.apiUrl + 'cars/getall'
    return this.httpClient.get<ListResponseModel<Car>>(newPath);  
  }

  getCarDetails():Observable<ListResponseModel<CarDetail>>{
    let newpath = this.apiUrl + 'cars/getcardetails' 
    return this.httpClient.get<ListResponseModel<CarDetail>>(newpath);
  }
  }

