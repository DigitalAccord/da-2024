import React from 'react'
import './test.scss'
const Test = () => {
  return (
    <>
   {/* <div className="waveWrapper waveAnimation">
  <div className="waveWrapperInner bgTop">
    <div className="wave waveTop" style={{ backgroundImage: 'url(http://front-end-noobs.com/jecko/img/wave-top.png)' }}></div>
  </div>
  <div className="waveWrapperInner bgMiddle">
    <div className="wave waveMiddle" style={{ backgroundImage: 'url(http://front-end-noobs.com/jecko/img/wave-mid.png)' }}></div>
  </div>
  <div className="waveWrapperInner bgBottom">
    <div className="wave waveBottom" style={{ backgroundImage: 'url(http://front-end-noobs.com/jecko/img/wave-bot.png)' }}></div>
  </div>
</div> */}

<div class="water-wave-container" style={{width:"200px" ,height:"140px"}}>
  <div class="water-wave-layer wave1"></div>
  <div class="water-wave-layer wave2"></div>
</div>


    
    </>
  )
}

export default Test