import React, { useState } from 'react'
import PropTypes from 'prop-types';
import './banner.scss'


const NavMenu = ({ isOpen, className, children }) => {
    const popupStyle = {
      display: isOpen ? 'block' : 'none',
    };
  
    const overlayStyle = {
      display: isOpen ? 'flex' : 'none',
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
    animation: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
  };

export const Banner = () => {
    const [isPopup, setPopup] = useState(false);
    const [isAnimation, setAnimation] = useState(false);

    const handlePopup = () => {
        setPopup(!isPopup);
        handleAnimation()
    };

    const handleAnimation = () => {
        setTimeout(() => {
            setAnimation(isPopup);
        }, 200);
      };
    return (
    <>
        <div style={{position:"relative",height:"100%",width:"100%"}}>
            <div className={`banner-bg }`}>
                <div className={isPopup ? 'navbar dark' : ' navbar'}>
                    <div className='nav'>
                        <ul>
                            <li onClick={(e) => {
                                e.preventDefault();
                                handlePopup()}}>
                                <a href='/'><span className='menu-text'>Menu</span>
                                    <span>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="41" height="12" viewBox="0 0 41 12" fill="none">
                                            <path d="M0 10.8351H41" stroke="url(#paint0_linear_688_46472)" />
                                            <line x1="12" y1="0.835144" x2="41" y2="0.835144" stroke="url(#paint1_linear_688_46472)" />
                                            <defs>
                                                <linearGradient id="paint0_linear_688_46472" x1="41" y1="11.8351" x2="-7.15919e-09" y2="11.8351" gradientUnits="userSpaceOnUse">
                                                    <stop stop-color="#FF8C51" />
                                                    <stop offset="1" stop-color="#F36A24" />
                                                </linearGradient>
                                                <linearGradient id="paint1_linear_688_46472" x1="41" y1="1.33515" x2="12" y2="1.33514" gradientUnits="userSpaceOnUse">
                                                    <stop stop-color="#FF8C51" />
                                                    <stop offset="1" stop-color="#F36A24" />
                                                </linearGradient>
                                            </defs>
                                        </svg>

                                    </span></a>
                            </li>

                            <li>
                                <a href='/'><span className='menu-text'>Let’s Talk</span>
                                    <span className='span'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="26" viewBox="0 0 24 26" fill="none">
                                            <path d="M24 12.3351C24 18.9626 18.6274 24.3351 12 24.3351C10.7825 24.3351 9.6073 24.1538 8.5 23.8167C7.61946 23.5486 3.52946 25.2003 3.52946 25.2003C3.52946 25.2003 4.26502 21.5682 3.52946 20.8351C1.34923 18.6624 0 15.6563 0 12.3351C0 5.70773 5.37258 0.335144 12 0.335144C18.6274 0.335144 24 5.70773 24 12.3351Z" fill="white" />
                                            <circle cx="8" cy="12.3351" r="1" fill="#27303F" />
                                            <circle cx="12" cy="12.3351" r="1" fill="#27303F" />
                                            <circle cx="16" cy="12.3351" r="1" fill="#27303F" />
                                        </svg>
                                    </span></a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className='banner-text'>
                    <h1>RESULTS BEGIN</h1>
                    <p><span>W</span>HERE<span>?</span></p>
                </div>
            <NavMenu isOpen={isPopup} className={isAnimation ? '' : 'slideIn'}>
                tata
            </NavMenu>
            </div>
        </div>
    </>
    )
}
