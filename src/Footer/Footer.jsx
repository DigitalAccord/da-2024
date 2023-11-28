import React from 'react'
import './footer.scss'
import arrow from '../assets/Arrow 4.png'
import footerImg from '../assets/Arrow 2.png'
import { MainLogo } from '../assets/svgIcons'
const Footer = () => {
  const logoStyle = { height: '83px', width: '75px' };

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
                  <iframe className='iframe' style={{ filter: "invert(80%)", width: "100%", height: "596px", borderRadius: "35px" }} src="https://www.google.com/maps/embed?..."></iframe>


                </div>
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
                      <input type="password" class="form-control" id="exampleInputPassword1" />
                    </div>

                    <button type="submit" className="btn submit-btn d-flex justify-content-between"><p style={{ margin: 0 }}>Submit Message</p><img src={arrow} className='form-btn-arrow' style={{ maxWidth: "68px" }} /></button>
                  </form>
                </div>

              </div>

            </div>
          </div>
        </div>
      </div>

      <div className='footer'>
        <div className='container custom-container'>
          <div className='row'>
            <div className='d-flex justify-content-between align-items-center'>
              <div className='footer-arrow-img d-flex align-items-center gap-3 '>
                <img src={footerImg} />
                <p className='' style={{ color: "white", marginTop: "12px" }}>raahul.decrypt@gmail.com</p>
              </div>

              <div className='footer-line'></div>
            </div>

            <div className='main-footer' style={{ paddingTop: "45px" }}>

              <div className='row'>

                <div className='col-md-12 col-lg-5 '>
                  <div className='mb-4'>
                    <MainLogo height={logoStyle.height} width={logoStyle.width} className="rotate" />
                  </div>
                  <div className='d-flex pb-5'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="208" height="64" viewBox="0 0 208 64" fill="none"  >
                      <circle cx="32" cy="32" r="31.75" fill="white" fill-opacity="0.1" stroke="white" stroke-width="0.5"
                        style={{ cursor: "pointer" }} />
                      <circle cx="104" cy="32" r="31.75" fill="white" fill-opacity="0.1" stroke="white" stroke-width="0.5"
                        style={{ cursor: "pointer" }} />
                      <circle cx="176" cy="32" r="31.75" fill="white" fill-opacity="0.1" stroke="white" stroke-width="0.5"
                        style={{ cursor: "pointer" }} />
                      <path d="M114.528 18H92.7355C92.2101 18 91.7062 18.2208 91.3346 18.6138C90.9631 19.0068 90.7544 19.5399 90.7544 20.0957V43.1486C90.7544 43.7044 90.9631 44.2375 91.3346 44.6305C91.7062 45.0235 92.2101 45.2443 92.7355 45.2443H114.528C115.053 45.2443 115.557 45.0235 115.929 44.6305C116.3 44.2375 116.509 43.7044 116.509 43.1486V20.0957C116.509 19.5399 116.3 19.0068 115.929 18.6138C115.557 18.2208 115.053 18 114.528 18ZM99.6694 37.9093C99.6694 38.1872 99.565 38.4537 99.3792 38.6502C99.1935 38.8468 98.9415 38.9572 98.6788 38.9572C98.4161 38.9572 98.1642 38.8468 97.9784 38.6502C97.7926 38.4537 97.6883 38.1872 97.6883 37.9093V29.5264C97.6883 29.2485 97.7926 28.982 97.9784 28.7855C98.1642 28.589 98.4161 28.4786 98.6788 28.4786C98.9415 28.4786 99.1935 28.589 99.3792 28.7855C99.565 28.982 99.6694 29.2485 99.6694 29.5264V37.9093ZM98.6788 27.4307C98.3849 27.4307 98.0977 27.3385 97.8533 27.1658C97.609 26.9931 97.4185 26.7476 97.3061 26.4604C97.1936 26.1732 97.1642 25.8572 97.2215 25.5523C97.2789 25.2474 97.4204 24.9673 97.6282 24.7475C97.836 24.5277 98.1007 24.378 98.3889 24.3173C98.6772 24.2567 98.9759 24.2878 99.2474 24.4068C99.5189 24.5258 99.751 24.7272 99.9142 24.9857C100.078 25.2442 100.165 25.5481 100.165 25.8589C100.165 26.2758 100.008 26.6756 99.7295 26.9704C99.4508 27.2651 99.0729 27.4307 98.6788 27.4307ZM110.565 37.9093C110.565 38.1872 110.461 38.4537 110.275 38.6502C110.09 38.8468 109.838 38.9572 109.575 38.9572C109.312 38.9572 109.06 38.8468 108.874 38.6502C108.689 38.4537 108.584 38.1872 108.584 37.9093V33.1939C108.584 32.4992 108.323 31.8328 107.859 31.3416C107.395 30.8503 106.765 30.5743 106.108 30.5743C105.451 30.5743 104.821 30.8503 104.357 31.3416C103.892 31.8328 103.632 32.4992 103.632 33.1939V37.9093C103.632 38.1872 103.527 38.4537 103.341 38.6502C103.156 38.8468 102.904 38.9572 102.641 38.9572C102.378 38.9572 102.126 38.8468 101.941 38.6502C101.755 38.4537 101.65 38.1872 101.65 37.9093V29.5264C101.652 29.2698 101.742 29.0225 101.904 28.8315C102.066 28.6406 102.289 28.5192 102.53 28.4905C102.771 28.4617 103.014 28.5276 103.212 28.6756C103.41 28.8235 103.55 29.0433 103.606 29.2933C104.276 28.8124 105.057 28.5337 105.865 28.4871C106.674 28.4405 107.479 28.6278 108.195 29.0288C108.91 29.4298 109.509 30.0294 109.927 30.7632C110.344 31.497 110.565 32.3374 110.565 33.1939V37.9093Z" fill="white" />
                      <path d="M181.329 18H169.443C167.604 18.0021 165.842 18.7755 164.542 20.1507C163.242 21.5258 162.511 23.3903 162.509 25.335V37.9093C162.511 39.854 163.242 41.7185 164.542 43.0936C165.842 44.4688 167.604 45.2422 169.443 45.2443H181.329C183.168 45.2422 184.93 44.4688 186.23 43.0936C187.53 41.7185 188.261 39.854 188.263 37.9093V25.335C188.261 23.3903 187.53 21.5258 186.23 20.1507C184.93 18.7755 183.168 18.0021 181.329 18ZM175.386 37.9093C174.21 37.9093 173.061 37.5406 172.084 36.8497C171.107 36.1589 170.345 35.177 169.895 34.0281C169.445 32.8793 169.328 31.6152 169.557 30.3956C169.786 29.176 170.352 28.0557 171.183 27.1765C172.015 26.2972 173.074 25.6984 174.226 25.4558C175.379 25.2132 176.574 25.3377 177.66 25.8136C178.746 26.2894 179.675 27.0953 180.328 28.1292C180.981 29.1631 181.329 30.3787 181.329 31.6221C181.328 33.2891 180.701 34.8872 179.587 36.0659C178.472 37.2446 176.962 37.9076 175.386 37.9093ZM182.815 25.335C182.521 25.335 182.234 25.2428 181.99 25.0701C181.745 24.8974 181.555 24.6519 181.442 24.3647C181.33 24.0775 181.301 23.7615 181.358 23.4566C181.415 23.1517 181.557 22.8716 181.764 22.6518C181.972 22.432 182.237 22.2823 182.525 22.2216C182.813 22.161 183.112 22.1921 183.384 22.3111C183.655 22.43 183.887 22.6315 184.051 22.89C184.214 23.1485 184.301 23.4523 184.301 23.7632C184.301 24.1801 184.144 24.5799 183.866 24.8746C183.587 25.1694 183.209 25.335 182.815 25.335ZM179.348 31.6221C179.348 32.4511 179.116 33.2615 178.68 33.9508C178.245 34.6401 177.626 35.1773 176.902 35.4945C176.178 35.8118 175.382 35.8948 174.613 35.733C173.844 35.5713 173.138 35.1721 172.584 34.5859C172.03 33.9998 171.653 33.2529 171.5 32.4399C171.347 31.6268 171.425 30.784 171.725 30.0182C172.025 29.2523 172.533 28.5977 173.185 28.1371C173.836 27.6765 174.602 27.4307 175.386 27.4307C176.437 27.4307 177.445 27.8723 178.188 28.6584C178.931 29.4444 179.348 30.5105 179.348 31.6221Z" fill="white" />
                      <path d="M44.7544 31.6671C44.7503 35.0078 43.5956 38.2316 41.5077 40.7313C39.4198 43.231 36.5428 44.834 33.4187 45.2385C33.3491 45.2468 33.2787 45.2394 33.212 45.2168C33.1453 45.1941 33.084 45.1568 33.0319 45.1071C32.9798 45.0574 32.9383 44.9966 32.91 44.9286C32.8817 44.8606 32.8673 44.7871 32.8677 44.7128V34.8214H35.8394C35.9752 34.8217 36.1096 34.7924 36.2342 34.7352C36.3589 34.6781 36.4712 34.5944 36.5641 34.4892C36.657 34.3841 36.7285 34.2598 36.7742 34.1241C36.82 33.9884 36.8389 33.8441 36.8299 33.7003C36.8081 33.4299 36.6905 33.1784 36.501 32.9962C36.3115 32.8141 36.0641 32.7149 35.8084 32.7185H32.8677V29.5642C32.8677 29.0065 33.0764 28.4716 33.448 28.0773C33.8195 27.6829 34.3234 27.4613 34.8488 27.4613H36.8299C36.9657 27.4617 37.1001 27.4323 37.2248 27.3752C37.3495 27.3181 37.4617 27.2343 37.5546 27.1292C37.6475 27.024 37.7191 26.8998 37.7648 26.764C37.8105 26.6283 37.8295 26.4841 37.8205 26.3402C37.7986 26.0694 37.6807 25.8175 37.4907 25.6353C37.3006 25.4531 37.0526 25.3541 36.7965 25.3585H34.8488C33.798 25.3585 32.7902 25.8016 32.0471 26.5903C31.3041 27.379 30.8866 28.4488 30.8866 29.5642V32.7185H27.9149C27.7791 32.7182 27.6447 32.7475 27.5201 32.8047C27.3954 32.8618 27.2831 32.9455 27.1902 33.0507C27.0974 33.1558 27.0258 33.2801 26.9801 33.4158C26.9343 33.5515 26.9154 33.6958 26.9244 33.8396C26.9463 34.1104 27.0642 34.3624 27.2542 34.5446C27.4442 34.7268 27.6923 34.8257 27.9484 34.8214H30.8866V44.7154C30.887 44.7896 30.8727 44.863 30.8444 44.9309C30.8162 44.9988 30.7748 45.0595 30.7228 45.1092C30.6709 45.1588 30.6097 45.1962 30.5431 45.219C30.4766 45.2417 30.4063 45.2493 30.3368 45.2411C27.1291 44.8265 24.185 43.1486 22.0871 40.5397C19.9892 37.9308 18.8906 34.5809 19.0086 31.1532C19.2562 24.056 24.6721 18.2863 31.3633 18.0103C33.0957 17.939 34.8237 18.2394 36.4442 18.8934C38.0647 19.5474 39.5442 20.5416 40.7943 21.8166C42.0445 23.0915 43.0395 24.621 43.7199 26.3135C44.4003 28.0061 44.7522 29.8269 44.7544 31.6671Z" fill="white" />
                    </svg>
                  </div>
                </div>
                <div className='col-md-12 col-lg-7'>
                  <div className='d-flex flex-wrap gap-5'>
                    <div className='list'>
                      <ul>
                        <li style={{ marginTop: "0px" }}>
                          <a href='#/'>Home</a>
                        </li>

                        <li>
                          <a href='#/'>Contact Us</a>
                        </li>

                        <li>
                          <a href='#/'>About Us</a>
                        </li>

                        <li>
                          <a href='#/'>Careers</a>
                          Careers</li>
                        <li>
                          <a href='#/'>Blog</a>
                        </li>

                      </ul>
                    </div>
                    <div className='list'>
                      <ul>
                        <li style={{ marginTop: "0px" }}>
                          <a href='#/'>Digital Performance</a>
                        </li>
                        <li>
                          <a href='#/'>User Experience</a>
                        </li>
                        <li>
                        <a href='#/'>Business IT</a>
                          </li>


                      </ul>
                    </div>
                    <div className='list' style={{ width: "200px" }}>
                      <p>(07) 3554 0017</p>
                      <p className='footer-address pt-2'>Suite 30, Lvl 7 445 Upper Edward ST Spring Hill, BRISBANE CITY 4000</p>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

      </div>
      <div className='container custom-container py-4'>
        <div className='row copyright-row' >
          <hr style={{ color: 'white' }} className='d-sm-block d-md-none'></hr>
          <div className='copyright-wrapper'>
            <div className='copyrightLeft'>
              <p className='text-white'>Privacy</p>
              <p className='text-white'>Terms & Conditions</p>
            </div>
            <div className='corightRight'>
              <p className='text-white'>Copyright © Digital Agency Pty Ltd ACN: 166 737 819 | ABN: 63 166 737 </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer