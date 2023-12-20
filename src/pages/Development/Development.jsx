import React, { useEffect, useState } from 'react'
import './development.scss';
import CenterMode from '../../component/MySwiper/Swiper'
import { CheckIcon } from '../../assets/svgIcons';
import { DeviceFrameset } from 'react-device-frameset'
import 'react-device-frameset/styles/marvel-devices.min.css'
import mobile from '../../assets/development/mobile.png'



const Development = () => {
    // const [currentSection, setCurrentSection] = useState(0);


    // var he = 100;
    // const test = {
    //     background: `linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(254,254,254,1) ${he}%, rgba(0,0,0,1) ${he}%, rgba(3,3,3,1) 100%)`,
    // }
    useEffect(() => {
        const handleScroll = () => {
          const scrollTop = window.scrollY || document.documentElement.scrollTop;
          const timelineSection = document.getElementById('timelineSection');
          const rightsContainer = document.querySelector('.rights');
          const gradientLine = rightsContainer ? rightsContainer.querySelector('.gradient-line') : null;
    
          if (timelineSection && gradientLine) {
            const timelineHeight = timelineSection.offsetHeight;
            const timelineTop = timelineSection.offsetTop;
            const maxGradientHeight = timelineHeight - 400;
    
            if (scrollTop >= timelineTop && scrollTop <= timelineTop + timelineHeight) {
              const scrollPercentage = (scrollTop - timelineTop) / (timelineHeight - window.innerHeight);
              const gradientHeight = Math.min(maxGradientHeight, maxGradientHeight * scrollPercentage);
              gradientLine.style.height = `${gradientHeight}px`;
            }
          }
        };
    
        window.addEventListener('scroll', handleScroll);
    
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);
      
    return (
        <>
            <div className='development-banner-section'>
                <div className='development_text'>
                    <h1>Website Design &</h1>
                    <span>Development.</span>
                </div>
            </div>
            <div className='our-slider'>
                <CenterMode />
            </div>
            <div className='dev-middle-text'>
                <p>Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit. Curabitur ut felis nunc.
                    Sed molestie rhoncus rutrum. Maecenas lorem mi,
                    hendrerit fermentum congue pretium, iaculis sed orci.
                    Proin vel eros risus. Maecenas non risus eget turpis ultricies pharetra at sed mauris.
                    Maecenas commodo massa consequat auctor lacinia. Sed hendrerit pellentesque placerat.
                    Duis vehicula consectetur tincidunt. Nullam finibus et est non gravida. Maecenas iaculis
                    orci et ante finibus, a fermentum erat mattis. Donec congue commodo risus,
                    sit amet molestie nibh hendrerit eu. Nulla maximus ex non eleifend porttitor.</p>
            </div>


            <div className='choose_text'>
                <h1>Why Choose Us?</h1>
            </div>
            <div className='chooseUs_section'>

                <div className='choose_box'>
                    <CheckIcon />
                    <h1>Transparency</h1>
                    <p>We offer full transparency with our
                        website design and development processes,
                        so you know exactly what you are getting.</p>
                </div>

                <div className='choose_box'>
                    <CheckIcon />
                    <h1>No Themes</h1>
                    <p>We offer full transparency with our
                        website design and development processes,
                        so you know exactly what you are getting.</p>
                </div>

                <div className='choose_box'>
                    <CheckIcon />
                    <h1>Custom design</h1>
                    <p>We offer full transparency with our
                        website design and development processes,
                        so you know exactly what you are getting.</p>
                </div>

                <div className='choose_box'>
                    <CheckIcon />
                    <h1>responsive design</h1>
                    <p>We offer full transparency with our
                        website design and development processes,
                        so you know exactly what you are getting.</p>
                </div>

                <div className='choose_box'>
                    <CheckIcon />
                    <h1>SEO Friendly</h1>
                    <p>We offer full transparency with our
                        website design and development processes,
                        so you know exactly what you are getting.</p>
                </div>

                <div className='choose_box'>
                    <CheckIcon />
                    <h1>All-in-one</h1>
                    <p>We offer full transparency with our
                        website design and development processes,
                        so you know exactly what you are getting.</p>
                </div>

            </div>

           
           <div className='process_text'>
             <h1>Our Process</h1>
             <p>Design & Development</p>
           </div>

           <div className='process_timeline-bg'>

                    <div className='devcie-Frame' >
                        <DeviceFrameset device="iPhone X" color="gold" >
                        <img src={mobile} alt='' style={{width:"100%",height:"100%"}}/>
                        </DeviceFrameset>
                    </div>
                  
                   
                    <div className="container container_costom" >

                        <div className="row">
                            <div className="v-timeline" id='timelineSection'>

                                <div className="v-container rights" >
                                    <div className="v-content " >
                                        <h1>Consultation & Initial Scope</h1>
                                        <p>Our initial stages begin with a consultation with stakeholders and 
                                            staff to allow for a complete brief of what you after so we can ensure
                                             we are on the same page with delivery and expectations.</p>
                                    </div>
                                </div>

                                <div className="v-container lefts">
                                    <div className="v-content">
                                        <h1>Website Design Phase </h1>
                                        <p>Our initial stages begin with a consultation with stakeholders and staff to allow for a complete brief of what you after so we can ensure we are on the same page with delivery and expectations.</p>
                                    </div>
                                </div>

                                <div className="v-container rights">
                                    <div className="v-content">
                                        <h1>Website Development Phase </h1>
                                        <p>Our initial stages begin with a consultation with stakeholders and staff to allow for a complete brief of what you after so we can ensure we are on the same page with delivery and expectations.</p>
                                    </div>
                                </div>

                                <div className="v-container lefts">
                                    <div className="v-content">
                                        <h1>Testing </h1>
                                        <p>Our initial stages begin with a consultation with stakeholders and staff to allow for a complete brief of what you after so we can ensure we are on the same page with delivery and expectations.</p>
                                    </div>
                                </div>

                                <div className="v-container lefts">
   
                                </div>
                            </div>
                        </div>
                        <div className='blur_text'>
                <h1>Website Launch</h1>
                <p>Your website is ready, and you new website goes live!</p>
            </div>
                    </div>
                   
                    

           </div>

           {/* <div className='process_timeline-bg'>
                    <div className='devcie-Frame'>
                        <DeviceFrameset device="iPhone X" color="gold" >
                        <img src={mobile} alt='' style={{width:"100%",height:"100%"}}/>
                        </DeviceFrameset>
            </div>
           </div> */}









            {/* <div className='bottom_overlay'></div> */}
            {/* <div className='process_timeline-bg1'>
            </div> */}
            {/* <div className='blur_text'>
                <h1>Website Launch</h1>
                <p>Your website is ready, and you new website goes live!</p>
            </div> */}
        </>
    )
}

export default Development
