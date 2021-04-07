import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { brand } from '../models/brand';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class BrandService {

  apiUrl = "https://localhost:44396/api/brands/getall";
  constructor(private httpClient:HttpClient) { }

  getBrands()
  {
      return this.httpClient.get<ListResponseModel<brand>>(this.apiUrl);
  }
}
