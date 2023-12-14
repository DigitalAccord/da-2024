import React,{useState} from 'react'
import './add.scss'
import { FacebookIcon, GoogleIcon, InstaIcon, LinkedinIcon } from '../../assets/svgIcons'
import sunFlower from '../../assets/Addvertizement/Sunlover.png'
import instagramImage from '../../assets/about/orangebg.png'
const Add = () => {
    const [adType, setAdType] = useState('Facebook');
    const [selectedImage, setSelectedImage] = useState(sunFlower);

    const handleButtonClick = (type) => {
        console.log('Selected Ad Type:', type);
        setAdType(type);
      
        switch (type) {
          case 'Facebook':
            console.log('Setting image for Facebook');
            setSelectedImage(sunFlower);
            break;
          case 'Instagram':
            console.log('Setting image for Instagram');
            setSelectedImage(instagramImage);
            break;
          // Add more cases for other ad types if needed
          default:
            console.log('Setting default image');
            setSelectedImage(sunFlower);
        }
      };
      
    return (
        <>
            <div className='add-section'>
                <div className='add-blur-effect'></div>
                <div className='add-content-section'>
                    <div className='add-section-text'>

                        <h1> Social<br />Media</h1>
                        <h2>Advertising.</h2>
                        <h3>Drive Creative Messaging To Your Audience.</h3>
                        <p>The average Australian spends 2.24 hours on social media per day. With that in mind, if you are not advertising on social media than you are missing out on some strong exposure to your specific audience every day. Digital Accord offers affordable social media management that incorporates creative messaging and stand out ads – you are bound to improve brand awareness and enquiries with the right audience.</p>
                    </div>
                </div>
            </div>
            <div className='add-section2'>
                <div className='add-section2-wrapper'>
                    <div className='section2-left'>
                        <div className='section2-text'>
                            <h2>Advertise On</h2>
                            <h1>{adType}</h1>
                            <p>Whatever your advertising goal, Facebook offers a variety of formatting and campaign styles to guarantee that your company is successfully shown and targeted. With the capacity to target advertisements down to work responsibilities, connections, life hobbies, and much more, Digital Accord has a team of specialists who design the proper approach around your personal business goals. Assuring that your company is never overlooked!</p>
                        </div>
                        <div className='timeline'>
                            <div className='inner_timeline'></div>
                            <div className='events'>
                                <ol>
                                    <li className='selected'><p >
                                        Lead Generation
                                    </p></li>
                                    <li><p>Messages (Automated)</p></li>
                                    <li><p>Traffic Building & Brand Awareness</p></li>
                                    <li><p>Catalog Sales</p></li>
                                    <li ><p>Store Visitors</p></li>
                                    <li><p>App Installs</p></li>
                                    <li><p>Video Views</p></li>

                                </ol>


                            </div>
                        </div>
                        <div className='section2-btn-section'>
                            <div className='section-btn'>
                                <button onClick={() => handleButtonClick('Facebook')}>
                                    <FacebookIcon />
                                </button>
                                <button onClick={() => handleButtonClick('Instagram')}>
                                    <InstaIcon />
                                </button>
                                <button onClick={() => handleButtonClick('LinkedIn')}>
                                    <LinkedinIcon />
                                </button>
                                <button onClick={() => handleButtonClick('Google')}>
                                    <GoogleIcon />
                                </button>
                            </div>
                        </div>

                    </div>
                    <div className='section2-right'>
                    <div className='section-right-img' style={{ backgroundImage: `url(${selectedImage})` }}></div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Add