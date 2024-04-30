import axios from 'axios'

export const commonApi = async(reqMethod,url,reqBody,reqHeader)=>{
    const reqConfig ={
        method :reqMethod,
        url,
        data:reqBody,
        headers:reqHeader?reqHeader:{"content-type":"application/json"}
    }
    return await axios(reqConfig).then(res=>{return res}).catch(err=>{return err})
}