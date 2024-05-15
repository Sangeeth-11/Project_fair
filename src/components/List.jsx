import React, { useContext } from 'react'
import Edit from './Edit'
import { deleteProject } from '../services/allApis'
import { toast } from 'react-toastify'
import { deleteProjectResponseContext } from '../Context_api/ContextShare'

function List({projects}) {
  const {SetDeleteResponse} = useContext(deleteProjectResponseContext)


  const handleDelete=async(id)=>{
    const header ={
      "Content-Type":"application/json",
      "Authorization":`Bearer ${sessionStorage.getItem("token")}`
    }
    const result = await deleteProject(header,id)
    if (result.status == 200) {
      SetDeleteResponse(result)
      toast.success("Project Deleted")
    } else {
      toast.error("Deleteion Failed")
    }
  }
  return (
    <>
    {
      projects.length>0?
      projects.map((item,index)=>(

        <div className='d-flex justify-content-between border shadow p-3 mb-3' key={index}>
            <h3>{item.title}</h3>
            <div>
                <a href="" className='btn'>
                <i className="fa-brands fa-github fa-2xl"></i>
                </a>
                <Edit project={item}/>
                <button className='btn' onClick={()=>{handleDelete(item._id)}}>
                <i className="fa-regular fa-trash-can fa-2xl"></i>
                </button>
            </div>
        </div>
      )):
      <p>no projects</p>
    }
    </>
  )
}

export default List