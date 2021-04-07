import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { customer } from '../models/customer';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  apiUrl = "https://localhost:44396"
  constructor(private httpClient:HttpClient) { }

  getCustomers():Observable<ListResponseModel<customer>>
  {
    let newPath =this.apiUrl+"/api/customers/getall";
    return this.httpClient.get<ListResponseModel<customer>>(this.apiUrl);
  }


}
