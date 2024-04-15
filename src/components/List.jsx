import React from 'react'
import Edit from './Edit'

function List() {
  return (
    <>
        <div className='d-flex justify-content-between border shadow p-3 mb-3'>
            <h3>Project1</h3>
            <div>
                <a href="" className='btn'>
                <i className="fa-brands fa-github fa-2xl"></i>
                </a>
                <Edit/>
                <button className='btn'>
                <i className="fa-regular fa-trash-can fa-2xl"></i>
                </button>
            </div>
        </div>
    </>
  )
}

export default List