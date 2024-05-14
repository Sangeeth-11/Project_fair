import React from 'react'
import Edit from './Edit'

function List({projects}) {
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
                <button className='btn'>
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