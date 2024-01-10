import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types';
import './banner.scss'
import { BackArrow, BusinessIcon, CaseStudiesIcon, ChatIcon, ExperienceIcon, HomeIcon, MainLogo, MenuBarClose, MenuBarOpen, PeopleIcon, SpeakerIcon, WorkIcon } from '../assets/svgIcons';
import Solutions from '../component/solution/Solutions';
import CenterMode from '../component/MySwiper/Swiper';
import Category from '../component/category/Category';
import LetsTalk from '../component/LetsTalk/LetsTalk';
import { Fade } from 'react-reveal';
   







const PerformanceSubMenu = () => {

    return (<>
        <a href='/#'>Google Advertising</a>
        <a href='/#'>Social Media Management</a>
        <a href='/#'>Social Media advertising</a>
        <a href='/#'>Performance Menu</a>
    </>
    );
};


const NavMenu = ({ isOpen, className, children }) => {
    const popupStyle = {
        display: isOpen ? 'flex' : 'none',
        height: 'calc(100vh - 70.25px)',
        minHeight: '800px',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column'
    };

    const overlayStyle = {
        display: 'block',
    };

    return (
        <div>
            <div className={`overlay ${className}`} style={overlayStyle}>
                <div className={`popup `} style={popupStyle}>
                    {children}
                </div>
            </div>
        </div>
    );
};

NavMenu.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    children: PropTypes.node.isRequired,
};

export const Banner = () => {
    const [isPopup, setPopup] = useState(false);
    const [activeMenu, setActiveMenu] = useState(null);
    const [startAnimation, setAnimation] = useState(false);
    const logoStyle = { height: '31px', width: '30px' };
    const handlePopup = () => {
        setPopup(!isPopup);
    };

    const addClassActive = (menu) => {
        if (activeMenu === menu) {
            setActiveMenu(null);
        } else {
            setActiveMenu(menu)
        }
    };

    useEffect(() => {
        setTimeout(() => {
            setAnimation(true);
        }, 1000);
    })


    return (
        <>
       
                <div>
                    <div className='bannerLayerSky'>
                        <div className={`bannerLayerSun ${startAnimation ? 'animation' : ''} `}>
                            <div className='bannerLayerBuildings'>
                                <div className={`bannerLayerShadow ${startAnimation ? 'animation' : ''} `}>
                                    <div className='banner-text-container container'>
                                        <div className='text-center'>
                                            <h1>RESULTS BEGIN</h1>
                                            <p><span>W</span>HERE<span>?</span></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <Solutions />
                <Fade bottom>
                <CenterMode />
                </Fade>
                <Fade bottom>
                <Category />
                </Fade>
                <Fade bottom>
                <LetsTalk />
                </Fade>
               
               
                
        </>
    )
}
