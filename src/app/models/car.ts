import { NumberFormatStyle } from "@angular/common";
import { NumberValueAccessor } from "@angular/forms";

export interface Car{
    id:number,
    brandId:number,
    name:string,
    colorId:number,
    modelYear:number,
    dailyPrice:number,
    description:string  
}