import React from 'react'
import './values.scss'
import leftImg from '../../../../assets/about/mainImg.png'
import accord from '../../../../assets/about/accord.png'
import menGroup from '../../../../assets/about/menGroup.png'
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
        <div className='values-wrapper'>
            <div className='values-topleft'>
                <h1>Our Values</h1>
                <div className='d-flex flex-column align-items-center gap-4 w-100 px-4'>
                <Buttons>
                Marketing Tactics
                </Buttons>
                <Buttons>
                Sales Approach
                </Buttons>
                <Buttons>
                New Technology
                </Buttons>
                <Buttons>
                Managed IT Solution
                </Buttons>
                </div>
                
            </div>
            <div className='values-topright'>
                <img src={accord} alt='////'/>
            </div>
        </div>
         <div className='values-wrapper-bottom'>
           <div className='values-wrapper-bottom-img'>
            <img src={menGroup} alt='groupMen' className=''/>
           </div>
         </div>
        </div>
        </div> 
    </>
  )
}

export default Values
