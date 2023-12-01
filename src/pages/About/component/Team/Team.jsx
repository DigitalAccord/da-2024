import React from 'react'
import './team.scss'

const Team = () => {
  return (
   <>
   <div className='team-section'>
   <div className='team-container container'>
    <div className='team-wrapper'>
        <div className='team-left'>
            <h1>Our<br/>Team.</h1>
        </div>
        <div className='team-right'>
            <div className='team-circle'>
                <div className='team-circle-text'>
                <h1>Lorem Ipsum Dolor...</h1>
                <p>“Lorem ipsum dolor sit amet, 
                    consectetur adipiscing elit.
                    Curabitur ut felis nunc. Sed molestie rhoncus rutrum.”</p>
                    <p className='jhon'>John Doe</p>
                </div>
                    <div className='blur-effect'></div>
            </div>
        </div>
    </div>
   </div>
   </div>
   </>
  )
}

export default Team