import React, { useState, useEffect } from 'react';
import ReCAPTCHA from "react-google-recaptcha";
import './letsTalk.scss'
import arrow from '../../assets/Arrow 4.png'
import map from '../../assets/banner/map.png'
import { Toaster, toast } from 'sonner'
import map_pointer from '../../assets/contact/market.png'

const LetsTalk = () => {

  const [getData, setGetData] = useState({
    username: "",
    contact: "",
    email: "",
    message: ""
  })

  const [isFormValid, setIsFormValid] = useState(false);
  const [recaptchaValue, setRecaptchaValue] = useState(null);
  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(!click)
  }


  useEffect(() => {
    const fieldsToCheck = ['username', 'contact', 'email'];
    setIsFormValid(fieldsToCheck.some((field) => getData[field] !== ''));
  }, [getData, recaptchaValue]);

  const handleRecaptchaChange = (value) => {
    setRecaptchaValue(value);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setGetData({
      ...getData,
      [name]: value,
    });
  }
  
  const handleSubmit = async (e) => {
    e.preventDefault();

    // const formData = new FormData(e.target);
    // const data = {};
    // formData.forEach((value, key) => {
    //   data[key] = value;
    // });
    for (const key in getData) {
      if (key !== 'message' && !getData[key].trim()) {
        toast.error(`Please fill in the ${key} field`);
        return;
      }
    }

    if (recaptchaValue === null) {
      toast.error('Please complete the reCAPTCHA verification');
      return;
    }

    try {
      const response = await fetch(`${process.env.REACT_APP_API_BASEURL}/send-email`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(getData),
      });

      if (response.ok) {
        toast.success('Email sent successfully');
        console.log('Email sent successfully');
        setGetData({
          username: '',
          contact: '',
          email: '',
          message: '',
        });
        setIsFormValid(false);
      } else {
        toast.error('Failed to send email');
        console.error('Failed to send email');
      }
    } catch (error) {
      toast.error('Failed to send email');
      console.error('Error sending email', error);
    }
  };



  return (
    <>
      <div className='form-section'>
        <div className='circle-blur'></div>
        <div className='container custom-container'>
          <div className='row'>
            <div className='col-md-3'>
              <div className='talk-wrapper'>

                <div className='talk-content'>
                  <h1>Let’s Talk.</h1>
                  <p>(07)355400017</p>
                  <p className='small-text pb-4'>Suite 30, Lvl 7 445 Upper Edward St Spring Hill, BRISBANE CITY 4000</p>

                </div>
              </div>
            </div>
            <div className='col-md-9'>
              <div className='left-section-wraper'>
                <div className='map-wraper'>
                  {/* <iframe className='iframe' style={{ filter: "invert(80%)", width: "100%", height: "596px", borderRadius: "35px" }} src="https://www.google.com/maps/embed?..."></iframe> */}
                  <img src={map} alt="" />
                  <div className='map_pointer_wrapper'>
                    <div className={click ? "click_content" : ""}>
                      <p className={click ? "click_content_p" : "d-none"}>(01) 2345 6789</p>
                      <h5 className={click ? "click_content_h3" : "d-none"}>Suite 30, Lvl 7 445 Upper Edward St Spring Hill, BRISBANE CITY 4000</h5>
                    </div>
                    <div className='map_pointer' onClick={handleClick}>
                      <img src={map_pointer} className='' />

                    </div>
                  </div>
                </div>

                <div className='form-wrapper'>
                  <form onSubmit={handleSubmit}>
                    <div class="mb-3">
                      <label for="exampleInputEmail1" class="form-label mb-0">Name</label>
                      <input type="text"
                        name='username'
                        value={getData.username}
                        onChange={handleInputChange}
                        class="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        autoComplete="off" />

                    </div>
                    <div className="mb-3">
                      <label htmlFor="exampleInputPassword1" className="form-label mb-0">Contact Number</label>
                      <input type="text"
                        name="contact"
                        value={getData.contact}
                        onChange={handleInputChange}
                        className="form-control"
                        id="exampleInputPassword1"
                        autoComplete="off" />
                    </div>

                    <div className="mb-3">
                      <label htmlFor="exampleInputPassword1" className="form-label mb-0">Email</label>
                      <input type="email"
                        value={getData.email}
                        onChange={handleInputChange}
                        name='email'
                        className="form-control"
                        id="exampleInputPassword1"
                        autoComplete="off" />

                    </div>

                    <div class="mb-3">
                      <label for="exampleInputPassword1" class="form-label" style={{ marginBottom: "100px" }}>Message</label>
                      <input type="text"
                        value={getData.message}
                        onChange={handleInputChange}
                        name='message'
                        class="form-control"
                        id="exampleInputPassword1"
                        autoComplete="off" />
                    </div>
                    <ReCAPTCHA
                      sitekey="6Lfx7EYpAAAAAIygBtjsfzyId4v9PugyraEzOXLm"
                      onChange={handleRecaptchaChange}
                      className='re_captcha'
                    />

                    <button type="submit"
                      className="btn submit-btn d-flex justify-content-between mt-3"
                      disabled={!getData.username || !getData.contact || !getData.email}
                    ><p style={{ margin: 0 }}>Submit Message</p><img src={arrow} className='form-btn-arrow' style={{ maxWidth: "68px" }} /></button>
                  </form>
                  <Toaster position="top-right" richColors />
                </div>

              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default LetsTalk