import React, { useState } from 'react'
import './navbar.scss'
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import { BackArrow, BusinessIcon, CaseStudiesIcon, ChatIcon, ExperienceIcon, HomeIcon, MainLogo, MenuBarClose, MenuBarOpen, PeopleIcon, SpeakerIcon, WorkIcon } from '../assets/svgIcons';
const MobileMenu = () => {
    const [activeMenu, setActiveMenu] = useState(null);
    const addClassActive = (menu) => {
        setActiveMenu(menu)
    };
    return (<>
        <div className='mobileMenu'>
        </div>
        <p className={`mobileMenuItems ${activeMenu === null ? '' : 'hide'}`}>
            <a className='menuItems' href='/#'><HomeIcon />Home</a><br /><br />
            <a className='menuItems' href='/#' onClick={() => addClassActive(`subMenuMobile1`)}><PeopleIcon />About us</a><br /><br />
            <a className='menuItems' href='/#' onClick={() => addClassActive(`subMenuMobile2`)}><SpeakerIcon />Services</a><br /><br />
            <a className='menuItems' href='/#' onClick={() => addClassActive(`subMenuMobile3`)}><WorkIcon />Our Work</a><br /><br />
            <a className='menuItems' href='/#' onClick={() => addClassActive(`subMenuMobile4`)}><CaseStudiesIcon />Case Studies</a><br /><br />
            <a className='menuItems' href='/#' onClick={() => addClassActive(`subMenuMobile5`)}><BusinessIcon />Digital performance</a><br /><br />
            <a className='menuItems' href='/#' onClick={() => addClassActive(`subMenuMobile6`)}><ExperienceIcon />Contact</a><br /><br />
        </p>
        <p className={`mobileSubMenuItems ${activeMenu === 'subMenuMobile1' ? 'show' : ''}`}>
            <a className='menuItemBack' href='/#' onClick={() => addClassActive(null)}><BackArrow /></a><br /><br />
            <a className='menuItem' href='/#' ><PeopleIcon />Our Work</a><br /><br />
            <a className='subMenuItems' href='/#'>Google Advertising</a><br /><br />
            <a className='subMenuItems' href='/#'>Google Advertising</a><br /><br />
            <a className='subMenuItems' href='/#'>Google Advertising</a><br />
        </p>
        <p className={`mobileSubMenuItems ${activeMenu === 'subMenuMobile2' ? 'show' : ''}`}>
            <a className='menuItemBack' href='/#' onClick={() => addClassActive(null)}><BackArrow /></a><br /><br />
            <a className='menuItem' href='/#' ><SpeakerIcon />Services</a><br /><br />
            <a className='subMenuItems' href='/#'>Google Advertising</a><br /><br />
            <a className='subMenuItems' href='/#'>Google Advertising</a><br /><br />
            <a className='subMenuItems' href='/#'>2 Advertising</a><br />
        </p>

        <p className={`mobileSubMenuItems ${activeMenu === 'subMenuMobile3' ? 'show' : ''}`}>
            <a className='menuItemBack' href='/#' onClick={() => addClassActive(null)}><BackArrow /></a><br /><br />
            <a className='menuItem' href='/#' ><WorkIcon />Services</a><br /><br />
            <a className='subMenuItems' href='/#'>Google Advertising</a><br /><br />
            <a className='subMenuItems' href='/#'>Google Advertising</a><br /><br />
            <a className='subMenuItems' href='/#'>3 Advertising</a><br />
        </p>

        <p className={`mobileSubMenuItems ${activeMenu === 'subMenuMobile4' ? 'show' : ''}`}>
            <a className='menuItemBack' href='/#' onClick={() => addClassActive(null)}><BackArrow /></a><br /><br />
            <a className='menuItem' href='/#' ><CaseStudiesIcon />Services</a><br /><br />
            <a className='subMenuItems' href='/#'>Google Advertising</a><br /><br />
            <a className='subMenuItems' href='/#'>Google Advertising</a><br /><br />
            <a className='subMenuItems' href='/#'>4 Advertising</a><br />
        </p>

        <p className={`mobileSubMenuItems ${activeMenu === 'subMenuMobile5' ? 'show' : ''}`}>
            <a className='menuItemBack' href='/#' onClick={() => addClassActive(null)}><BackArrow /></a><br /><br />
            <a className='menuItem' href='/#' ><BusinessIcon />Services</a><br /><br />
            <a className='subMenuItems' href='/#'>Google Advertising</a><br /><br />
            <a className='subMenuItems' href='/#'>Google Advertising</a><br /><br />
            <a className='subMenuItems' href='/#'>5 Advertising</a><br />
        </p>

        <p className={`mobileSubMenuItems ${activeMenu === 'subMenuMobile6' ? 'show' : ''}`}>
            <a className='menuItemBack' href='/#' onClick={() => addClassActive(null)}><BackArrow /></a><br /><br />
            <a className='menuItem' href='/#' ><ExperienceIcon />Services</a><br /><br />
            <a className='subMenuItems' href='/#'>Google Advertising</a><br /><br />
            <a className='subMenuItems' href='/#'>Google Advertising</a><br /><br />
            <a className='subMenuItems' href='/#'>6 Advertising</a><br />
        </p>
    </>)
}
const AboutMenu = ({handleClosePopup}) => {
    
    return (
      <>
        <NavLink to='/work' onClick={handleClosePopup}>Google Advertising</NavLink>
        <NavLink to='/contact' onClick={handleClosePopup}>Social Media Management</NavLink>
        <NavLink to='/seo' onClick={handleClosePopup}>Social Media advertising</NavLink>
        <NavLink to='/about' className="about-link" onClick={handleClosePopup}>
          About Us
        </NavLink>
      </>
    );
  };

const PerformanceSubMenu = () => {
 
    return (<>
        <a href='/#'>Google Advertising</a>
        <a href='/#'>Social Media Management</a>
        <a href='/#'>Social Media advertising</a>
        <NavLink to='/about'>Performance Menu</NavLink>
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
const NavMenu = ({ isOpen, className, children, setPopup }) => {
    const popupStyle = {
      display: isOpen ? 'flex' : 'none',
      height: 'calc(100vh - 70.25px)',
      minHeight: '800px',
      width: '100%',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
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
    setPopup: PropTypes.func.isRequired,
};
const Navbar = () => {
    const [isPopup, setPopup] = useState(false);
    const [activeMenu, setActiveMenu] = useState(null);
    const logoStyle = { height: '31px', width: '30px' };

    const handlePopup = () => {
        setPopup(!isPopup);

    };
    const handleClosePopup = () =>{
        setPopup(false);
        setActiveMenu(null);
    }

    const addClassActive = (menu) => {
        if (activeMenu === menu) {
            setActiveMenu(null);
         
        } else {
            setActiveMenu(menu)
        }
    };
    return (
        <>
            <div className={isPopup ? 'navbar dark' : ' navbar'}>
                <div className='nav'>
                    <span className='mobileLogo me-auto'>
                        <NavLink to='/'><MainLogo height={logoStyle.height} width={logoStyle.width} /></NavLink>
                    </span>
                    <ul>
                        <li onClick={(e) => {
                            e.preventDefault();
                            handlePopup()
                        }}>
                            <a href='/'><span className='menu-text'>Menu</span>
                                <span>{isPopup ? <MenuBarOpen /> : <MenuBarClose />}</span>
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

            <NavMenu isOpen={isPopup} className={isPopup ? 'slideIn' : 'slideOut'}  >

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
                        <AboutMenu  handleClosePopup={handleClosePopup}/>
                    </div>
                    <div className={`subMenuItems ${activeMenu === 'submenu1' ? 'show ' : ''}`}>
                        <PerformanceSubMenu />
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




        </>
    )
}

export default Navbar