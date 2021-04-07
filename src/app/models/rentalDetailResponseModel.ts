import { RentalDetail } from "./rentalDetail";
import { ResponseModel } from "./ResponseModel";

export interface RentalDetailResponseModel extends ResponseModel
{
    data:RentalDetail[]
}