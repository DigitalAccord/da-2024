import React from 'react'
import './footer.scss'
import arrow from '../assets/Arrow 4.png'
import footerImg from '../assets/Arrow 2.png'
import { FooterLogo, MainLogo } from '../assets/svgIcons'
import { M_Footer } from './component/M_Footer'
import { Link } from 'react-router-dom'
import facebook from '../assets/footer/Group 1303.svg'
import  Linkdin  from '../assets/footer/Group 1304.svg'
import  insta  from '../assets/footer/Group 1305.svg'
const Footer = () => {
  const logoStyle = { height: '76px', width: '282px' };

  return (
    <>
    

     <div className='footer'>
        <div className='container custom-container'>
          <div className='row'>
            <div className='d-flex justify-content-between align-items-center'>
              <div className='footer-arrow-img d-flex align-items-center gap-5 '>
                <p >
                  <a href='mailto:hello@digitalaccord.com.au' className='' style={{ color: "white", textDecoration:"none"  }}> 
                  hello@digitalaccord.com.au
                  </a>
                  </p>
                <img src={footerImg} />
              </div>
              <div className='footer-line'></div>
            </div>

            <div className='main-footer' style={{ paddingTop: "45px" }}>
              <div className='row'>
                <div className='col-md-12 col-lg-5 '>
                  <div className='mb-4'>
                    <Link to='/'> 
                      <FooterLogo height={logoStyle.height} width={logoStyle.width} />
                    </Link>
                  </div>
                  <div className='d-flex pb-5 gap-2'>
               
                    <Link to='https://www.facebook.com/digitalaccord/' target='_blank'>
                      <img src={facebook} alt="" />
                    </Link>
                    <Link to='https://au.linkedin.com/company/digital-accord' target='_blank'>
                      <img src={Linkdin} alt="" />
                    </Link>
                    <Link to='https://www.instagram.com/digitalaccord/' target='_blank'>
                      <img src={insta} alt="" />
                    </Link>
                  </div>
                </div>
                <div className='col-md-12 col-lg-7'>
                  <div className='d-flex flex-wrap ' style={{gap:"80px"}}>
                    <div className='list'>
                      <ul>
                        <li style={{ marginTop: "0px" }}>
                          <Link to='/'>Home</Link>
                        </li>

                        <li>
                          <Link to='/contact'>Contact Us</Link>
                        </li>

                        <li>
                          <Link to='/about'>About Us</Link>
                        </li>

                        <li>
                          <Link to='/singular'>Careers</Link>
                          </li>
                        <li>
                          <Link to='/blog'>Blog</Link>
                        </li>

                      </ul>
                    </div>
                    <div className='list'>
                      <ul>
                        <li style={{ marginTop: "0px" }}>
                          <Link to='/seo'>Digital Performance</Link>
                        </li>
                        <li>
                          <Link to='/user'>User Experience</Link>
                        </li>
                        <li>
                        <a href='#/'>Business IT</a>
                          </li>


                      </ul>
                    </div>
                    <div className='list' style={{ width: "200px" }}>
                      <p><a href='tel:0735540017' style={{color:"white",textDecoration:"none"}}>(07) 3554 0017</a></p>
                      <p className='footer-address pt-2'>Suite 30, Lvl 7 445 Upper Edward ST Spring Hill, BRISBANE CITY 4000</p>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

      </div>
      <div className='container custom-container '>
        <div className='row copyright-row' >
          <hr style={{ color: 'white' }} className='d-sm-block d-md-none'></hr>
          <div className='copyright-wrapper' style={{paddingBottom:"26px"}}>
            <div className='copyrightLeft'>
              <Link to="/privacy" style={{textDecoration:"none"}}><p className='text-white'>Privacy</p></Link>
              <Link to='/terms' style={{textDecoration:"none"}}><p className='text-white'>Terms & Conditions</p></Link>
            </div>
            <div className='corightRight'>
              <p className='text-white'>Copyright © Digital Accord Pty Ltd ACN: 166 737 819 | ABN: 63 166 737 819</p>
            </div>
          </div>
        </div>
      </div> 
      <M_Footer/>
    </>
  )
}

export default Footer