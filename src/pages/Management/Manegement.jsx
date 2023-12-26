import React,{useState} from 'react'
import './manegement.scss'
import {  InstagramIcon, FacebookIcon, LinkedinIcon, GoogleIcon } from '../../assets/svgIcons';
import facebook from "../../assets/management/facebook.png";
import down from "../../assets/management/downarrow.png";
import instagramImage from  "../../assets/management/instagramimg.png";
import linkedin from  "../../assets/management/LinkedIn.png";
import gooleimage from  "../../assets/management//google.png";

import Gallery from '../Seo/component/Gallery/Gallery';
import Category from '../../component/category/Category';
import Accordian from '../Seo/component/Accordian/Accordian';
import LetsTalk from '../../component/LetsTalk/LetsTalk';
import { FaInstagram, FaLinkedin } from 'react-icons/fa';
import { FaSquareFacebook } from "react-icons/fa6";
import { SiGooglemybusiness } from "react-icons/si";
const Manegement = () => {
    const [adType, setAdType] = useState('Facebook');
    const [selectedImage, setSelectedImage] = useState(facebook);
    const [backgroundColor, setBackgroundColor] = useState('#0270da');
  
    const handleButtonClick = (type) => {
      console.log('Selected Ad Type:', type);
      setAdType(type);
  
      switch (type) {
        case 'Facebook':
          console.log('Setting image for Facebook');
          setSelectedImage(facebook);
          setBackgroundColor('linear-gradient(270deg, #15A7FD 13.1%, #0270DA 56.2%)');
          break;
        case 'Instagram':
          console.log('Setting image for Instagram');
          setSelectedImage(instagramImage);
          setBackgroundColor(
            'radial-gradient(124.65% 124.65% at 37.17% 100.07%, #FD5 0%, #FF543F 32.8%, #FC5245 34.8%, #E64771 50.4%, #D53E91 64.3%, #CC39A4 76.1%, #C837AB 84.1%)'
          );
          break;
  
        case 'LinkedIn':
          console.log('Setting image for LinkedIn');
          setSelectedImage(linkedin);
          setBackgroundColor('linear-gradient(180deg, #005883 0%, #007FBC 56.25%)');
          break;
  
        case 'Google':
          console.log('Setting image for Google');
          setSelectedImage(gooleimage);
          setBackgroundColor(
            'conic-gradient(from 154deg at 74.69% 49.02%, #2196F3 18.749999552965164deg, #2196F3 155.6249964237213deg, #1E88E5 234.37500715255737deg, #3F51B5 360deg)'
          );
          break;
  
        default:
          console.log('Setting default image');
          setSelectedImage(facebook);
          setBackgroundColor('#0270da');
      }
    };
  
  return (
   <>
    <div className='socialmedia'>
            <div className="social-arrow-right"></div>
            <div className="social-arrow-left"></div>
                <div className='socialmedia-text'>
                    <p>We Engage With<br></br> Your Followers & <br></br> Handle Your</p>
                </div>
                <div className='media'>
                    <div className='media-text'>
                        <p>We Engage With Your <br></br>Followers & Handle Your</p>
                        <h2>Social Media<br></br> <span>Management.</span></h2>
                    </div>
                </div>
                <div className='social-text'>
                    <div className='bottom-text'>
                        <p>Are you struggling to find the time to post to your social media accounts and engage
                            with your followers? Coming up with content and planning posts in advance
                            can be super tiring, especially if you are putting the time into running your business!</p>
                        <p>It is important to connect to new customers and strengthen relationships with existing ones
                            through a constant flow of creative and meaningful content. At Digital Accord, we take the time
                            to get to know you and your business so we can effectively create a social media plan to suit your business needs.
                            We take the stress away by planning, scheduling and analysing content on each platform.</p>
                        <p>It is important to connect to new customers and strengthen relationships with existing ones through
                            a constant flow of creative and meaningful content. At Digital Accord, we take the time to get to know
                            you and your business so we can effectively create a social media plan
                            to suit your business needs. We take the stress away by planning, scheduling
                            and analysing content on each platform.</p>
                    </div>
                </div>
              <div className="arrow-bottom"></div>
            </div>


            <div className="facebook" style={{ background: backgroundColor }}>
        <div className="container">
          <div className="add-section2-wrapper">
            <div className="section2-left">
              <div className="section2-text">
                <h2>Grow With</h2>
                <h1>{adType}</h1>
                <p>
                  Google Search campaigns drive results through the Google Search Engine when customers search for a specific keyword that is related to your business, the plus side to these campaigns is that you only have to pay when someone directly clicks on your ad. With continuous optimisation and conversation tracking – Digital Accord strives to deliver the optimal results for your business.
                </p>
              </div>
            </div>
            <div className="section2-right" style={{ backgroundImage: `url(${selectedImage})` }}></div>
          </div>
          <div className="socialmedia-facebook">
            <div className="facebook-bottom">
              <h2>
                <span> What is Social </span>Media Management?
              </h2>
              <div className="socialmedia-button">
                <button
                  onClick={() => handleButtonClick('Facebook')}
                  className="facebook-button"
                  style={{ backgroundColor: adType === 'Facebook' ? '#fff' : 'transparent' }}
                >
                  <FaSquareFacebook style={{ fill: adType === 'Facebook' ? '#181D26' : '#fff' }} />
                  <p style={{ color: adType === 'Facebook' ? '#181D26' : '#fff' }}>Facebook</p>
                </button>
                <button
                  onClick={() => handleButtonClick('Instagram')}
                  className="instagram-button"
                  style={{ backgroundColor: adType === 'Instagram' ? '#fff' : 'transparent' }}
                >
                  <FaInstagram style={{ fill: adType === 'Instagram' ? '#181D26' : '#fff' }} />
                  <p style={{ color: adType === 'Instagram' ? '#181D26' : '#fff' }}>Instagram</p>
                </button>
                <button
                  onClick={() => handleButtonClick('LinkedIn')}
                  className="linked-button"
                  style={{ backgroundColor: adType === 'LinkedIn' ? '#fff' : 'transparent' }}
                >
                  <FaLinkedin style={{ fill: adType === 'LinkedIn' ? '#181D26' : '#fff' }} />
                  <p style={{ color: adType === 'LinkedIn' ? '#181D26' : '#fff' }}>LinkedIn</p>
                </button>
                <button
                  onClick={() => handleButtonClick('Google')}
                  className="googlebusiness"
                  style={{ backgroundColor: adType === 'Google' ? '#fff' : 'transparent' }}
                >
                  <SiGooglemybusiness  style={{ fill: adType === 'Google' ? '#181D26' : '#fff' }} />
                  <p style={{ color: adType === 'Google' ? '#181D26' : '#fff' }}>Google My Business</p>
                </button>
              </div>
            </div>
          </div>
          <div className="casestudies">
            <h5>View Case Studies</h5>
            <img src={down} alt="down arrow" />
          </div>
        </div>
      </div>
        <Gallery/> 
        <Category/>
        <Accordian/>
        <LetsTalk/>
   </>
  )
}

export default Manegement