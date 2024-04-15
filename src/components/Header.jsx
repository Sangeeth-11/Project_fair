import React from 'react'
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand
} from 'mdb-react-ui-kit';

function Header() {
  return (
    <MDBNavbar light bgColor='light'>
      <MDBContainer fluid>
        <MDBNavbarBrand href=''>
          
          <i class="fa-solid fa-layer-group"></i>
          Project Fair
        </MDBNavbarBrand>
        <button className='btn btn-danger'>Logout &nbsp;<i class="fa-solid fa-person-walking-dashed-line-arrow-right"></i></button>
      </MDBContainer>
    </MDBNavbar>
  )
}

export default Header