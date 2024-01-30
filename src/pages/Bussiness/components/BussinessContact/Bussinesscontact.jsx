import React, { useState } from 'react';
import line from "../../../../assets/bussiness/Line.png"
import { FaArrowLeft } from "react-icons/fa";
import "./contact.scss"
import Services from '../Services/Services';
export default function Businesscontact() {
    const [selectedBusiness, setSelectedBusiness] = useState(null);
    const [isTellUsOpen, setIsTellUsOpen] = useState(false);
    const handleBack = () => {
        setIsTellUsOpen(true);
    };

    if (isTellUsOpen) {
        return <Services />;
    }

    return (
        <>
            <div className='contact'>
                <div className='container'>
                    <div className='tell-what'>
                        <h4>Tell Us What You Need?</h4>
                    </div>
                    <div className='tellus-box'>
                        <div className='button-left' onClick={handleBack}>
                            <FaArrowLeft />
                        </div>
                        <div className='tell-text'>
                            <h2>Tell Us What You Need?</h2>
                            <img src={line} className='line' />
                            <h1>Contact Us</h1>
                        </div>
                        <div className='tell-buttons-top'>
                            <button
                                type='button'
                                onClick={() => setSelectedBusiness('IT Strategy')}
                                className={selectedBusiness === 'IT Strategy' ? 'active' : ''} >
                                IT Strategy
                            </button>
                            <button
                                type='button'
                                onClick={() => setSelectedBusiness('Onsite')}
                                className={selectedBusiness === 'Onsite' ? 'active' : ''} >
                                Onsite
                            </button>
                            <button
                                type='button'
                                onClick={() => setSelectedBusiness('Maintenance')}
                                className={selectedBusiness === 'Maintenance' ? 'active' : ''} >
                                Maintenance
                            </button>
                        </div>
                        <button type='button' className='send'>Send</button>
                    </div>
                </div>
            </div>
        </>
    )
}