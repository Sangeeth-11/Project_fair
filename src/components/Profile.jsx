import React, { useEffect, useState } from 'react'
import base_url from '../services/server_url'
import { editProfile } from '../services/allApis'
import { toast } from 'react-toastify'

function Profile() {
  const [open, SetOpen] = useState(false)
  const [user,SetUser] = useState({
    id:"",email:"",username:"",password:"",github:"",linkdin:"",profile:""
  })
  const [imagePreview,setImagePreview] = useState("")
  const [existingProfile,SetExistingProfile] = useState("")
  console.log(imagePreview);
  useEffect(()=>{
    if (sessionStorage.getItem('token')) {
      const userDetails = JSON.parse(sessionStorage.getItem('userDetails'))
      SetUser({
        id:userDetails._id,email:userDetails.email,username:userDetails.username,github:userDetails.github,linkdin:userDetails.linkdin,password:userDetails.password
      })
      SetExistingProfile(userDetails.profile)
    } 
  },[open])

  useEffect(()=>{
    if (user.profile) {
      setImagePreview(URL.createObjectURL(user.profile))
    } else {
      setImagePreview("")
    }
  },[user])
console.log(user);
  const handleProfileUpdate=async()=>{
    const {username,email,password,github,linkdin} = user
    if (!username ) {
      toast.success("no username");
    } else {
      const formData =new FormData()
      formData.append("username",username)
      formData.append("email",email)
      formData.append("password",password)
      formData.append("github",github)
      formData.append("linkdin",linkdin)
      formData.append("profile",imagePreview?user.profile:existingProfile)
      const header ={
        "Authorization":`Bearer ${sessionStorage.getItem('token')}`,
        "Content-Type":imagePreview?"multipart/form-data":"application/json"
      }
      const result = await editProfile(formData,header)
      if (result.status==200) {
        toast.success("profile updated successfully")
        sessionStorage.setItem('userDetails',JSON.stringify(result.data))
        SetOpen(!open)
      } else {
        toast.error(result.response.data)
      }
    }
  }
  return (
    <>
      <div className='m-1 p-3 border shadow'>
        <div className='d-flex justify-content-between'>

          <h3>Profile</h3>
          <button onClick={() => SetOpen(!open)} style={{border:"none",backgroundColor:"white"}}>
            <i className='fa-solid fa-down-long' />
          </button>
        </div>

        {open &&

          <div className='p-2'>
            <label style={{marginLeft:"125px"}}>
              <input type="file" onChange={(e)=>{SetUser({...user,profile:e.target.files[0]})}} value="" id='pp' style={{ display: 'none' }} />
              {
                existingProfile==""?
                <img src={imagePreview?imagePreview:"https://www.freeiconspng.com/thumbs/account-icon/account-profile-icon-1.png"} alt="" width={'150px'} className='img-fluid '/>
                :
                <img src={imagePreview?imagePreview:`${base_url}/uploads/${existingProfile}`} alt="" width={'150px'} className='img-fluid'/>
              }
            </label>
            <input type="text" name="" id="" onChange={(e)=>{SetUser({...user,username:e.target.value})}} value={user?.username} placeholder='UserName' className='form-control mt-3' />
            <input type="text" name="" id="" onChange={(e)=>{SetUser({...user,linkdin:e.target.value})}}  value={user?.linkdin} placeholder='LinkdIn' className='form-control mt-3' />
            <input type="text" name="" id="" onChange={(e)=>{SetUser({...user,github:e.target.value})}}  value={user?.github} placeholder='GitHub Id' className='form-control mt-3' />
            <div className='d-grid mt-4'>

            <button className=' btn btn-warning btn-block' onClick={handleProfileUpdate}>Update</button>
            </div>
          </div>
        }


      </div>
    </>
  )
}

export default Profile