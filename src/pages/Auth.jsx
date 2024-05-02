import React, { useState } from 'react'
import {toast} from 'react-toastify'
import { userRegister } from '../services/allApis'



function Auth() {
    const [status,SetStatus]= useState(true)
    const [data,SetData]=useState({
      username:"",password:"",email:""
    })
    const changeStatus=()=>{
        SetStatus(!status)
    }

    const handleRegister=async()=>{
      // console.log(data);
      const {username,email,password} = data
      if (!username || !email || !password) {
        toast("Invalid inputs")
      } else {
        const result =await userRegister(data) 
        if (result.status == 200) {
          toast.success("registration success")
          SetData({username:"",email:"",password:""})
        } else {
          toast.error(result.response.data)
        }
      }
    }
  return (
    <section style={{height:"60vh"}}>
  <div className="container-fluid h-custom">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col-md-9 col-lg-6 col-xl-5 mt-3">
        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
          className="img-fluid" alt="Sample image"/>
      </div>
      {
        status?
      <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1 ">
        <form>
          
          <div className="divider d-flex align-items-center my-4">
            <h2 className="text-center mx-3 mb-0">Login</h2>
          </div>

      
          <div className="mb-4">
            <input type="email" id="form3Example3" className="form-control form-control-lg"
              placeholder="Enter a valid email address" />
          </div>

        
          <div className=" mb-3">
            <input type="password" id="form3Example4" className="form-control form-control-lg"
              placeholder="Enter password" />
            
          </div>

          <div className="d-flex justify-content-between align-items-center">
           
            <div className="form-check mb-0">
              <input className="form-check-input me-2" type="checkbox" value="" id="form2Example3" />
              <label className="form-check-label" for="form2Example3">
                Remember me
              </label>
            </div>
            <a href="#!" className="text-body">Forgot password?</a>
          </div>

          <div className="text-center text-lg-start mt-4 pt-2">
            <button type="button" className="btn btn-primary btn-lg"
              style={{paddingLeft: "2.5rem", paddingRight: "2.5rem"}}>Login</button>
            <p className="small fw-bold mt-2 pt-1 mb-0">Don't have an account? 
            <span onClick={changeStatus} className='text-danger'>

            Register
            </span>
            </p>
          </div>

        </form>
      </div>:
      <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1 mt-3">
      <form>
        
        <div className="divider d-flex align-items-center my-4">
          <h2 className="text-center mx-3 mb-0">Registration</h2>
        </div>

    
        <div className="mb-4">
          <input type="text" id="form3Example3" className="form-control form-control-lg" value={data.username}
            placeholder="Enter a User Name" onChange={(e)=>{SetData({...data,username:e.target.value})}}/>
        </div>
        <div className="mb-4">
          <input type="email" id="form3Example3" className="form-control form-control-lg" value={data.email}
            placeholder="Enter a valid email address" onChange={(e)=>{SetData({...data,email:e.target.value})}}/>
        </div>

      
        <div className=" mb-3">
          <input type="password" id="form3Example4" className="form-control form-control-lg" value={data.password}
            placeholder="Enter password" onChange={(e)=>{SetData({...data,password:e.target.value})}}/>
          
        </div>

        

        <div className="text-center text-lg-start mt-4 pt-2">
          <button type="button" className="btn btn-primary btn-lg"
            style={{paddingLeft: "2.5rem", paddingRight: "2.5rem"}}onClick={handleRegister}>Register</button>
          <p className="small fw-bold mt-2 pt-1 mb-0">Goto login page?
            <span onClick={changeStatus} className='text-danger'>
            &nbsp;
            Login
            </span>
            </p>
        </div>

      </form>
    </div>
      }
    </div>
  </div>

</section>
  )
}

export default Auth