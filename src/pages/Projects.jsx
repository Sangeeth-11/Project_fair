import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import ProjectCards from '../components/ProjectCards'
import { allProject } from '../services/allApis'
import { Col, Row } from 'react-bootstrap'
import { toast } from 'react-toastify'
import Auth from './Auth'

function Projects() {
  const [projects, SetProjects] = useState([])
  const [logStatus, SetLogStatus] = useState(false)
  const [search,SetSearch] = useState("")
  useEffect(() => {
    console.log("useEffect is running...");
    if (sessionStorage.getItem("token")) {
      SetLogStatus(true)
      getData()
    } else {
      toast.warning("login first to view the projects");
      console.log("login");
    }
  }, [search])
  const getData = async () => {
    const header = { "Authorization": `Bearer ${sessionStorage.getItem("token")}` }
    const result = await allProject(header,search)
    console.log(result);
    if (result.status == 200) {
      SetProjects(result.data)
    } else {
      console.log(result.response.data);
    }
  }
  return (
    <>
      {
        logStatus ?
          <div>
            <Header status={true} />
            <div className='d-flex justify-content-between p-5'>
              <h2>All Projects</h2>
              <input type='text' name='' id="" className='form-control w-25' placeholder='Enter Language to search' onChange={(e)=>{SetSearch(e.target.value)}} />
            </div>

            <div className='p-5'>

              <Row>
                {
                  projects.length > 0 ?
                    projects.map(item => (
                      <Col>

                        <ProjectCards project={item} />
                      </Col>
                    ))

                    :
                    <h2>no projects</h2>
                }
              </Row>

            </div>
          </div>
          :
          <Auth />
      }
    </>
  )
}

export default Projects