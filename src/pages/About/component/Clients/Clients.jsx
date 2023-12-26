import React, { useState } from 'react'
import './clients.scss'
const Clients = () => {
  const [isbg1, setIsbg1] = useState(false);
  const [isbg2, setIsbg2] = useState(false);
  return (
    <>
      <div className='client-section'>
        <div className='container div-client-wrapper '>
          <div className='client-section-left'>
            {!isbg1 && !isbg2 &&
              <div className='client-relation-text'>
                <h1>Client Relationship</h1>
                <p>orem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ut felis nunc. Sed molestie rhoncus rutrum. Maecenas lorem mi, hendrerit fermentum congue pretium, iaculis sed orci. Proin vel eros risus. Maecenas non risus eget turpis ultricies pharetra at sed mauris. Maecenas commodo massa consequat auctor lacinia. Sed hendrerit pellentesque placerat. Duis vehicula consectetur tincidunt.</p>
                <p>orem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ut felis nunc. Sed molestie rhoncus rutrum. Maecenas lorem mi, hendrerit fermentum congue pretium, iaculis sed orci. Proin vel eros risus. Maecenas non risus eget turpis ultricies pharetra at sed mauris.</p>
              </div>
            }
            ${isbg2 &&
              <div className='client-relation-text'>
                <h1>Transparency <br /> & Honesty</h1>
                <p>orem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ut felis nunc. Sed molestie rhoncus rutrum. Maecenas lorem mi, hendrerit fermentum congue pretium, iaculis sed orci. Proin vel eros risus. Maecenas non risus eget turpis ultricies pharetra at sed mauris. Maecenas commodo massa consequat auctor lacinia. Sed hendrerit pellentesque placerat. Duis vehicula consectetur tincidunt.</p>
                <p>orem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ut felis nunc. Sed molestie rhoncus rutrum. Maecenas lorem mi, hendrerit fermentum congue pretium, iaculis sed orci. Proin vel eros risus. Maecenas non risus eget turpis ultricies pharetra at sed mauris.</p>
              </div>}
            ${isbg1 &&
              <div className='client-relation-text'>
                <h1>Team <br /> Collaboration</h1>
                <p>orem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ut felis nunc. Sed molestie rhoncus rutrum. Maecenas lorem mi, hendrerit fermentum congue pretium, iaculis sed orci. Proin vel eros risus. Maecenas non risus eget turpis ultricies pharetra at sed mauris. Maecenas commodo massa consequat auctor lacinia. Sed hendrerit pellentesque placerat. Duis vehicula consectetur tincidunt.</p>
                <p>orem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ut felis nunc. Sed molestie rhoncus rutrum. Maecenas lorem mi, hendrerit fermentum congue pretium, iaculis sed orci. Proin vel eros risus. Maecenas non risus eget turpis ultricies pharetra at sed mauris.</p>
              </div>
            }

          </div>
          <div className={`client-section-right ${isbg1 && ' Client_right1 '} ${isbg2 && ' Client_right2 '}`}>
            <div className='text-boxes'>

              <div className='text-box1'
                onMouseEnter={() => setIsbg2(true)}
                onMouseLeave={() => setIsbg2(false)}
              >
                <p>Transparency &<br />Honesty.</p>

              </div>
              <div className='text-box2'
                onMouseEnter={() => setIsbg1(true)}
                onMouseLeave={() => setIsbg1(false)}
              >
                <p>Team<br />Collaboration.</p>

              </div>

              <div className='text-box3 d-flex justify-content-center align-items-center' style={{ width: "200px" }}>
                <p> Client<br />Relationships</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Clients