import React, { useEffect, useState, useRef } from 'react'
import './solutions.scss'
import CountUp from 'react-countup';
import Slider from "react-slick";
import arrow1 from '../../assets/Arrow 4.png'
import round from '../../assets/round.png'
import developmentImg from '../../assets/developImg.png'
import digitalMarketingImg from '../../assets/digitalMarketingImg.png'
import itImg from '../../assets/ItImg.png'
import $ from 'jquery';
import Solution_respo from '../Sulution_respo/Solution_respo'
import { Link } from 'react-router-dom';



const Solutions = () => {
  const intialWidth = window.innerWidth - 18;
  const [windowWidth, setWindowWidth] = useState(intialWidth);
  const [windowWidth1, setWindowWidth1] = useState(intialWidth);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef();

  const handleResize = () => {
    setWindowWidth(window.innerWidth - 17);
  };

  const handleResize1 = () => {
    setWindowWidth1(window.innerWidth * 80 / 100);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    window.addEventListener('resize', handleResize1);
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('resize', handleResize1);
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.7,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [sectionRef]);

  // useEffect(() => {
  //   const $scrollWidthDiv = $('.scroll-width-div');

  //   const handleWheel = function (event) {
  //     console.log(event, event.target.src?.includes("ItImg.71e97b626fb6faf9ca80"))
  //     if (event.target.src?.includes("ItImg.71e97b626fb6faf9ca80")) {
  //       document.body.removeEventListener('wheel', (event) => {
  //         event.preventDefault();
  //       }, { passive: false });
  //       document.body.style.overflowY = 'scroll';
  //       return;
  //     }
  //     if (isVisible) {

  //       if (event.originalEvent.deltaY > 0 && this.scrollLeft < this.scrollWidth - this.clientWidth) {
  //         document.body.addEventListener('wheel', (event) => {
  //           event.preventDefault();
  //         }, { passive: false });
  //         this.scrollLeft += event.originalEvent.deltaY;
  //         event.preventDefault();
  //       }

  //       if (event.originalEvent.deltaY < 0 && this.scrollLeft > 0) {
  //         this.scrollLeft += event.originalEvent.deltaY;
  //         event.preventDefault();
  //       }



  //     }


  //   };

  //   $scrollWidthDiv.on('wheel', handleWheel);

  //   return () => {
  //     $scrollWidthDiv.off('wheel', handleWheel);
  //   };
  // }, [isVisible])

  useEffect(() => {
    const $scrollWidthDiv = $('.scroll-width-div');
  
    const handleWheel = function (event) {
      console.log(event, event.target.src?.includes("ItImg.71e97b626fb6faf9ca80"))
     
      if (isVisible) {
        const scrollWidthDiv = $scrollWidthDiv[0]; // Get the DOM element from the jQuery object
  
        if (event.originalEvent.deltaY > 0 && scrollWidthDiv.scrollLeft < scrollWidthDiv.scrollWidth - scrollWidthDiv.clientWidth) {
          document.body.addEventListener('wheel', preventDefault, { passive: false });
          scrollWidthDiv.scrollLeft += event.originalEvent.deltaY;
          event.preventDefault();
        }
  
        if (event.originalEvent.deltaY < 0 && scrollWidthDiv.scrollLeft > 0) {
          scrollWidthDiv.scrollLeft += event.originalEvent.deltaY;
          event.preventDefault();
        }

        if (event.target.src?.includes("ItImg.71e97b626fb6faf9ca80")) {
          document.body.removeEventListener('wheel', preventDefault, { passive: false });
          document.body.style.overflowY = 'scroll';
          return;
        }
      }
    };
  
    const preventDefault = (event) => {
      event.preventDefault();
    };
  
    $scrollWidthDiv.on('wheel', handleWheel);
  
    return () => {
      $scrollWidthDiv.off('wheel', handleWheel);
      document.body.removeEventListener('wheel', preventDefault);
      document.body.style.overflowY = ''; // Reset the body vertical overflow style
    };
  }, [isVisible]);




  // useEffect(() => {
  //   const handleBodyScroll = (event) => {
  //     // Prevent body scroll when the specific section is visible
  //     if (isVisible) {
  //       event.preventDefault();
  //     }
  //   };

  //   // Add event listener to disable body scroll
  //   document.body.addEventListener('wheel', handleBodyScroll, { passive: false });

  //   return () => {
  //     // Remove event listener when the component unmounts
  //     document.body.removeEventListener('wheel', handleBodyScroll);
  //   };
  // }, [isVisible]);

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: false,
    autoplaySpeed: 2000,

  };


  return (
    <>

      <div className='solutions-wrapper'>
        <div className='container custom-container-solution' >
          <div className="d-md-flex flex-md-column flex-lg-row  gap-5">
            <div className='building-section'>
              <div className='building-section-middle text-center'>
                <div className='building-section-middle-col1 mb-5 mt-0 mt-sm-5'>
                  <h1 > <CountUp start={0} end={100} duration={3} /></h1>
                  <p className='p-0 m-0'>Happy<br />Clients</p>

                </div>

                <div className='building-section-middle-col1 mb-5'>
                  <h1 className='text-white'><CountUp start={0} end={90} duration={5} /></h1>
                  <p className='p-0 m-0 text-center' >IT Tickets<br />Solved</p>

                </div>
                <div className='building-section-middle-col1 mb-5 '>
                  <h1 className='text-white'><CountUp start={0} end={130} duration={5} /></h1>
                  <p className='p-0 m-0'>Google <br />Reviews</p>
                </div>
              </div>
            </div>
            <div className='year-section-parent mt-2'>
              <div className='year-section'>

                <Link to='/about' className='year-section-left year-section-box text-decoration-none'>
                  <h3>About <br /> Us</h3>
                </Link>

                <Link to='/development' className='year-section-right year-section-box text-decoration-none'>
                  <h3>IT <br />Solutions</h3>
                </Link>
              </div>

              <div className='progress-div d-none d-md-flex gap-3 mt-3'>
                <div className='progress-div-box'>
                  <div className='text-center  mt-3'>
                    <h1>2014</h1>
                    <h3>0%</h3>
                    <p>Digital Accords Beginning</p>

                  </div>
                </div>

                <div className='progress-div-box'>
                  <div className='text-center mt-3'>
                    <h1>2017</h1>
                    <h3>0%</h3>
                  </div>
                </div>

                <div className='progress-div-box'>
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
              <div className='progress-div mobile gap-1 d-md-none mt-3'>
                <Slider {...settings}>
                  <div className='progress-div-box first'>
                    <div className='progress_text '>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vitae placerat dui, et rhoncus sapien.</p>
                      <h3>0%</h3>
                      <h1>2014</h1>

                    </div>
                  </div>
                  <div className='progress-div-box second'>
                    <div className='progress_text '>
                      <h1>2017</h1>
                      <h3>0%</h3>
                    </div>
                  </div>
                  <div className='progress-div-box third'>
                    <div className='progress_text '>
                      <h1>2020</h1>
                      <h3>0%</h3>
                    </div>
                  </div>
                  <div className='progress-div-box fourth'>
                    <div className='progress_text '>
                      <h1>Present</h1>
                      <h3>0%</h3>
                    </div>
                  </div>
                </Slider>
              </div>
            </div>
          </div>
        </div>

        <div className='scroll-width-div' style={{ width: windowWidth }} ref={sectionRef}>
          <div className='slider-bg'>
            <div className='d-flex justify-content-center align-items-center d-none d-md-block' style={{ width: windowWidth1 }}>
              <div className='solution-text-wrapper container' >
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
                      <div className='overflow-blur'></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className='d-flex justify-content-center align-items-center' style={{ width: windowWidth1 }}>

              <div className='design-development-wrapper container'>
                <div className='design-development-text'>
                  <h1>Design &
                    Development</h1>
                  <p>IT Helpdesk is a crucial element of any workflow, as it is in most businesses. Digital Accord collaborates with your company to provide business continuity and professional management across all of your company’s devices.</p><p>Digital Accord is a managed service company in Brisbane that can help you with all of your IT issues quickly and effectively. To guarantee that your business runs smoothly, our in-house personnel strikes the appropriate balance between proactive monitoring and maintenance and reactive support.</p>
                  <div className='d-flex justify-content-end pt-2' >
                    <Link to='/development' className='btn-development'>More</Link>
                  </div>
                </div>
                <div className='design-development-img'>
                  <img src={developmentImg} className='' alt='' />
                </div>
              </div>
            </div>

            <div className='d-flex justify-content-center align-items-center' style={{ width: windowWidth1 }}>
              <div className='design-development-wrapper container'>
                <div className='design-development-text'>
                  <h1>
                    Digital<br />
                    Marketing</h1>
                  <p>Digital Accord specialises in the ability to host, service, and maintain your websites with our various hosting solutions. As a specialist provider of hosting solutions throughout Australia, Digital Accord boasts our equipment in NextDC Data Centres, Australia wide to ensure our clients are serviced and maintained with ultra-fast website hosting. No reselling, no white labeling, all equipment, and resources are owned and maintained by Digital Accord.</p>
                  <div className='d-flex justify-content-end pt-2 mx-5' >
                    <Link to='/add' className='btn-development'>More</Link>
                  </div>
                </div>
                <div className='design-development-img'>
                  <img src={digitalMarketingImg} className='' alt='' />
                </div>
              </div>
            </div>
            <div className='d-flex justify-content-center align-items-center' style={{ width: windowWidth1 }}>
              <div className='design-development-wrapper container'>
                <div className='design-development-text'>
                  <h1>Business<br />
                    I.T.</h1>
                  <p>Our Brisbane IT experts can help transform your business through modernising your technology to future-proof your business. Our helpdesk team provides skilled Business IT solutions to ensure your business is always at peak performance.</p>
                  <div className='d-flex justify-content-end pt-2 mx-5' >
                    <Link to='/bussiness' className='btn-development'>More</Link>
                  </div>
                </div>
                <div className='design-development-img'>
                  <img src={itImg} className='' alt='' />
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
      <Solution_respo />









    </>
  )
}

export default Solutions