import React, { useContext } from 'react'
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand
} from 'mdb-react-ui-kit';
import { useNavigate } from 'react-router-dom';
import { tokenAuthContext } from '../Context_api/AuthContext';

function Header({status}) {
  const {authStatus,SetAuthStatus} =useContext(tokenAuthContext)
  const usenavigate = useNavigate()
  const logout=()=>{
    sessionStorage.removeItem("token")
    sessionStorage.removeItem("username")
    usenavigate('/')
    SetAuthStatus(false)
  }
  return (
    <MDBNavbar light bgColor='light'>
      <MDBContainer fluid>
        <MDBNavbarBrand href=''>
          
          <i className="fa-solid fa-layer-group"></i>
          Project Fair
        </MDBNavbarBrand>
        {
          !status &&
        <button className='btn btn-danger' onClick={logout}>Logout &nbsp;<i className="fa-solid fa-person-walking-dashed-line-arrow-right"></i></button>
        }
      </MDBContainer>
    </MDBNavbar>
  )
}

export default Header