import React from 'react'
import './work.scss'
import { WorkProject } from '../../assets/svgIcons'
import Swiper from 'swiper'
import CenterMode from '../../component/MySwiper/Swiper'
import form1 from '../../assets/work/form1.png'
import form2 from '../../assets/work/form2.png'
import form3 from '../../assets/work/form3.png'
import dashbaord from '../../assets/work/dashboard.png'
import dash1 from '../../assets/work/dash1.png'
import dash2 from '../../assets/work/dash2.png'
import dash3 from '../../assets/work/dash3.png'
import calender from '../../assets/work/calender.png'
import pop from '../../assets/work/pop.png'
import dashContent from '../../assets/work/dashContent.png'
import dashFilter from '../../assets/work/dashFilter.png'
import LetsTalk from '../../component/LetsTalk/LetsTalk'
const OurWork = () => {
    return (
        <>
            <div className='work-section'>
                <div className='work-sectin-content'>
                    <div className='py-5'></div>
                    <div className='overlay-text'>
                        <h1>Our Work.</h1>
                        <div className='project-option'>
                            <p>ALL PROJECTS</p>
                            <WorkProject />
                        </div>
                    </div>
                </div>
            </div>
            <div className='our-slider'>
                <CenterMode />
            </div>
            <div className='section-work-images'>
                <div className='section-left-images'>
                    <div className='section-left-innner'>
                        <div className='section-left-inner-left'>
                            <img src={form1} alt='/55' className='img-fluid' />
                        </div>
                        <div className='section-left-inner-right'>
                            <img src={form2} alt='/55ee' />
                        </div>
                    </div>

                    <div className='section-left-images-bottom'>
                        <img src={dashbaord} alt='/55d' />
                    </div>
                </div>
                <div className='section-right-images'>
                    <img src={form3} alt='/55ee' />
                </div>
            </div>

            <div className='section2-work-images'>
                <div className='section2-left-images'>
                <img src={dash1} alt='/55dee' />
                </div>
                <div className='section2-right-images'>
                    <div className='section2-right-images-left'>
                    <img src={dash2} alt='/55dee' />
                    </div>
                    <div className='section2-right-images-bottom'>
                    <img src={dash3} alt='/55dee' />
                    </div>
                </div>
            </div>

            <div className='section3-work-images'>
                <div className='section3-left-images'>
                    <div className='section3-left-images-innerLeft'>
                        <img src={calender} alt='/55dee' />
                    </div>
                    <div className='section3-left-images-innerRight'>
                        <img src={pop} alt='/55dee' />
                    </div>
                </div>
                <div className='section3-right-images'>
                    <div className='section3-right-images-innerLeft'>
                        <img src={dashContent} alt='/55dee' />
                    </div>
                    <div className='section3-right-images-innerRight'>
                        <img src={dashFilter} alt='/55dee' />
                    </div>
                </div>
            </div>

<LetsTalk></LetsTalk>
        </>
    )
}

export default OurWork