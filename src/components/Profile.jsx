import React from 'react'

function Profile() {
  return (
    <>
    <div className='m-1 p-3 border shadow'>
      <h3>Profile</h3>
      <div className='p-2'>
        <label htmlFor="pp">
          <input type="file" value="" id='pp' style={{display:'none'}}/>
          <img src="https://www.freeiconspng.com/thumbs/account-icon/account-profile-icon-1.png"  alt="" width={'150px'}/>
        </label>
        <input type="text" name="" id="" placeholder='UserName' className='form-control mt-3'/>
        <input type="text" name="" id="" placeholder='LinkdIn' className='form-control mt-3'/>
        <input type="text" name="" id="" placeholder='GitHub Id' className='form-control mt-3'/>
      </div>
    </div>
    </>
  )
}

export default Profile