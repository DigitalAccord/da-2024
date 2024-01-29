import React, { useState } from 'react';
import "./services.scss"
import line from "../../../../assets/bussiness/Line.png"
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa6";
import Location from '../Location/Location';
import Businesscontact from '../BussinessContact/Bussinesscontact';
export default function Services() {
    const [isLocationOpen, setIsLocationOpen] = useState(false);
    const [isTellUsOpen, setIsTellUsOpen] = useState(false);
    const [selectedService, setSelectedService] = useState(null);
    const handleContinue = () => {
        setIsLocationOpen(true);
    };

    const handleBack = () => {
        setIsTellUsOpen(true);
    };

    if (isLocationOpen) {
        return <Businesscontact />;
    }

    if (isTellUsOpen) {
        return <Location />;
    }
    return (
        <>
            <div className='services'>
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
                        <div className="tellus-top">
                            <p>Question 1/4</p>
                            <div className='tell-bottom'></div>
                        </div>
                        <div className='tell-text'>
                            <h2>Tell Us What You Need?</h2>
                            <img src={line} className='line' />
                            <p>Select an answer</p>
                            <h1>Services Required</h1>
                        </div>
                        <div className='tell-buttons'>
                            <p>Please select one of the following:</p>
                            <div className='tell-buttons-top'>
                                <button
                                    type='button'
                                    onClick={() => setSelectedService('IT Strategy')}
                                    className={selectedService === 'IT Strategy' ? 'active' : ''} >
                                    IT Strategy
                                </button>

                                <button
                                    type='button'
                                    onClick={() => setSelectedService('Onsite')}
                                    className={selectedService === 'Onsite' ? 'active' : ''} >
                                    Onsite
                                </button>
                                <button
                                    type='button'
                                    onClick={() => setSelectedService('Maintenance')}
                                    className={selectedService === 'Maintenance' ? 'active' : ''} >
                                    Maintenance
                                </button>
                            </div>
                            <div className='tell-buttons-bottom'>
                                <button
                                    type='button'
                                    onClick={() => setSelectedService('Managed IT')}
                                    className={selectedService === 'Managed IT' ? 'active' : ''} >
                                    Managed IT
                                </button>
                                <button
                                    type='button'
                                    onClick={() => setSelectedService('Service Desk')}
                                    className={selectedService === 'Service Desk' ? 'active' : ''} >
                                    Service Desk
                                </button>
                                <button
                                    type='button'
                                    onClick={() => setSelectedService('Cyber Security')}
                                    className={selectedService === 'Cyber Security' ? 'active' : ''} >
                                    Cyber Security
                                </button>
                                <button
                                    type='button'
                                    onClick={() => setSelectedService('Other')}
                                    className={selectedService === 'Other' ? 'active' : ''} >
                                    Other
                                </button>
                            </div>
                            <button type='button' className='button-bottom'></button>
                            <button type='button' className='continue'>Continue</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}