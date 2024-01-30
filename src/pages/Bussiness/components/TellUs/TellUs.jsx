import React, { useState } from 'react';
import "./tell.scss";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import line from "../../../../assets/bussiness/Line.png";
import Location from '../Location/Location';
export default function TellUs() {
    const [isLocationOpen, setIsLocationOpen] = useState(false);
    const [selectedNumber, setSelectedNumber] = useState(null);
    const handleContinue = () => {
        setIsLocationOpen(true);
    };
    if (isLocationOpen) {
        return <Location />;
    }

    return (
        <>
            <div className='tellus'>
                <div className='container'>
                    <div className='tell-what'>
                        <h4>Tell Us What You Need?</h4>
                        <div className="tellus-top">
                            <p>Question 1/4</p>
                            <div className='tell-bottom'></div>
                        </div>
                    </div>
                    <div className='tellus-box'>
                        <div className='tell-arrowbutton'>
                            <div className='button-left'>
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
                            <h1>Team Size</h1>
                        </div>
                        <div className='tell-buttons'>
                            <p>Please select one of the following:</p>
                            <div className='tell-buttons-top'>
                                <button
                                    type='button'
                                    onClick={() => setSelectedNumber('5-10')}
                                    className={selectedNumber === '5-10' ? 'active' : ''} >
                                    5 - 10
                                </button>
                                <button
                                    type='button'
                                    onClick={() => setSelectedNumber('10-20')}
                                    className={selectedNumber === '10-20' ? 'active' : ''} >
                                    10 - 20
                                </button>

                                <button
                                    type='button'
                                    onClick={() => setSelectedNumber('20-50')}
                                    className={selectedNumber === '20-50' ? 'active' : ''} >
                                    20 - 50
                                </button>

                            </div>
                            <div className='tell-buttons-bottom'>
                                <button
                                    type='button'
                                    onClick={() => setSelectedNumber('50-100')}
                                    className={selectedNumber === '50-100' ? 'active' : ''} >
                                    50 - 100
                                </button>
                                <button
                                    type='button'
                                    onClick={() => setSelectedNumber('100-200')}
                                    className={selectedNumber === '100-200' ? 'active' : ''} >
                                    100 - 200
                                </button>
                                <button
                                    type='button'
                                    onClick={() => setSelectedNumber('200-400')}
                                    className={selectedNumber === '200-400' ? 'active' : ''} >
                                    200 - 400
                                </button>
                                <button
                                    type='button'
                                    onClick={() => setSelectedNumber('500')}
                                    className={selectedNumber === '500' ? 'active' : ''} >
                                    500
                                </button>

                            </div>
                            <button type='button' className='continue' onClick={handleContinue}>
                                Continue
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}