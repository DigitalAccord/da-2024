import React from 'react'
import './about.scss'
import Values from './component/Values/Values'
const About = () => {
  return (
   <>
   <div className='about-section'>

   <div className='about-container container'>
  <div className='about-text-wrapper'>
    <h1>About Us</h1>
    <div className='bg-about-text'>
     <div className='bg-about-text-inner'>
     <p>As one of Brisbane’s leading innovative digital agencies, we are specialists in Website Design and Web Development, Digital Marketing, and Business IT Solutions. As the digital age increasingly advances and technology evolves, the need for businesses to have a strong digital presence is paramount. We build websites with advanced design and ultimate usability, that generate more traffic and enquiries for your business.</p>
      <p>As one of Brisbane’s leading innovative digital agencies, we are specialists in Website Design and Web Development, Digital Marketing, and Business IT Solutions. As the digital age increasingly advances and technology evolves...</p>
      <button>Our Team</button>
     </div>
    </div>
  </div>
   </div>
   </div>
   <Values/>
   </>
  )
}

export default About