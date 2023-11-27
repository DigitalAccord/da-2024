import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types';
import './banner.scss'
import { BackArrow, BusinessIcon, CaseStudiesIcon, ChatIcon, ExperienceIcon, HomeIcon, MainLogo, MenuBarClose, MenuBarOpen, PeopleIcon, SpeakerIcon, WorkIcon } from '../assets/svgIcons';


const MobileMenu = () => {
    const [activeMenu, setActiveMenu] = useState(null);
    const addClassActive = (menu) => {
        setActiveMenu(menu)
    };
    return(<>
        <div className='mobileMenu'>
        </div>
        <p className={`mobileMenuItems ${activeMenu === null ? '': 'hide' }`}>
            <a className='menuItems' href='/#'><HomeIcon />Home</a><br /><br />     
            <a className='menuItems' href='/#' onClick={() => addClassActive(`subMenuMobile`)}><PeopleIcon />About us</a><br /><br />
            <a className='menuItems' href='/#'><SpeakerIcon />Services</a><br /><br />     
            <a className='menuItems' href='/#'><WorkIcon />Our Work</a><br /><br />     
            <a className='menuItems' href='/#'><CaseStudiesIcon />Case Studies</a><br /><br />
            <a className='menuItems' href='/#'><BusinessIcon />Digital performance</a><br /><br />
            <a className='menuItems' href='/#'><ExperienceIcon />Contact</a><br /><br />
        </p>
        <p className={`mobileSubMenuItems ${activeMenu !== null ? 'show': '' }`}>
            <a className='menuItemBack' href='/#' onClick={() => addClassActive(null)}><BackArrow /></a><br /><br />
            <a className='menuItem' href='/#' ><WorkIcon />Our Work</a><br /><br />
            <a className='subMenuItems' href='/#'>Google Advertising</a><br /><br />
            <a className='subMenuItems' href='/#'>Google Advertising</a><br /><br />
            <a className='subMenuItems' href='/#'>Google Advertising</a><br />
        </p>
    </>)
}

const LaptopMenu = () => {
    const [activeMenu, setActiveMenu] = useState(null);
    const menuItems = [
      'Home',
      'About us',
      'Services',
      'Our Work',
      'Case Studies',
      'Digital performance',
      'Contact',
    ];

    const addClassActive = (menu) => {
        setActiveMenu(menu)
    };
  
    return (
        <div className='laptopMenuDiv'>
            <div className={`menuBackIcon ${activeMenu === null ? '' : 'show'}`} onClick={() => addClassActive(null)}>
                <BackArrow />
            </div>
            <ul className={`laptopMenuUl ${activeMenu !== null ? 'hide' : ''}`}>
                {menuItems.map((item, index) => (
                <li key={index}>
                        <div className='menuItems' onClick={() => addClassActive(`subMenuLaptop${index}`)}>
                            <div className='menuItemIcon'>
                                {index === 0 && <HomeIcon /> }
                                {index === 1 && <PeopleIcon /> }
                                {index === 2 && <SpeakerIcon /> }
                                {index === 3 && <WorkIcon /> }
                                {index === 4 && <CaseStudiesIcon /> }
                                {index === 5 && <BusinessIcon /> }
                                {index === 6 && <ExperienceIcon /> }
                            </div>
                            <h2 className='MenuHeading'>{item}</h2>
                        </div>
                </li>
                ))}
            </ul>
                <div className={`laptopSubMenu ${activeMenu === 'subMenuLaptop2' ? 'show' : ''}`}>
                    <PerformanceSubMenu/>
                </div>
                <div className={`laptopSubMenu ${activeMenu === 'subMenuLaptop3' ? 'show' : ''}`}>
                    <PerformanceSubMenu/>
                </div>
        </div>
    );
};
  
const PerformanceSubMenu = () => {
  
    return (<>
        <a href='/#'>Google Advertising</a>
        <a href='/#'>Social Media Management</a>
        <a href='/#'>Social Media advertising</a>
        <a href='/#'>Performance Menu</a>
    </>
    );
};
const AboutMenu = () => {
    return (<>
        <a href='/#'>Google Advertising</a>
        <a href='/#'>Social Media Management</a>
        <a href='/#'>Social Media advertising</a>
        <a href='/#'>About Us</a>
    </>
    );
};
const MainTextMenu = () => {
    return (<>
        <h1>RESULTS BEGIN</h1>
        <p className='hereLine'><span>W</span>HERE<span>?</span></p>
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

    const handlePopup = () => {
        setPopup(!isPopup);
    };

    const addClassActive = (menu) => {
        if(activeMenu === menu){
            setActiveMenu(null);
        } else {
            setActiveMenu(menu)
        }
    };

    useEffect(()=>{
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
                                <div className={isPopup ? 'navbar dark' : ' navbar'}>
                                    <div className='nav'>
                                        <span className='mobileLogo me-auto'>
                                            <MainLogo />
                                        </span>
                                        <ul>
                                            <li onClick={(e) => {
                                                e.preventDefault();
                                                handlePopup()
                                            }}>
                                                <a href='/'><span className='menu-text'>Menu</span>
                                                    <span>{isPopup ? <MenuBarOpen /> :<MenuBarClose />}</span>
                                                </a>
                                            </li>

                                            <li>
                                                <a href='/'><span className='menu-text'>Let’s Talk</span>
                                                    <span className='span'>
                                                        <ChatIcon />
                                                    </span></a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className='banner-text-container container'>
                                    <div className='text-center'>
                                        <h1>RESULTS BEGIN</h1>
                                        <p><span>W</span>HERE<span>?</span></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <NavMenu isOpen={isPopup} className={isPopup ? 'slideIn' : 'slideOut'}>
                        {/* <div className='laptopCircle'>
                            <LaptopMenu />
                        </div> */}
                        <div className='outerCircle'>
                            <div className='topLeft'>
                                <div className={`subMenuDot1 ${activeMenu === null ? 'active' : ''}`}>
                                    <div className='menuItems' onClick={() => addClassActive(null)}>
                                        <a href='/' className='d-flex text-decoration-none align-items-center'>
                                            <h2 className='MenuHeading'> Home</h2>
                                            <div className='menuItemIcon'>
                                                <HomeIcon />
                                            </div>
                                        </a>
                                    </div>
                                </div>
                                <div className={`subMenuDot2 ${activeMenu === 'subMenuDot2' ? 'active' : ''}`}>
                                    <div className='menuItems' onClick={() => addClassActive('subMenuDot2')}>
                                        <h2 className='MenuHeading'>about us</h2>
                                        <div className='menuItemIcon'>
                                            <PeopleIcon />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='topRight'>
                                <div className={`subMenuDot1 submenu1 ${activeMenu === 'submenu1' ? 'active' : ''}`}>
                                    <div className='menuItems' onClick={() => addClassActive('submenu1')}>
                                        <div className='menuItemIcon'>
                                            <SpeakerIcon />
                                        </div>
                                        <h2 className='MenuHeading'>Digital performance</h2>
                                    </div>
                                </div>
                                <div className={`subMenuDot2 submenu2 ${activeMenu === 'submenu2' ? 'active' : ''}`}>
                                    <div className='menuItems' onClick={() => addClassActive('submenu2')}>
                                        <div className='menuItemIcon'>
                                            <ExperienceIcon />
                                        </div>
                                        <h2 className='MenuHeading'>User experience</h2>
                                    </div>
                                </div>
                            </div>
                            <div className='bottomLeft'>
                                <div className={`subMenuDot1 submenu3 ${activeMenu === 'submenu3' ? 'active' : ''}`}>
                                    <div className='menuItems' onClick={() => addClassActive('submenu3')}>
                                        <h2 className='MenuHeading'>our work</h2>
                                        <div className='menuItemIcon'>
                                            <WorkIcon />
                                        </div>
                                    </div>
                                </div>
                                <div className={`subMenuDot2 submenu4 ${activeMenu === 'submenu4' ? 'active' : ''}`}>
                                    <div className='menuItems' onClick={() => addClassActive('submenu4')}>
                                        <h2 className='MenuHeading'>case studies</h2>
                                        <div className='menuItemIcon'>
                                            <CaseStudiesIcon />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='bottomRight'>
                                <div className={`subMenuDot1 submenu5 ${activeMenu === 'submenu5' ? 'active' : ''}`}>
                                    <div className='menuItems' onClick={() => addClassActive('submenu5')}>
                                        <div className='menuItemIcon'>
                                            <BusinessIcon />
                                        </div>
                                        <h2 className='MenuHeading'>business it</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='centerText text-light'>
                            <div className={`subMenuItems ${activeMenu !== null ? '' : 'show'}`}>
                                <MainTextMenu />
                            </div>
                            <div className={`subMenuItems ${activeMenu === 'subMenuDot2' ? 'show' : ''}`}>
                                <AboutMenu />
                            </div>
                            <div className={`subMenuItems ${activeMenu === 'submenu1' ? 'show' : ''}`}>
                                <PerformanceSubMenu/>
                            </div>
                            <div className={`subMenuItems ${activeMenu === 'submenu2' ? 'show' : ''}`}>
                                <a href='/#'>Google Advertising</a>
                                <a href='/#'>Social Media Management</a>
                                <a href='/#'>Social Media advertising</a>
                                <a href='/#'>User experience</a>
                            </div>
                            <div className={`subMenuItems ${activeMenu === 'submenu3' ? 'show' : ''}`}>
                                <a href='/#'>Google Advertising</a>
                                <a href='/#'>Social Media Management</a>
                                <a href='/#'>Social Media advertising</a>
                                <a href='/#'>our work</a>
                            </div>
                            <div className={`subMenuItems ${activeMenu === 'submenu4' ? 'show' : ''}`}>
                                <a href='/#'>Google Advertising</a>
                                <a href='/#'>Social Media Management</a>
                                <a href='/#'>Social Media advertising</a>
                                <a href='/#'>case studies</a>
                            </div>
                            <div className={`subMenuItems ${activeMenu === 'submenu5' ? 'show' : ''}`}>
                                <a href='/#'>Google Advertising</a>
                                <a href='/#'>Social Media Management</a>
                                <a href='/#'>Social Media advertising</a>
                                <a href='/#'>business it</a>
                            </div>
                        </div>
                        <div className='mobileMenuDiv'>
                            <MobileMenu />
                        </div>
                    </NavMenu>
                </div>
                
            </div>
        </>
    )
}
