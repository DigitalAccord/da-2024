import React from 'react'
import './development.scss';
import CenterMode from '../../component/MySwiper/Swiper'
import { CheckIcon } from '../../assets/svgIcons';
const Development = () => {
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
        </>
    )
}

export default Development
