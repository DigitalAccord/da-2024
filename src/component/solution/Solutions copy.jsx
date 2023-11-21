import React, { useEffect, useState } from 'react'
import './solutions.scss'
import arrow from "../../assets/arrow.png"
import thumb from "../../assets/thumb.png"
import arrow1 from '../../assets/Arrow 4.png'
import overflow from '../../assets/overflow.png'
import round from '../../assets/round.png'
import hover from '../../assets/hoverImg.png'
import { FiArrowUpRight } from 'react-icons/fi';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Solutions = () => {
  const [cardsData, setCardsData] = useState([
    { id: 1, title: 'McCormacks', content: "DESIGN" },
    { id: 2, title: 'GW', content: "SEO | DESIGN" },
    
  ]);
  const [activeCardId, setActiveCardId] = useState(1);
  const [cardId, setCardId] = useState(-1);
  const [maxCard, setMaxCard] = useState(0);

  const handleCardClick = (id) => {
    setActiveCardId(id);
  };

  useEffect(() => {
    setMaxCard(cardsData.length);
  }, []);

  const handleCardChange = (index) => {
    setActiveCardId(index)
  };

  const settings = {

    dots: false,
    afterChange: handleCardChange,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    CenterMode: true,
    slidesToScroll: 1,
    initialSlide: 1,
    // autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }
    ]
  };
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
        <div className='scroll-wrapper' >
          <Slider {...settings}>
            <div>
              <div className='container ' >
                <div className='row mt-5'>
                  <div className='col-md-12'>

                    <div className='solution-text-wrapper mt-5'>
                      <div className='solution-text-wrapper-bg'></div>
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



                  </div>
                </div>
              </div>

            </div>

            <div>
              <div className='container ' >
                <div className='row mt-5'>
                  <div className='col-md-12'>

                    <div className='solution-text-wrapper mt-5'>
                      <div className='solution-text-wrapper-bg'></div>
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



                  </div>
                </div>
              </div>
            </div>

            <div>
                  <div className='container ' >
                <div className='row mt-5'>
                  <div className='col-md-12'>

                    <div className='solution-text-wrapper mt-5'>
                      <div className='solution-text-wrapper-bg'></div>
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



                  </div>
                </div>
                  </div>
            </div>


          </Slider>


        </div>


      </div>
    </>
  )
}

export default Solutions