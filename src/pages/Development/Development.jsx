import React, { useEffect, useState, useRef } from 'react'
import './development.scss';
import CenterMode from '../../component/MySwiper/Swiper'
import { CheckIcon } from '../../assets/svgIcons';
import { DeviceFrameset } from 'react-device-frameset'
import 'react-device-frameset/styles/marvel-devices.min.css'
import mobile from '../../assets/development/mobile.png'



const Development = () => {
    // var test = 100

    // const stylwtse = {
    //     height: `${test}px`
    // }

    const [lineHeight, setLineHeight] = useState(0);
    const [lineHeight1, setLineHeight1] = useState(0);
    const containerRef = useRef(null);
    const containerRef1 = useRef(null);
    

    const handleScroll = (event) => {
        const container = containerRef.current;
        const containerHeight = container.clientHeight;
        const scrollHeight = container.scrollHeight;
        console.log("container.scrollHeight", container.scrollHeight)
        const scrollTop = container.scrollTop;
        const mouseEvent = event.deltaY

        console.log("scrollTop", scrollTop)

        setLineHeight(scrollTop + mouseEvent);
        if (scrollTop + mouseEvent >= 2100) {
            setLineHeight(scrollTop + mouseEvent - 400);
            // console.log(scrollTop + mouseEvent - 400);
        }
        // console.log(scrollTop + mouseEvent, scrollTop, mouseEvent);


        if (containerRef.current) {
            //   const container = containerRef.current;
            //   const containerTop = container.scrollTop;
            //   const containerBottom = container.height;
            //   console.log(containerTop, "-------containerTop",containerBottom, "-------containerBottom");
            //     if (containerTop >= 120){
            //         setLineHeight(0); 
            //     }
            //     const newHeight = Math.min(320, containerTop * 5);
            //     setLineHeight(0); 

            // Adjust the scroll speed based on your preference


            // Scroll up or down based on mouse wheel movement
            //   container.scrollTo({
            //     top: containerTop + event.deltaY ,
            //     behavior: 'smooth',
            //   });

            //   console.log(newHeight, "// Empty dependency // Empty depende");
            //   console.log('Mouse wheel scrolled:', event.deltaY);
        }
    };
    const handleScroll1 = (event) => {
        if (containerRef1.current) {
            const container1 = containerRef1.current;
            const containerTop1 = container1.scrollTop;
            const newHeight1 = Math.min(320, containerTop1 * 5);
            setLineHeight1(newHeight1);

            // Adjust the scroll speed based on your preference


            // Scroll up or down based on mouse wheel movement
            //   container.scrollTo({
            //     top: containerTop + event.deltaY ,
            //     behavior: 'smooth',
            //   });

            //   console.log(newHeight1, "// Empty dependency // Empty depende");
            //   console.log('Mouse wheel scrolled:', event.deltaY);
        }
    };
    useEffect(() => {
        const container1 = containerRef.current;

        if (container1) {
            container1.addEventListener('wheel', handleScroll);

            return () => {
                container1.removeEventListener('wheel', handleScroll);
            };
        }
    }, [handleScroll1]);

    useEffect(() => {
        const container = containerRef.current;

        if (container) {
            container.addEventListener('wheel', handleScroll);

            return () => {
                container.removeEventListener('wheel', handleScroll);
            };
        }
    }, [handleScroll]);

    // var he = 100;
    // const test = {
    //     background: `linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(254,254,254,1) ${he}%, rgba(0,0,0,1) ${he}%, rgba(3,3,3,1) 100%)`,
    // }

    let firstLine = {
        height: lineHeight + 'px',
        maxHeight: '499px'
    }
    let line2 = {
        height: (lineHeight - 800) + 'px',
        maxHeight: '499px'
    }
    let line3 = {
        height: (lineHeight - 1400) + 'px',
        maxHeight: '499px'
    }
    let line4 = {
        height: (lineHeight - 2000) + 'px',
        maxHeight: 'calc(100% - 178px)'
    }

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

            <div className='process_timeline-bg' >

                <div className='devcie-Frame' >
                    <DeviceFrameset device="iPhone X" color="gold" >
                        <img src={mobile} alt='' style={{ width: "100%", height: "100%" }} />
                    </DeviceFrameset>
                </div>


                <div className="container container_costom" style={{ height: '675px', overflowY: 'scroll' }} ref={containerRef} >

                    <div className="row" >
                        <div className="v-timeline" >
                            <div className="v-container rights" >
                                <div className='line' style={lineHeight >= 600 ? { height: '499px' } : firstLine} ></div>
                                <div className="v-content "  >
                                    <h1>Consultation & Initial Scope</h1>
                                    <p>Our initial stages begin with a consultation with stakeholders and
                                        staff to allow for a complete brief of what you after so we can ensure
                                        we are on the same page with delivery and expectations.</p>
                                </div>
                            </div>

                            <div className={`v-container lefts ${lineHeight >= 600 ? "active" : ""}`}>
                                <div className='line' style={lineHeight >= 700 ? line2 : { height: '0px' }} ></div>
                                <div className="v-content">
                                    <h1>Website Design Phase </h1>
                                    <p>Our initial stages begin with a consultation with stakeholders and staff to allow for a complete brief of what you after so we can ensure we are on the same page with delivery and expectations.</p>
                                </div>
                            </div>

                            <div className={`v-container rights ${lineHeight >= 1200 ? "active" : ""}`}>
                                <div className='line' style={lineHeight >= 1300 ? line3 : { height: '0px' }} ></div>
                                <div className="v-content">
                                    <h1>Website Development Phase </h1>
                                    <p>Our initial stages begin with a consultation with stakeholders and staff to allow for a complete brief of what you after so we can ensure we are on the same page with delivery and expectations.</p>
                                </div>
                            </div>

                            <div className={`v-container lefts ${lineHeight >= 1850 ? "active" : ""}`}>
                                <div className='line' style={lineHeight >= 1900 ? line4 : { height: '0px' }} ></div>
                                <div className="v-content" >
                                    <h1>Testing </h1>
                                    <p>Our initial stages begin with a consultation with stakeholders and staff to allow for a complete brief of what you after so we can ensure we are on the same page with delivery and expectations.</p>
                                </div>
                            </div>

                            <div className={`v-container lefts ${lineHeight >= 2400 ? "active" : ""}`}>

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
