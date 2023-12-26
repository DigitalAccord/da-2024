import React from 'react'
import './Solution_respo.scss'
import arrow from '../../assets/Arrow 4.png'
import Img1 from '../../assets/solution/developImg.png'
import Img2 from '../../assets/solution/digitalMarketingImg.png'
import Img3 from '../../assets/solution/ItImg.png'
const Solution_respo = () => {
  return (
    <>
      <div className='d-flex justify-content-center align-items-center ' >
        <div className='solution_wrapper'>
          <div className='solution-content'>
            <div className='solution-head'>
              <h1>Solutions<br />
                To Grow<br /> Your<br />
                Business</h1>
              <div className='parent'>
                <div className='bg-circle-wrapper'>
                  <div className='circle-overflow'>
                    <div className='circle-img'>
                      <img src={arrow} className='img-fluid' />
                    </div>
                    <div className='overflow-blur'>

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
        <div className='mobile_section_solution d-md-none'>
          <div className='Solution_img'>
            <img src={Img1} alt="" />
          </div>
          <h1>Design & <br />
            Development</h1>
            <p>IT Helpdesk is a crucial element of any workflow, as it is in most businesses. Digital Accord collaborates with your company to provide business continuity and professional management across all of your company’s devices.</p>
            <p>Digital Accord is a managed service company in Brisbane that can help you with all of your IT issues quickly and effectively. To guarantee that your business runs smoothly, our in-house personnel strikes the appropriate balance between proactive monitoring and maintenance and reactive support.</p>
            <div className='w-100 d-flex justify-content-center align-items-center'>
            <button>Learn More</button>
            </div>
        </div>

        <div className='mobile_section_solution d-md-none'>
          <div className='Solution_img'>
            <img src={Img2} alt="" />
          </div>
          <h1>Digital <br />
          Marketing</h1>
            <p>IT Helpdesk is a crucial element of any workflow, as it is in most businesses. Digital Accord collaborates with your company to provide business continuity and professional management across all of your company’s devices.</p>
            <p>Digital Accord is a managed service company in Brisbane that can help you with all of your IT issues quickly and effectively. To guarantee that your business runs smoothly, our in-house personnel strikes the appropriate balance between proactive monitoring and maintenance and reactive support.</p>
            <div className='w-100 d-flex justify-content-center align-items-center'>
            <button>Learn More</button>
            </div>
        </div>

        <div className='mobile_section_solution d-md-none'>
          <div className='Solution_img'>
            <img src={Img3} alt="" />
          </div>
          <h1>Business <br />
          I.T.</h1>
            <p>IT Helpdesk is a crucial element of any workflow, as it is in most businesses. Digital Accord collaborates with your company to provide business continuity and professional management across all of your company’s devices.</p>
            <p>Digital Accord is a managed service company in Brisbane that can help you with all of your IT issues quickly and effectively. To guarantee that your business runs smoothly, our in-house personnel strikes the appropriate balance between proactive monitoring and maintenance and reactive support.</p>
            <div className='w-100 d-flex justify-content-center align-items-center'>
            <button>Learn More</button>
            </div>
        </div>
    </>
  )
}

export default Solution_respo
