import { NumberFormatStyle } from "@angular/common";
import { NumberValueAccessor } from "@angular/forms";

export interface Car{
    id: number;
    name: string;
    brandId: number;
    colorId: number;
    modelYear: number;
    dailyPrice: number;
    description: string;
}