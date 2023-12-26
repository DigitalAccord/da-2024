import React,{useState} from 'react'
import './googleAds.scss'
import mobile from "../../assets/management/googlemobile.png";
import { RiVideoLine } from "react-icons/ri";
import { IoIosSearch} from "react-icons/io";
import { GoImage } from "react-icons/go";
import { IoApps } from "react-icons/io5";
import { CiShoppingTag } from "react-icons/ci";
import search from "../../assets/management/searchimg.png"

import { MdKeyboardDoubleArrowDown } from "react-icons/md";
import Gallery from '../Seo/component/Gallery/Gallery';
import Category from '../../component/category/Category';
import Accordian from '../Seo/component/Accordian/Accordian';
import LetsTalk from '../../component/LetsTalk/LetsTalk';

import searchicon from "../../assets/management/searchicon.png";





import shopping from "../../assets/management/shopping.png";
import display from "../../assets/management/displayicon.png";
import video from "../../assets/management/videoicon.png";
import app from "../../assets/management/appicon.png";
import down from "../../assets/management/downarrow.png";

const GoogleAds = () => {
    const [adType, setAdType] = useState('Search');
    const [selectedImage, setSelectedImage] = useState(searchicon);
    const [textContent, setTextContent] = useState({
        Search: {
            title: 'Search.',
            content: 'Google Search campaigns drive results through the Google Search Engine when customers search for a specific keyword that is related to your business, the plus side to these campaigns is that you only have to pay when someone directly clicks on your ad. With continuous optimisation and conversation tracking – Digital Accord strives to deliver the optimal results for your business.'
        },
        Display: {
            title: 'Display.',
            content: 'Flood the market with branding techniques that help you discover the right audience. The display network lets you target strategically when showing messages and ads to your customers. Whether the users have been searching for your products previously but may not have seen your business or users who have been to your website but are still in the research and decision-making phase of their purchase.'
        },
        Shopping: {
            title: 'Shopping.',
            content: 'Unlike the typical search campaigns on Google, Google Shopping ads are used through merchant centre product data and not selected keywords. If you are a retailer then it is vital to be using this campaign type to promote your online business and local inventory. Google Shopping Ads Brisbane allow for better-qualified leads and a broader presence of the market which can be optimised with the powerful reporting options available for each product.'
        },
        Video: {
            title: 'Video.',
            content: 'Connect with your audience through story telling. With a variety of different campaign formats such as skippable in-stream ads, non-skippable in-stream ads, bumper ads, discovery ads and masthead ads. There are multiple ways to reach your audience and effectively showcase your brand or product.'
        },
        App: {
            title: 'App.',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ut felis nunc. Sed molestie rhoncus rutrum. Maecenas lorem mi, hendrerit fermentum congue pretium, iaculis sed orci. Proin vel eros risus. Maecenas non risus eget turpis ultricies pharetra at sed mauris. Maecenas commodo massa consequat auctor lacinia. Sed hendrerit pellentesque placerat. Duis vehicula consectetur tincidunt.'
        }
    });

    const handleButtonClick = (type) => {
        console.log('Selected Ad Type:', type);
        setAdType(type);
        setSelectedImage(getImageForType(type));
    };

    const getImageForType = (type) => {
        switch (type) {
            case 'Search':
                return searchicon;
            case 'Display':
                return display;
            case 'Shopping':
                return shopping;
            case 'Video':
                return video;
            case 'App':
                return app;
            default:
                return searchicon;
        }
    };
  return (
    <>
       <div className='google'>
                <div className="container">
                    <div className='google-ads'>
                        <div className='google-left'>
                            
                        </div>
                        <div className='google-right'>
                            <h2>Drive the right traffic to your website through</h2>
                            <h1>Google Ads.</h1>
                        </div>
                    </div>
                </div>
            </div>


            <div className='search'>
                <div className='container'>
                    <div className='search-section2-wrapper'>
                        <div className='section2-left'>
                            <div className='section2-text'>
                                <h2>Start With</h2>
                                <h1>{textContent[adType].title}</h1>
                                <p>{textContent[adType].content}</p>
                            </div>
                        </div>
                        <div className='section2-right'>
                            <div className='section2-icon'>
                                <img src={selectedImage} alt={`Selected ${adType} Image`} />
                            </div>
                            <div className='section2-bottom'></div>
                        </div>
                    </div>
                    <div className='search-googledads'>
                        <div className='googleads'>
                            <h2> <span> What is </span>Google Ads?</h2>
                        </div>
                        <div className="search-button">
                            <button onClick={() => handleButtonClick('Search')} className="search-button">
                                <IoIosSearch className="facebook-icon" />
                                <p>Search</p>
                            </button>
                            <button onClick={() => handleButtonClick('Display')} className="display-button">
                                <GoImage className="facebook-icon" />
                                <p>Display</p>
                            </button>
                            <button onClick={() => handleButtonClick('Shopping')} className="shopping-button">
                                <CiShoppingTag className="facebook-icon" />
                                <p>Shopping</p>
                            </button>
                            <button onClick={() => handleButtonClick('Video')} className="video-button">
                                <RiVideoLine className="facebook-icon" />
                                <p>Video</p>
                            </button>
                            <button onClick={() => handleButtonClick('App')} className="app-button">
                                <IoApps className="facebook-icon" />
                                <p>App</p>
                            </button>
                        </div>
                    </div>
                    <div className='casestudies'>
                        <h5>View Case Studies</h5>
                        <MdKeyboardDoubleArrowDown />
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

export default GoogleAds