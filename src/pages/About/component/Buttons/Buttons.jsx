import React, { Children } from 'react'
import './buttons.scss'

const Buttons = ({Children}) => {
  return (
    <>
    <button>
   {Children}
    </button>
    </>
  )
}

export default Buttons
