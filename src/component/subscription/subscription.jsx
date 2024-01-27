import React, { useState, useEffect } from 'react';
import './subscription.scss'
import arrow from '../../assets/Arrow 4.png'
import map from '../../assets/banner/map.png'
import { Toaster, toast } from 'sonner'
import map_pointer from '../../assets/contact/market.png'
import { useNavigate } from 'react-router-dom'

const Subscription = () => {
  return (
    <>
      <div className='blog-conected'>
        <div className='blog-conected-content'>
          <h1>Want To Stay Connected?</h1>
          <p>Get full access to exclusive offers, Package Deals and more!</p>            
        </div>
      </div>
    </>
  )
}

export default Subscription