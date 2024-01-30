import React, { useState } from 'react';
import "./location.scss"
import line from "../../../../assets/bussiness/Line.png"
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import Services from '../Services/Services';
import TellUs from '../TellUs/TellUs';

export default function Location() {
    const [isLocationOpen, setIsLocationOpen] = useState(false);
    const [isTellUsOpen, setIsTellUsOpen] = useState(false);
    const [selectedCity, setSelectedCity] = useState(null);
    const handleContinue = () => {
        setIsLocationOpen(true);
    };

    const handleBack = () => {
        setIsTellUsOpen(true);
    };

    if (isLocationOpen) {
        return <Services />;
    }

    if (isTellUsOpen) {
        return <TellUs />;
    }

    return (
        <>
            <div className='location'>
                <div className='container'>
                    <div className='tell-what'>
                        <h4>Tell Us What You Need?</h4>
                    </div>
                    <div className='tellus-box'>
                        <div className='tell-arrowbutton'>
                            <div className='button-left' onClick={handleBack}>
                                <FaArrowLeft />
                            </div>
                            <div className='button-right' onClick={handleContinue}>
                                <FaArrowRight />
                            </div>
                        </div>
                        <div className='tell-text'>
                            <h2>Tell Us What You Need?</h2>
                            <img src={line} className='line' />
                            <p>Select an answer</p>
                            <h1>Location</h1>
                        </div>
                        <div className='tell-buttons'>
                            <p>Please select one of the following:</p>
                            <div className='tell-buttons-top'>
                                <button
                                    type='button'
                                    onClick={() => setSelectedCity('Brisbane')}
                                    className={selectedCity === 'Brisbane' ? 'active' : ''} >
                                    Brisbane
                                </button>
                                <button
                                    type='button'
                                    onClick={() => setSelectedCity('Sydney')}
                                    className={selectedCity === 'Sydney' ? 'active' : ''}>
                                    Sydney
                                </button>
                                <button
                                    type='button'
                                    onClick={() => setSelectedCity('Melbourne')}
                                    className={selectedCity === 'Melbourne' ? 'active' : ''} >
                                    Melbourne
                                </button>
                            </div>
                            <button type='button' className='continue' onClick={handleContinue}>Continue</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}