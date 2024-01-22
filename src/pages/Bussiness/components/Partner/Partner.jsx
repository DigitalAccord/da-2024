import React from 'react'
import './partner.scss'
import roundArrow from '../../../../assets/bussiness/Group 1178.png'
import roundArrow1 from '../../../../assets/bussiness/Group 1179.png'
import { PartnerSvg } from '../../../../assets/svgIcons'
export const Partner = () => {
  return (
   <>
   <div className='partner-bg'>
    <div className='partner-wrapper'>
      <div className='partner-wrapper-inner'>
         <div className='partner-heading'>
            <h1>Let us be your partner</h1>
            <p>Pellentesque euismod malesuada velit, at vehicula sem. Proin augue eros, placerat non velit sit amet, cursus volutpat mauris. Vivamus pellentesque mi id sodales interdum. Pellentesque pretium tellus diam</p>
         </div>

         <div className='partner-box-wrapper'>
            <div className='partner-inner-box'>
            <div className='partner-box1'>
                <div className='partner-box1-inner'>
                    <img src={roundArrow} alt="" />
                </div>
            </div>
            <div className='partner-box2'>
                <h1>Reliable, On Time Support</h1>
                <p>Are you fed up with IT companies failing to deliver on their promises? Within our dedicated service level agreements, Digital Accord’s in-house team specialises in resolving any type of IT issue.</p>
            </div>
            <div className='partner-box3'>

            <div className='partner-box1-inner'>
                    <img src={roundArrow1} alt="" />
                </div>
            </div>
            </div>

            <div className='partner-inner-box2'>
            <div className='partner-box1'>
               <h1>Reliable, On Time Support</h1>
               <p>Whether you need equipment guidance or technical support, our friendly in-house staff of IT professionals are here to assist you.</p>
            </div>
            <div className='partner-box2'>
                <div className='partner-box2-svg'>
                        <PartnerSvg/>
                </div>
            </div>
            <div className='partner-box3'>
            <h1>Reliable, On Time Support</h1>
               <p>Whether you need equipment guidance or technical support, our friendly in-house staff of IT professionals are here to assist you.</p>
           
            </div>
            </div>
         </div>
      </div>  
    </div>
   </div>
   </>
  )
}
