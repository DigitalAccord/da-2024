import React from 'react'
import './letsTalk.scss'
import arrow from '../../assets/Arrow 4.png'
const LetsTalk = () => {
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
    </>
  )
}

export default LetsTalk