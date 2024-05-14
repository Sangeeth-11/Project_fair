import React, { createContext, useState } from 'react'

export const addProjectResponseContext = createContext()
export const editProjectResponseContext = createContext()

function ContextShare({ children }) {
  const [addResponse, SetAddResponse] = useState('')
  const [editResponse, SetEditResponse] = useState('')
  return (
    <>
      <addProjectResponseContext.Provider value={{ addResponse, SetAddResponse }}>
        <editProjectResponseContext.Provider value={{ editResponse, SetEditResponse }}>
          {children}
        </editProjectResponseContext.Provider>
      </addProjectResponseContext.Provider>
    </>
  )
}

export default ContextShare