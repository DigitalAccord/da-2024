import React from 'react'
import './values.scss'
import leftImg from '../../../../assets/about/mainImg.png'
import Buttons from '../Buttons/Buttons'

const Values = () => {
  return (
    <>
     <div className='values-section'>
        <div className='values-section-left'>
            <div className='values-section-left-img'>
                <img src={leftImg} alt='bigImg'/>
            </div>
        </div>
        <div className='values-section-right'>
            <div className='values-topleft'>
                <h1>Our Values</h1>
                <Buttons>
                Marketing Tactics
                </Buttons>
            </div>
            <div className='values-topright'></div>
        </div>
        </div> 
    </>
  )
}

export default Values
