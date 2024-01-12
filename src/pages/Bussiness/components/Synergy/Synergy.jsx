import React from 'react'
import './Synergy.scss'
import text_image from '../../../../assets/bussiness/text_image.png'
const Synergy = () => {
  return (
    <>
    <div className='synergy-wrapper'>
          <div className='container synergy_container'>
            <div className='row'>
                <div className='col-lg-5'>
                    <div className='syntergy_image_text'>
                        <img src={text_image} alt="6794" />
                    </div>
                </div>
                <div className='col-lg-1 ' style={{padding:"0px" ,width:"3%"}} >
                <div className='synergy_text_wrapper d-flex align-items-center'>
                <div className='text_line'>
                    
                </div>
                </div>
                </div>
                <div className='col-lg-6'>
                   <div className='synergy_wrapper-text'>
                    <div className='synergy_text'>
                        <p>consectetur adipiscing elit. Curabitur ut felis nunc. Sed molestie rhoncus rutrum. Maecenas lorem mi, hendrerit fermentum congue pretium, iaculis sed orci. Proin vel eros risus. Maecenas non risus eget turpis ultricies pharetra at sed mauris. Maecenas commodo massa consequat auctor lacinia. Sed hendrerit pellentesque placerat. Duis vehicula consectetur tincidunt. Nullam finibus et est non gravida. Maecenas iaculis orci et ante finibus, a fermentum erat mattis. Donec congue commodo risus, sit amet molestie nibh hendrerit eu.</p>
                    </div>

                   </div>

                    
                </div>
            </div>
            </div> 

            <div className='synergy-right-cards-wrapper'>
              <div className='s-card'>
              <div className='synergy-right-cards'></div>
              <div className='s-card1 mt-5'>
              <div className='synergy-right-cards'></div>
              <div className='synergy-right-cards'></div>
              </div>

              </div>
          
              </div> 

    </div>
    </>
  )
}

export default Synergy