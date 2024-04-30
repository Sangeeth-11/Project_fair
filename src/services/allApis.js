import { commonApi } from "./commonApi";
import base_url from "./server_url";

export const userRegister = async(data)=>{
    return await commonApi("POST",`${base_url}/register`,data)
}