import React, { useState, useEffect } from 'react';
import ReCAPTCHA from "react-google-recaptcha";
import './letsTalk.scss'
import arrow from '../../assets/Arrow 4.png'
import map from '../../assets/banner/map.png'
import { Toaster, toast } from 'sonner'
import map_pointer from '../../assets/contact/market.png'
import { useNavigate } from 'react-router-dom'

const LetsTalk = () => {
    const navigate = useNavigate();

  const [getData, setGetData] = useState({
    input_1: "",
    input_3: "",
    input_2: "",
    input_5: ""
  })

  const [isFormValid, setIsFormValid] = useState(false);
  const [recaptchaValue, setRecaptchaValue] = useState(null);
  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(!click)
  }


  useEffect(() => {
    const fieldsToCheck = ['input_1', 'input_3', 'input_2'];
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
    for (const key in getData) {
      if (key !== 'input_5' && !getData[key].trim()) {
        toast.error(`Please fill in the ${key} field`);
        return;
      }
    }

    if (recaptchaValue === null) {
      toast.error('Please complete the reCAPTCHA verification');
      return;
    }

    try {

      const base64Credentials = btoa(`${process.env.REACT_APP_GFCK}:${process.env.REACT_APP_GFCS}`);

      console.log("base64creds", base64Credentials);

      const response = await fetch(`${process.env.REACT_APP_GFEP}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Basic ${base64Credentials}`
        },
        body: JSON.stringify(getData),
      });

      console.log("Response", response);

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
        navigate('/thanks');
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
      <div className='form-section' id='LetsTalk'>
        <div className='circle-blur'></div>
        <div className='container custom-container'>
          <div className='row'>
            <div className='col-md-3'>
              <div className='talk-wrapper'>

                <div className='talk-content'>
                  <h1>Let’s Talk.</h1>
                  <p><a href='tel:0735540017' style={{color:"white",textDecoration:"none"}}>(07) 3554 0017</a></p>
                  <p className='small-text pb-4 mt-4'>Suite 30, Lvl 7 445 Upper Edward St Spring Hill, BRISBANE CITY 4000</p>

                </div>
              </div>
            </div>
            <div className='col-md-9'>
              <div className='left-section-wraper'>
                <div className='map-wraper'>
                  <img src={map} alt="" />
                  <div className='map_pointer_wrapper'>
                    <div className={click ? "click_content" : ""}>
                      <p className={click ? "click_content_p" : "d-none"}>(07) 3554 0017</p>
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
                        name='input_1'
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
                        name="input_3"
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
                        name='input_2'
                        className="form-control"
                        id="exampleInputPassword1"
                        autoComplete="off" />

                    </div>

                    <div class="mb-3">
                      <label for="exampleInputPassword1" class="form-label" style={{ marginBottom: "100px" }}>Message</label>
                      <input type="text"
                        value={getData.message}
                        onChange={handleInputChange}
                        name='input_5'
                        class="form-control"
                        id="exampleInputPassword1"
                        autoComplete="off" />
                    </div>
                    <ReCAPTCHA
                      sitekey={process.env.NODE_ENV === 'production' ? '6Lef-qQZAAAAAAcIH3xdvIhwX4twfrQg0d4Kpjxh' : '6Lfx7EYpAAAAAIygBtjsfzyId4v9PugyraEzOXLm'}
                      onChange={handleRecaptchaChange}
                      className='re_captcha'
                    />

                    <button type="submit"
                      className="btn submit-btn d-flex justify-content-between mt-3"
                      disabled={!getData.input_1 || !getData.input_3 || !getData.input_2}
                    ><p style={{ margin: 0 }}>Submit Message</p><img src={arrow} className='form-btn-arrow' style={{ maxWidth: "68px" }} alt=""/></button>
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