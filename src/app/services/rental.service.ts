import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Rental } from '../models/rental';
import { RentalDetail } from '../models/rentalDetail';

@Injectable({
  providedIn: 'root'
})
export class RentalService {
  apiUrl="https://localhost:44396/api/rentals/"
  constructor(private httpClient : HttpClient) { }

  getRentalDetails(): Observable<ListResponseModel<RentalDetail>>
  {
      let newPath= this.apiUrl+"getrentaldetails";
      return this.httpClient.get<ListResponseModel<RentalDetail>>(newPath);
  }

  getRentals():Observable<ListResponseModel<Rental>>
  {
    let path= this.apiUrl+"getall";
    return  this.httpClient.get<ListResponseModel<Rental>>(path);
  }
}
