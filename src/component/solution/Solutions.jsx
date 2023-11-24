import React, { useEffect, useState } from 'react'
import './solutions.scss'
import arrow from "../../assets/arrow.png"
import thumb from "../../assets/thumb.png"
import arrow1 from '../../assets/Arrow 4.png'
import overflow from '../../assets/overflow.png'
import round from '../../assets/round.png'
import hover from '../../assets/hoverImg.png'
import { FiArrowUpRight } from 'react-icons/fi';
import developmentImg from '../../assets/developImg.png'
import digitalMarketingImg from '../../assets/digitalMarketingImg.png'
import itImg from '../../assets/ItImg.png'
import $ from 'jquery';
import Solution_respo from '../Sulution_respo/Solution_respo'
import waves1 from '../../assets/wave1.png'
const Solutions = () => {
  const intialWidth = window.innerWidth - 15
  const [windowWidth, setWindowWidth] = useState(intialWidth);
  // const text= '100px'
  const handleResize = () => {
    setWindowWidth(window.innerWidth - 15);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    const $scrollWidthDiv = $(".scroll-width-div");

    const handleWheel = function (event) {

      if (event.originalEvent.deltaY > 0 && this.scrollLeft < this.scrollWidth - this.clientWidth) {
        this.scrollLeft += event.originalEvent.deltaY;
        event.preventDefault();
      }


      if (event.originalEvent.deltaY < 0 && this.scrollLeft > 0) {
        this.scrollLeft += event.originalEvent.deltaY;
        event.preventDefault();
      }
    };

    $scrollWidthDiv.on('wheel', handleWheel);

    return () => {
      $scrollWidthDiv.off('wheel', handleWheel);
    };
  }, []);


  return (
    <>
      <div className='solutions-wrapper'>
        <div className='container custom-container-solution'>
          <div class="d-md-flex flex-md-column flex-lg-row  gap-5">
            <div className='building-section'>
              <div className='building-section-middle text-center'>
                <div className='building-section-middle-col1 mb-5 mt-0 mt-sm-5'>
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
                <div className='inner-layer'>
                    <div className='inner-layer1'>
                  <div className='text-center mt-3'>
                    <h1>2014</h1>
                    <h3>0%</h3>
                    <p>Digital Accords Beginning</p>
                    
                  </div>
                  </div>
                  </div>
                </div>
                <div className='progress-div-box d-none d-md-block'>
                  <div className='inner2-layer'>
                    <div className='inner2-layer1'>
                     
                        <div className='text-center mt-3'>
                              <h1>2017</h1>
                              <h3>0%</h3>

                          </div>
                    </div>
                  </div>
                </div>
                <div className='progress-div-box d-none d-md-block'>
                <div className='inner3-layer'>
                    <div className='inner3-layer1'>
                  <div className='text-center mt-3'>
                    <h1>2020</h1>
                    <h3>0%</h3>
                    </div>
                  </div>
                  </div>
                </div>
                <div className='progress-div-box'>
                <div className='inner4-layer'>
                    <div className='inner4-layer1'>
                      <div className='inner4-layer2'>
                        <div className='text-center mt-3'>
                          <h1>Present</h1>
                          <h3>0%</h3>

                        </div>
                      </div>
                    </div>
                </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='scroll-width-div' style={{ width: windowWidth }}>
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
            <div className='container d-md-none'>
              <Solution_respo />
            </div>
            <div className='design-development-wrapper container'>
              <div className='design-development-text'>
                <h1>Design &
                  Development</h1>
                <p>IT Helpdesk is a crucial element of any workflow, as it is in most businesses. Digital Accord collaborates with your company to provide business continuity and professional management across all of your company’s devices.</p><p>Digital Accord is a managed service company in Brisbane that can help you with all of your IT issues quickly and effectively. To guarantee that your business runs smoothly, our in-house personnel strikes the appropriate balance between proactive monitoring and maintenance and reactive support.</p>
                <div className='d-flex justify-content-end pt-2' >
                  <button>More</button>
                </div>
              </div>
              <div className='design-development-img'>
                <img src={developmentImg} className='' alt='' />
              </div>
            </div>

            <div className='design-development-wrapper container'>
              <div className='design-development-text'>
                <h1>
                  Digital<br />
                  Marketing</h1>
                <p>Digital Accord specialises in the ability to host, service, and maintain your websites with our various hosting solutions. As a specialist provider of hosting solutions throughout Australia, Digital Accord boasts our equipment in NextDC Data Centres, Australia wide to ensure our clients are serviced and maintained with ultra-fast website hosting. No reselling, no white labeling, all equipment, and resources are owned and maintained by Digital Accord.</p>
                <div className='d-flex justify-content-end pt-2 mx-5' >
                  <button>More</button>
                </div>
              </div>
              <div className='design-development-img'>
                <img src={digitalMarketingImg} className='' alt='' />
              </div>
            </div>

            <div className='design-development-wrapper container'>
              <div className='design-development-text'>
                <h1>Business<br />
                  I.T.</h1>
                <p>Our Brisbane IT experts can help transform your business through modernising your technology to future-proof your business. Our helpdesk team provides skilled Business IT solutions to ensure your business is always at peak performance.</p>
                <div className='d-flex justify-content-end pt-2 mx-5' >
                  <button>More</button>
                </div>
              </div>
              <div className='design-development-img'>
                <img src={itImg} className='' alt='' />
              </div>
            </div>



          </div>
        </div>
      </div>







    </>
  )
}

export default Solutions