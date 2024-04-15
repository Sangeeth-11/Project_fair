import React from 'react'
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand
} from 'mdb-react-ui-kit';

function Header({status}) {
  return (
    <MDBNavbar light bgColor='light'>
      <MDBContainer fluid>
        <MDBNavbarBrand href=''>
          
          <i className="fa-solid fa-layer-group"></i>
          Project Fair
        </MDBNavbarBrand>
        {
          !status &&
        <button className='btn btn-danger'>Logout &nbsp;<i className="fa-solid fa-person-walking-dashed-line-arrow-right"></i></button>
        }
      </MDBContainer>
    </MDBNavbar>
  )
}

export default Header