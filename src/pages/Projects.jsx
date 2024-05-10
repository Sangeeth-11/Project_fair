import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import ProjectCards from '../components/ProjectCards'
import { allProject } from '../services/allApis'

function Projects() {
  const [projects, SetProjects] = useState([])
  useEffect(() => {
    if (sessionStorage.getItem("token")) {

      getData()
    } else {
      console.log("login first");
    }
  }, [])
  const getData = async () => {
    const header = { "Authorization": `Bearer ${sessionStorage.getItem("token")}` }
    const result = await allProject(header)
    console.log(result);
    if (result.status == 200) {
      SetProjects(result.data)
    } else {
      console.log(result.response.data);
    }
  }
  return (
    <>
      <Header status={true} />
      <h2>All Projects</h2>
      <div className='p-5'>
        {
          projects.length > 0 ?
            projects.map(item => (
              <ProjectCards project={item} />
            )) :
            <h2>no projects</h2>
        }
      </div>
    </>
  )
}

export default Projects