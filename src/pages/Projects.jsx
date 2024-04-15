import React from 'react'
import Header from '../components/Header'
import ProjectCards from '../components/ProjectCards'

function Projects() {
  return (
    <>
    <Header status={true}/>
    <h2>All Projects</h2>
    <div className='p-5'>
      <ProjectCards/>
    </div>
    </>
  )
}

export default Projects