import React, { useEffect, useState } from 'react';



import './ThankYou.scss';
import pointer from '../../assets/contact/market.png';
import arrow from '../../assets/Arrow 4.png';
import { Link } from 'react-router-dom';

const ThankYou = () => {
  
  const [click, setClick] = useState(false);
  const handleClick = () => {
    setClick(!click)
  }


  return (
    <>


      <div className='map-section'>
        <div className='bulr_effect_contact'></div>
        <div className='container contact_container'>
          <div className='row map_row'>
          <div className='map_section_left'>
          <div className={click ? "click_content" : ""}>
            <p className={click ? "click_content_p" : "d-none"}>(01) 2345 6789</p>
            <h5 className={click ? "click_content_h3" : "d-none"}>Suite 30, Lvl 7 445 Upper Edward St Spring Hill, BRISBANE CITY 4000</h5>
          </div>
        <div className='pointer_img' onClick={handleClick}>
          <img src={pointer} className='sdj' />
        
        </div>
        </div>

        <div className='contact-form' >
          <div className='form-text'>
            <h1>Thank<br></br> You!</h1>
            <p>Thank you for reaching out to us! We appreciate your interest and have received your message. Our team is dedicated to providing prompt and thoughtful responses to inquiries. We will review your submission and get back to you as soon as possible. In the meantime, if you have any urgent matters, feel free to contact us directly at [your contact information]. Thank you again for choosing us, and we look forward to assisting you!</p>
          </div>
          <Link to='/' type="submit"
           className="btn submit-btn d-flex justify-content-between">

            <img src={arrow} className='thank-btn-arrow' style={{ maxWidth: "68px" }} />
            <p style={{ margin: 0 }}>Back To Home</p>
            </Link>
        
        </div>
          </div>
        </div>
      </div>

      {/* <div className='mobile_map_seciton'>
        <div className='mobile_map_bg'>
          <div className='mobile_map_heading'>
            <h1>Let’s<br />Talk.</h1>
          </div>
          <div className={click ? "click_content" : ""}>
            <p className={click ? "click_content_p" : "d-none"}>(01) 2345 6789</p>
            <h5 className={click ? "click_content_h3" : "d-none"}>Suite 30, Lvl 7 445 Upper Edward St Spring Hill, BRISBANE CITY 4000</h5>
          </div>
          <div className='mobile_pointer' onClick={handleClick}>
            <img src={pointer} className='mobile_img' />
          </div>
        </div>
        <div className='Mobile_form'>
        <div className='form-wrapper '>
            <form>
              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label mb-0">Name</label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />

              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label mb-0">Contact Number</label>
                <input type="password" className="form-control" id="exampleInputPassword1" />
              </div>

              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label mb-0">Email</label>
                <input type="password" className="form-control" id="exampleInputPassword1" />
              </div>

              <div class="mb-5">
                <label for="exampleInputPassword1" class="form-label" style={{ marginBottom: "100px" }}>Message</label>
                <input type="text" class="form-control" id="exampleInputPassword1" />
              </div>

              <button type="submit" className="btn submit-btn d-flex justify-content-between"><p style={{ margin: 0 }}>Submit Message</p><img src={arrow} className='form-btn-arrow' style={{ maxWidth: "68px" }} /></button>
            </form>
          </div>
        </div>
        <div className='contact_line'></div>
      </div> */}

     
    </>
  );
};

export default ThankYou;
