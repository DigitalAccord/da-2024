import React from 'react'
import './banner.scss'
import RocketImage from '../../../assets/seo/rocket.png';
export const Banner = () => {
  return (
   <>
   <div className='seo-banner-section'>
    <div className='py-5'></div>
    <div className='seo-banner-rocket'>
          <img src={RocketImage} alt='Rocket' />
        </div>
        <div className='seo-banner-text'>
            <h1 >SEO</h1>
            <p>Search Engine Optimisation</p>
        </div>
   </div>
   <div className='seo-bottom-cloud'>
   <div className='dark-text-center'>
    <p>Digital Accord have a team of specialists that work in Search Engine Optimisation (SEO) and aim to lift your Google ranking for the keywords that matter to your business. We dedicate time to build quality content to bring through the right customers to your website./</p><p>
SEO is a long-term digital strategy that gradually builds the relevance of your website through on page optimisation and off page optimisation to create a large visibility of Google search queries to your audience. Your website visibility is a crucial aspect of your digital marketing and growing your overall presence online.</p>
   </div>
   <div className='cloud-bottom-bg'></div>
   </div>

   <div className='seo-works-btn-section'>
    <div className='seo-btn-section'>
        <h3>How Does</h3>
        <h1>SEO Work?</h1>
        <div className='seo-btn'>
            <button>Competitor Analysis</button>
            <button>Keyword Research</button>
            <button>Landing Page Optimisation</button>
            <button>Outreach Link Building</button>
            <button>Internal Link Building</button>
        </div>
    </div>
   </div>

   
   </>
  )
}
