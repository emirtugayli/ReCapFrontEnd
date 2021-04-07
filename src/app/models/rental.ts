import { ResponseModel } from "./ResponseModel";

export interface Rental{
    id:number;
    carId:number;
    customerId:number;
    rentDate:number;
    returnDate:number;
}