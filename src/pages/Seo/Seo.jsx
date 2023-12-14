import React from 'react'
import './seo.scss'
import { Banner } from './component/Banner/Banner'
import Gallery from './component/Gallery/Gallery'
import Accordian from './component/Accordian/Accordian'
import Category from '../../component/category/Category'
import LetsTalk from '../../component/LetsTalk/LetsTalk'

const Seo = () => {
  return (
   <>
   <Banner/>
  <Gallery/>
  <Category/>
  <Accordian/>
  <LetsTalk/>
   
   </>
  )
}

export default Seo