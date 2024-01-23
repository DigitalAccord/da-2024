import React, { useState } from 'react'
import './navbar.scss'
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { BackArrow, BusinessIcon, CaseStudiesIcon, ChatIcon, ExperienceIcon, HomeIcon, MainLogo, MenuBarClose, MenuBarOpen, PeopleIcon, SpeakerIcon, WorkIcon } from '../assets/svgIcons';
const MobileMenu = ({handleClosePopup}) => {
    const [activeMenu, setActiveMenu] = useState(null);
    const addClassActive = (menu) => {
        setActiveMenu(menu)
    };
    return (<>
        <div className='mobileMenu'>
        </div>
        <p className={`mobileMenuItems ${activeMenu === null ? '' : 'hide'}`}>
            <NavLink className='menuItems' to='/' onClick={handleClosePopup}><HomeIcon />Home</NavLink><br /><br />
            <NavLink className='menuItems' to='/about' onClick={handleClosePopup}><PeopleIcon />About us</NavLink><br /><br />
            <a className='menuItems' href='/#' onClick={() => addClassActive(`subMenuMobile2`)}><SpeakerIcon />Our Work</a><br /><br />
            <a className='menuItems' href='/#' onClick={() => addClassActive(`subMenuMobile3`)}><WorkIcon />Case Studies</a><br /><br />
            <NavLink className='menuItems' to='/case' onClick={handleClosePopup}><CaseStudiesIcon />Digital Performance</NavLink><br /><br />
            <a className='menuItems' href='/#' onClick={() => addClassActive(`subMenuMobile5`)}><BusinessIcon />User Experience</a><br /><br />
            <a className='menuItems' href='/#' onClick={() => addClassActive(`subMenuMobile6`)}><ExperienceIcon />Bussiness It</a><br /><br />
        </p>
        <p className={`mobileSubMenuItems ${activeMenu === 'subMenuMobile1' ? 'show' : ''}`}>
            <a className='menuItemBack' href='/#' onClick={() => addClassActive(null)}><BackArrow /></a><br /><br />
            <a className='menuItem' href='/#' ><PeopleIcon />Our Work</a><br /><br />
            <a className='subMenuItems' href='/case'>Google Advertising</a><br /><br />
            <a className='subMenuItems' href='/#'>Google Advertising</a><br /><br />
            <a className='subMenuItems' href='/#'>Google Advertising</a><br />
        </p>
        <p className={`mobileSubMenuItems ${activeMenu === 'subMenuMobile2' ? 'show' : ''}`}>
            <a className='menuItemBack' href='/#' onClick={() => addClassActive(null)}><BackArrow /></a><br /><br />
            <a className='menuItem' href='/#' ><SpeakerIcon />Services</a><br /><br />
            <a className='subMenuItems' href='/#'>Google Advertising</a><br /><br />
            <a className='subMenuItems' href='/#'>Google Advertising</a><br /><br />
            <a className='subMenuItems' href='/#'>
                2 Advertising</a><br />
        </p>

        <p className={`mobileSubMenuItems ${activeMenu === 'subMenuMobile3' ? 'show' : ''}`}>
            <a className='menuItemBack' href='/#' onClick={() => addClassActive(null)}><BackArrow /></a><br /><br/>
            <div>

                <a className='menuItem' href='/#' ><WorkIcon />Services</a><br /><br/>
                <a className='subMenuItems' href='/#'>Google Advertising</a><br /><br />
                <a className='subMenuItems' href='/#'>Google Advertising</a><br /> <br /> 
                <a className='subMenuItems' href='/#'>3 Advertising</a><br />
            </div>
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
            <NavLink className='subMenuItems' to='/google' onClick={handleClosePopup}>Google Advertising</NavLink><br /><br/>
            <NavLink className='subMenuItems' to='/management' onClick={handleClosePopup}>Social Media Management</NavLink><br /><br/>
            <NavLink className='subMenuItems' to='/add' onClick={handleClosePopup}>Social Media Advertizing</NavLink><br /><br/>
            <NavLink className='subMenuItems' to='/seo' onClick={handleClosePopup} >Seo</NavLink><br />
            
        </p>

        <p className={`mobileSubMenuItems ${activeMenu === 'subMenuMobile6' ? 'show' : ''}`}>
            <a className='menuItemBack' href='/#' onClick={() => addClassActive(null)}><BackArrow /></a><br /><br />
            <a className='menuItem' href='/#' ><ExperienceIcon />Services</a><br /><br/>
            <a className='subMenuItems' href='/#'>Google Advertising</a><br /><br/>
            <a className='subMenuItems' href='/#'>Google Advertising</a><br /><br/>
            <a className='subMenuItems' href='/#'>6 Advertising</a><br />
        </p>
    </>)
}
const AboutMenu = ({handleClosePopup}) => {
    
    return (
      <>
        <NavLink to='/work' className="submenu-active" onClick={handleClosePopup}>Google Advertising</NavLink>
        <NavLink to='/contact' onClick={handleClosePopup}>Social Media Management</NavLink>
        <NavLink to='/seo' onClick={handleClosePopup}>Social Media advertising</NavLink>
        <NavLink to='/about' className="about-link" onClick={handleClosePopup}>
          About Us
        </NavLink>
      </>
    );
  };

const PerformanceSubMenu = ({handleClosePopup}) => {
      
    return (<>
        <NavLink to='/google'  onClick={handleClosePopup}>Google Advertising</NavLink>
        <NavLink to='/management' onClick={handleClosePopup}>Social Media Management</NavLink>
        <NavLink to='/add' onClick={handleClosePopup}>Social Media advertising</NavLink>
        <NavLink to='/seo' onClick={handleClosePopup}>Search Engine Optimisation</NavLink>
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
        if (!isPopup) {
            document.body.style.overflow = 'hidden';
          } else {
            document.body.style.overflow = 'auto';
          }
       

    };
    const handleClosePopup = () =>{
        setPopup(false);
        setActiveMenu(null);
        document.body.style.overflow = 'auto';
       
        
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
                        <NavLink to='/' onClick={handleClosePopup}><MainLogo height={logoStyle.height} width={logoStyle.width} /></NavLink>
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
                            <a href='#LetsTalk'  ><span className='menu-text'>Let’s Talk</span>
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
                                <NavLink to='/' className='d-flex text-decoration-none align-items-center'
                                onClick={handleClosePopup}>
                                    <h2 className='MenuHeading'> Home</h2>
                                    <div className='menuItemIcon'>
                                        <HomeIcon />
                                    </div>
                                </NavLink>
                            </div>
                        </div>
                        <div className={`subMenuDot2 ${activeMenu === 'subMenuDot2' ? 'active' : ''}`}>
                            <NavLink to="/about" className='menuItems text-decoration-none' onClick={handleClosePopup}>
                                <h2 className='MenuHeading'>about us</h2>
                                <div className='menuItemIcon'>
                                    <PeopleIcon />
                                </div>
                            </NavLink>
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
                        <PerformanceSubMenu handleClosePopup={handleClosePopup} />
                    </div>
                    <div className={`subMenuItems ${activeMenu === 'submenu2' ? 'show' : ''}`}>
                        <NavLink to='/development' onClick={handleClosePopup} >Website Design & Development</NavLink>
                        <NavLink to='/user' onClick={handleClosePopup}>Branding & Logo Design</NavLink>
                        
                    </div>
                    <div className={`subMenuItems ${activeMenu === 'submenu3' ? 'show' : ''}`}>
                        <NavLink to='/case' onClick={handleClosePopup} >Website Design & Development</NavLink>
                        <NavLink to='/management' onClick={handleClosePopup}>Social Media Management</NavLink>
                        <NavLink to='/google' onClick={handleClosePopup}>Social Media advertising</NavLink>
                        <a href='/#'>our work</a>
                    </div>
                    <div className={`subMenuItems ${activeMenu === 'submenu4' ? 'show' : ''}`}>
                        <NavLink to='/user' onClick={handleClosePopup} >Google Advertising</NavLink>
                        <NavLink to='/development' onClick={handleClosePopup}>Social Media Management</NavLink>
                        <NavLink to='/development' onClick={handleClosePopup}>Social Media advertising</NavLink>
                        <NavLink to='/add' onClick={handleClosePopup}>case studies</NavLink>
                    </div>
                    <div className={`subMenuItems ${activeMenu === 'submenu5' ? 'show' : ''}`}>
                        <a href='/#' >Website Design & Development</a>
                        <a href='/#'>Social Media Management</a>
                        <a href='/#'>Social Media advertising</a>
                        <a href='/#'>business it</a>
                    </div>
                </div>
                <div className='mobileMenuDiv'>
                    <MobileMenu handleClosePopup={handleClosePopup}/>
                </div>
            </NavMenu>




        </>
    )
}

export default Navbar