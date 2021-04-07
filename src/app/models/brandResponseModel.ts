import { brand } from "./brand";
import { ResponseModel } from "./ResponseModel";

export interface BrandResponseModel extends ResponseModel 
{
    data:brand[]
}