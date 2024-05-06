import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import {Row,Col} from "react-bootstrap"
import Profile from '../components/Profile'
import List from '../components/List'
import Add from '../components/Add'

 
function Dashboard() {
  const [user,SetUser]= useState('')
  useEffect(()=>{
    SetUser(sessionStorage.getItem("username"))
  },[])
  return (
    <div>
      <Header/>
      <div className='p-4'>
        <h2>Dashboard</h2>
        <h3>welcome <span className='text-danger'>{user}</span></h3>
          <Add/>
        <Row>
            <Col sm={12} md={8}>
              <div className='p-3 border border-3'>
                <List/>
              </div>
            </Col>
            <Col sm={12} md={4}>
              <Profile/>
            </Col>
        </Row>
      </div>
    </div>
  )
}

export default Dashboard