import React from 'react'
import './buttons.scss'

const Buttons = ({children}) => {
  return (
    <>
   <div className='button'>
   <button>
   {children}
    </button>
   </div>
    </>
  )
}

export default Buttons
