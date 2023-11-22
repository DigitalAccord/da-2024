import React, { Component } from 'react'
import './solutions.scss'
import arrow from "../../assets/arrow.png"
import thumb from "../../assets/thumb.png"
import arrow1 from '../../assets/Arrow 4.png'
import overflow from '../../assets/overflow.png'
import round from '../../assets/round.png'
import hover from '../../assets/hoverImg.png'
import { FiArrowUpRight } from 'react-icons/fi';
// import HorizontalScroll from 'react-scroll-horizontal'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import developmentImg from '../../assets/developImg.png'
const Solutions = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  // const text= '100px'
  return (
    <>
      <div className='solutions-wrapper'>
        <div className='container custom-container-solution'>
          <div class="d-md-flex flex-md-column flex-lg-row  gap-5">
            <div className='building-section'>
              <div className='building-section-middle text-center'>
                <div className='building-section-middle-col1 mb-5 mt-5'>
                  <h1 className='p-0 m-0'>0</h1>
                  <p className='p-0 m-0'>Happy<br />Cleints</p>

                </div>

                <div className='building-section-middle-col1 mb-5'>
                  <h1 className='text-white'>0</h1>
                  <p className='p-0 m-0 text-center' >IT Tickets<br />Solved</p>

                </div>
                <div className='building-section-middle-col1 mb-5 '>
                  <h1 className='text-white'>0</h1>
                  <p className='p-0 m-0'>Happy<br />Clients</p>
                </div>
              </div>
            </div>
            <div className='year-section-parent mt-2'>
              <div className='year-section'>
                <div className='year-section-left'>
                  <h3>About Us</h3>
                  <img src={arrow} alt='Arrow' className='arrow-image' />
                  <div className='hover-container'>
                    <div className='hover-icon'>
                    </div>
                  </div>
                </div>
                <div className='year-section-right'>
                  <h3>About Us</h3>

                  <div className='hover-container'>
                    <img src={thumb} alt='thumb' className='arrow-image' />
                    <div className='hover-icon'>
                    </div>
                  </div>
                </div>
              </div>

              <div className='progress-div d-flex gap-3 mt-3'>
                <div className='progress-div-box d-none d-md-block'>
                  <div className='text-center mt-3'>
                    <h1>2014</h1>
                    <h3>0%</h3>
                    <p>Digital Accords Beginning</p>
                  </div>
                </div>
                <div className='progress-div-box d-none d-md-block'>
                  <div className='text-center mt-3'>
                    <h1>2017</h1>
                    <h3>0%</h3>

                  </div>
                </div>
                <div className='progress-div-box d-none d-md-block'>
                  <div className='text-center mt-3'>
                    <h1>2020</h1>
                    <h3>0%</h3>

                  </div>
                </div>
                <div className='progress-div-box'>
                  <div className='text-center mt-3'>
                    <h1>Present</h1>
                    <h3>0%</h3>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
       
          <div className='scroll-width-div' >
          <div className='slider-bg'>
          
          <div className='solution-text-wrapper container'>
           
            <div className='solution-text-heading'>
              <div>
                <h1 className='text-white'>Solutions
                  To Grow Your
                  Business</h1>
              </div>
              <div className='media-query-flex'>
                <div className='media-query-circle'>
                  <img src={round} className='' />
                </div>
                <div className='circle-arrow'>
                  <img src={arrow1} className='img-fluid' alt='/' />
                  <p>Scroll</p>
                  <br />

                  <div className='overflow-blur'>


                  </div>
                </div>
              </div>
            </div>
            </div>

            <div className='design-development-wrapper container'>
              <div className='design-development-text'>
                <h1>Design &
                  Development</h1>
                  <p>IT Helpdesk is a crucial element of any workflow, as it is in most businesses. Digital Accord collaborates with your company to provide business continuity and professional management across all of your company’s devices.</p><p>Digital Accord is a managed service company in Brisbane that can help you with all of your IT issues quickly and effectively. To guarantee that your business runs smoothly, our in-house personnel strikes the appropriate balance between proactive monitoring and maintenance and reactive support.</p>
                  <button>More</button>
              </div>
              <div className='design-development-img'>
                <img src={developmentImg} className='' alt=''/>
              </div>
            </div>

            <div className='design-development-wrapper container'>
              <div className='design-development-text'>
                <h1>Design &
                  Development</h1>
                  <p>IT Helpdesk is a crucial element of any workflow, as it is in most businesses. Digital Accord collaborates with your company to provide business continuity and professional management across all of your company’s devices.</p><p>Digital Accord is a managed service company in Brisbane that can help you with all of your IT issues quickly and effectively. To guarantee that your business runs smoothly, our in-house personnel strikes the appropriate balance between proactive monitoring and maintenance and reactive support.</p>
                  <button>More</button>
              </div>
              <div className='design-development-img'>
                <img src={developmentImg} className='' alt=''/>
              </div>
            </div>

            <div className='design-development-wrapper container'>
              <div className='design-development-text'>
                <h1>Design &
                  Development</h1>
                  <p>IT Helpdesk is a crucial element of any workflow, as it is in most businesses. Digital Accord collaborates with your company to provide business continuity and professional management across all of your company’s devices.</p><p>Digital Accord is a managed service company in Brisbane that can help you with all of your IT issues quickly and effectively. To guarantee that your business runs smoothly, our in-house personnel strikes the appropriate balance between proactive monitoring and maintenance and reactive support.</p>
                  <button>More</button>
              </div>
              <div className='design-development-img'>
                <img src={developmentImg} className='' alt=''/>
              </div>
            </div>
       


        </div>
          </div>
              </div>
           
       
          
            
    

         
    </>
  )
}

export default Solutions