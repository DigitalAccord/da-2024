import React from 'react'
import "./digital.scss";
import dell from "../../../../assets/bussiness/dell.png";
import cpanel  from "../../../../assets/bussiness/cpanel.png";
import veeam from "../../../../assets/bussiness/Veeam_logo 1.png";
import microsoft from "../../../../assets/bussiness/microsoft.png";
import barracuda from "../../../../assets/bussiness/barracuda.png";
import nextdc from "../../../../assets/bussiness/nextdc.png";
import solusvm from "../../../../assets/bussiness/solusvm.png"
export default function Digital() {
    return (
        <>
        {/* // <div className='digital-box'>
        </div> */}
            <div className='digital'>
            <div className='container'>
                <div className='digital-text'>
                    <p>Digital Accord utilises the latest technology and partners with industry <br></br> <p>experts to ensure our clients maintained well.</p></p>
                </div>
                <div className='digital-logo'>
                <img src={dell} className='dell'/>
                <img src={cpanel} className='cpanel'/>
                <img src={veeam} className='veeam'/>
                <img src={microsoft}  className='microsoft'/>
                </div>
                <div className='digital-logobottom'>
                <img src={barracuda} className='barracuda'/>
                <img src={nextdc} className='nextdc'/>
                <img src={solusvm} className='solusvm'/>
                </div>
            </div>
            </div>
        </>
    )
}