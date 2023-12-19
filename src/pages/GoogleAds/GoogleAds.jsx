import React from 'react'
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
const GoogleAds = () => {
  return (
    <>
     <div className='google'>
                <div className="container">
                    <div className='google-ads'>
                        <div className='google-left'>
                            <img src={mobile} />
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
                  <h1>Search.</h1>
                                <p>Google Search campaigns drive results through the Google Search
                                    Engine when customers search for a specific keyword that is related to
                                    your business, the plus side to these campaigns is that you only have to
                                pay when someone directly clicks on your ad. With continuous optimisation and conversation tracking –
                                Digital Accord strives to deliver the optimal results for your business.</p>
                        </div>
                    </div>
                    <div className='section2-right'>
                        <img src={search} />
                    </div>
                </div>
                <div className='search-googledads'>
                    <div className='googleads'>
                        <h2> <span> What is </span>Google Ads?</h2>        
                    </div>
                    <div className="search-button">
                        <button>
                        <IoIosSearch />
                            <p>Search</p>
                        </button>
                        <button>
                            <GoImage />
                            <p>Display</p>
                        </button>
                        <button>
                            <CiShoppingTag  />
                            <p>Shopping</p>
                        </button>
                        <button>
                            <RiVideoLine />
                            <p>Video</p>
                        </button>
                        <button>
                            <IoApps />
                            <p>App</p>
                        </button>
                    </div>
                    </div>

                    <div className='casestudies'>
                    <h5>View Case Studies</h5>
                    <MdKeyboardDoubleArrowDown  />
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