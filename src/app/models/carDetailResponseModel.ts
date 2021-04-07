import { CarDetail } from "./carDetail";
import { ResponseModel } from "./ResponseModel";

export interface carDetailResponseModel extends ResponseModel
{
   data:CarDetail[]
}