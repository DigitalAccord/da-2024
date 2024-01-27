import React from 'react'
import './privacy.scss'
const Privacy = () => {
  return (
    <>
    <div className='privacy_container container'>
       <div className='privacy_wrapper'>
        <h1>Privacy</h1>
        <p>This Privacy Policy describes how [Result Begin] collects, uses, and discloses information, and your choices regarding that information. By using our services, you consent to the practices described in this policy.</p>
       </div>
       <div className='Information mt-5'>
        <h1>Information We Collect:</h1>
        <div className='personel-info mt-5'>
        <h1><span style={{paddingRight:"10px"}}>1.</span>Personal Information:</h1>
        <li>Name</li>
        <li>Email address</li>
        <li>Contact information</li>
        </div>

        <div className='personel-info mt-5'>
        <h1><span style={{paddingRight:"10px"}}>2.</span>Usage Data:</h1>
        <li>Log files</li>
        <li>IP addresses</li>
        <li>Browser type</li>
        </div>

        <div className='personel-info mt-5'>
        <h1><span style={{paddingRight:"10px"}}>3.</span>Cookies:</h1>
        <li>We use cookies to enhance your experience and for analytics purposes.</li>
        </div>
       </div>


       <div className='your_info mt-5'>
        <h1>How We Use Your Information:</h1>

        <div className='personel-info mt-5'>
        <h1><span style={{paddingRight:"10px"}}>1.</span>Providing Services:</h1>
         <li>To deliver and maintain our services.</li>
        </div>

        <div className='personel-info mt-3'>
        <h1><span style={{paddingRight:"10px"}}>2.</span>Providing Services:</h1>
         <li>To deliver and maintain our services.</li>
        </div>

        <div className='personel-info mt-3'>
        <h1><span style={{paddingRight:"10px"}}>3.</span>Communication:</h1>
         <li>To deliver and maintain our services.</li>
        </div>

        <div className='personel-info mt-3'>
        <h1><span style={{paddingRight:"10px"}}>4.</span>Information Sharing:</h1>
         <li>To deliver and maintain our services.</li>
        </div>


       </div>

       <div className='information_sharing mt-5'>
        <p>We do not sell, trade, or otherwise transfer your personal information to outside parties. This does not include trusted third parties who assist us in operating our website, conducting our business, or servicing you.</p>
        <div className='mt-5'>
            <h1>Security:</h1>
            <p>We implement a variety of security measures to maintain the safety of your personal information.</p>
        </div>

        <div className='mt-5'>
            <h1>Your Choices:</h1>
            <p>You may choose not to provide certain personal information, but this may limit your ability to use certain features.

       </p>
        </div>

        <div className='mt-5'>
            <h1>Updates to this Privacy Policy:</h1>
            <p>We reserve the right to update or change our privacy policy at any time.</p>
        </div>

        <div className='mt-5 mb-5'>
            <h1>Contact Us:</h1>
            <p>If you have any questions regarding this privacy policy, you may contact us at [hello@digitalaccord.com.au].</p>
        </div>
       </div>
    </div>
    </>
  )
}

export default Privacy