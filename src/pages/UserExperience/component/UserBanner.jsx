import React,{useState} from 'react'
import './user.scss'
import inspo from '../../../assets/user/infobanner.png'
import inspoRight from '../../../assets/user/inspoRight.png'
import ideote from '../../../assets/user/ideote.png'
const UserBanner = () => {

    const [isbg1, setIsbg1] = useState(false);
  const [isbg2, setIsbg2] = useState(false);

    
  return (
  <>
   <div className={`user_banner ${isbg1 && ' right1 '} ${isbg2 && ' right2 '}`}>
    <div className='user_bg_text'>
        <h1>Brand &<br/> Design</h1>
        <button>Learn More</button>
    </div>
    <div className='hover-circle'>
        <div>

        <div className='box1'></div>
        </div>
        <div>
        <div className='box2'   onMouseEnter={() => setIsbg1(true)}
                onMouseLeave={() => setIsbg1(false)}></div>
        <div className='box3'  onMouseEnter={() => setIsbg2(true)}
                onMouseLeave={() => setIsbg2(false)}></div>

        </div>
    </div>
  </div>

  <div className='vision-section'>
    <div className='vision-left'>
        <div className='vision-left-text'>
         <h1>We Shape The Future, One Pixel At<br/> A Time.</h1>
        </div>
        <p>Someone In The Office -</p>
    </div>
    <div className='vision-right'>
        <h1>Vision.</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ut felis nunc. Sed molestie rhoncus rutrum. Maecenas lorem mi, hendrerit fermentum congue pretium, iaculis sed orci. Proin vel eros risus. Maecenas non risus eget turpis ultricies pharetra at sed mauris. Maecenas commodo massa consequat auctor lacinia. Sed hendrerit pellentesque placerat. Duis vehicula consectetur tincidunt. Nullam finibus et est non gravida. Maecenas iaculis orci et ante finibus, a fermentum erat mattis. Donec congue commodo risus, sit amet molestie nibh hendrerit eu. Nulla maximus ex non eleifend porttitor.</p>
    </div>
  </div>

  <div className='inspo-section'>
    <div className='inspo-left'>
        <div className='section-left-img'>
           <img src={inspo}  alt='hhh///' />
        </div>
        <div className='inspo-left-bottom'>

        <div className='vision-right'>
        <h1>Vision.</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ut felis nunc. Sed molestie rhoncus rutrum. Maecenas lorem mi, hendrerit fermentum congue pretium, iaculis sed orci. Proin vel eros risus. Maecenas non risus eget turpis ultricies pharetra at sed mauris. Maecenas commodo massa consequat auctor lacinia. Sed hendrerit pellentesque placerat. Duis vehicula consectetur tincidunt. Nullam finibus et est non gravida. Maecenas iaculis orci et ante finibus, a fermentum erat mattis. Donec congue commodo risus, sit amet molestie nibh hendrerit eu. Nulla maximus ex non eleifend porttitor.</p>
    </div>
        </div>
    </div>
    <div className='inspo-right'>
        <img src={inspoRight} alt='wdwd//'/>
    </div>
  </div>

  <div className='ideote'>
    <div className='ideote_left'>
        <img src={ideote} alt="ideote" />
    </div>
    <div className='ideote_right'>
 
        <h1>Vision.</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ut felis nunc. Sed molestie rhoncus rutrum. Maecenas lorem mi, hendrerit fermentum congue pretium, iaculis sed orci. Proin vel eros risus. Maecenas non risus eget turpis ultricies pharetra at sed mauris. Maecenas commodo massa consequat auctor lacinia. Sed hendrerit pellentesque placerat. Duis vehicula consectetur tincidunt. Nullam finibus et est non gravida. Maecenas iaculis orci et ante finibus, a fermentum erat mattis. Donec congue commodo risus, sit amet molestie nibh hendrerit eu. Nulla maximus ex non eleifend porttitor.</p>
   
    </div>
  </div>

  <div className='designer'>
    <div className='designer-content'>
     <h4>ASSISTANT DESIGNER</h4>   
     <h1>FERNando</h1>
    </div>
  <div className='design-text'>
  <h1>Design.</h1>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ut felis nunc. Sed molestie rhoncus rutrum. Maecenas lorem mi, hendrerit fermentum congue pretium, iaculis sed orci. Proin vel eros risus. Maecenas non risus eget turpis ultricies pharetra at sed mauris. Maecenas commodo massa consequat auctor lacinia. Sed hendrerit pellentesque placerat. Duis vehicula consectetur tincidunt. Nullam finibus et est non gravida. Maecenas iaculis orci et ante finibus, a fermentum erat mattis. Donec congue commodo risus, sit amet molestie nibh hendrerit eu. Nulla maximus ex non eleifend porttitor.</p>
  </div>
  </div>
  <div className='launch'>
    <h1>Launch.</h1>
  </div>

  </>
  )
}

export default UserBanner