import { customer } from "./customer";
import { ResponseModel } from "./ResponseModel";

export interface customerResponseModel extends ResponseModel
{
    data:customer[];
}