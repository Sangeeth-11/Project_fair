import { commonApi } from "./commonApi";
import base_url from "./server_url";

export const userRegister = async(data)=>{
    return await commonApi("POST",`${base_url}/register`,data,"")
}
export const userLogin = async(data)=>{
    return await commonApi("POST",`${base_url}/login`,data,"")
}
export const addProject = async(data,header)=>{
    return await commonApi("POST",`${base_url}/add-project`,data,header)
}

export const homeProject = async()=>{
    return await commonApi("GET",`${base_url}/home-project`,"","")
}

export const allProject = async(header,search)=>{
    return await commonApi("GET",`${base_url}/all-project?search=${search}`,"",header)
}
export const userProject = async(header)=>{
    return await commonApi("GET",`${base_url}/user-project`,"",header)
}
export const editProject = async(data,header,id)=>{
    return await commonApi("PUT",`${base_url}/edit-project/${id}`,data,header)
}
export const deleteProject = async(header,id)=>{
    return await commonApi("DELETE",`${base_url}/delete-project/${id}`,{},header)
}