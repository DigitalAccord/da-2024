import React from 'react'
import './business.scss'
import bussiness from '../../assets/bussiness/bussiness_ban.png'
import Whats from './components/whats/Whats'
import Synergy from './components/Synergy/Synergy'
import { ChooseUse } from './components/ChooseUse/ChooseUse'
import { Partner } from './components/Partner/Partner'
import TellUs from './components/TellUs/TellUs'
import Digital from './components/Digital/Digital'
import LetsTalk from '../../component/LetsTalk/LetsTalk'
import Accordian from '../Seo/component/Accordian/Accordian'
const Bussiness = () => {
  return (
    <>
    <div className="bussiness_wrapper">
       <div className='container bussiness_container'>
        <div className='bussiness_banner_section'>
            <div className='bussiness_banner_left'>
                <img src={bussiness} alt="" />
            </div>
            <div className='bussiness_banner_right'>
                
                    <p>Reliable IT Support that you</p>
                    <h1>CAN TRUST.</h1>
               
            </div>
        </div>
        </div> 
    </div>
    <Whats/>
    <Synergy/>
    <ChooseUse/>
    <Partner/>
    <TellUs/>
    <Digital/>
    <Accordian/>
    <LetsTalk/>
    
    </>
  )
}

export default Bussiness