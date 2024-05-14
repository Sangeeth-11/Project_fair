import React, { useContext, useEffect, useState } from 'react'
import Header from '../components/Header'
import {Row,Col} from "react-bootstrap"
import Profile from '../components/Profile'
import List from '../components/List'
import Add from '../components/Add'
import { userProject } from '../services/allApis'
import {addProjectResponseContext, editProjectResponseContext} from '../Context_api/ContextShare'

 
function Dashboard() {
  const {addResponse,SetAddResponse}=useContext(addProjectResponseContext)
  const {editResponse,SetEditResponse}=useContext(editProjectResponseContext)
  const [user,SetUser]= useState('')
  const [projects,SetProjects] = useState([])
  useEffect(()=>{
    SetUser(sessionStorage.getItem("username"))
    if (sessionStorage.getItem("token")) {
      getData()
    } else {
      console.log("login first")
    }
  },[addResponse,editResponse])
 
  console.log(projects);
  const getData =async()=>{
    const header = { "Authorization": `Bearer ${sessionStorage.getItem("token")}` }
    const result = await userProject(header)
    if (result.status ==200) {
      SetProjects(result.data)
      console.log("data");
    } else {
      console.log(result.response.data);
    }
  }
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
                <List projects={projects}/>
              </div>
            </Col>
            <Col sm={12} md={4}>
              <Profile />
            </Col>
        </Row>
      </div>
    </div>
  )
}

export default Dashboard