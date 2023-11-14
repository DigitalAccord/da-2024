import React from 'react'
import './Solution_respo.scss'
import arrow from '../../assets/Arrow 4.png'
const Solution_respo = () => {
  return (
    <>
      <div className='solution_wrapper'>
        <div className='solution-content'>
            <div className='solution-head'>
                 <h1>Solutions<br/>
                      To Grow<br/> Your<br/>
                      Business</h1>
          <div className='parent'>
          <div className='bg-circle-wrapper'>
          <div className='circle-overflow'>
                    <div className='circle-img'>
                        <img src={arrow} className='img-fluid'/>
                    </div>
                    <div className='overflow-blur'>

                    </div>
                </div>
                </div>
          </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default Solution_respo
