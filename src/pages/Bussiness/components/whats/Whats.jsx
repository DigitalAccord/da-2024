import React, { useState } from 'react'
import './whats.scss'
import { BussinessButton, BussinessCircle, BussinessLearn } from '../../../../assets/svgIcons'
const Whats = () => {
    const [isActive, setIsActive] = useState("Workstations");
    const [cards, setCards] = useState(1);
    const cardsData = [
        {
            id: 1,
            para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ut felis nunc. Sed molestie rhoncus rutrum. Maecenas lorem mi, hendrerit fermentum congue pretium, iaculis sed orci. Proin vel eros risus. Maecenas hendrerit pellentesque placerat. Duis vehicula consectetur tincidunt. Nullam finibus et est non gravida. Maecenas iaculis orci et ante finibus, a fermentum erat mattis. Donec congue commodo risus, sit amet molestie nibh ",
            btnText: "learn"


        },
        {
            id: 2,
            para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ut felis nunc. Sed molestie rhoncus rutrum. Maecenas lorem mi, hendrerit fermentum congue pretium, iaculis sed orci. Proin vel eros risus. Maecenas non risus eget turpis ultricies pharetra at sed mauris. Maecenas commodo massa consequat auctor lacinia. Sed hendrerit pellentesque placerat. Duis vehicula consectetur tincidunt. Nullam finibus et est non gravida. Maecenas iaculis orci et ante finibus, a fermentum erat mattis. Donec congue commodo risus, sit amet molestie nibh hendrerit eu. Nulla maximus ex non eleifend porttitor.",
            btnText: "learn"


        },
        {
            id: 3,
            para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ut felis nunc. Sed molestie rhoncus rutrum. Maecenas lorem mi, hendrerit fermentum congue pretium, iaculis sed orci. Proin vel eros risus. Maecenas non risus eget turpis ultricies pharetra at sed mauris. Maecenas commodo massa consequat auctor lacinia. Sed hendrerit pellentesque placerat. Duis vehicula consectetur tincidunt. Nullam finibus et est non gravida. Maecenas iaculis orci et ante finibus, a fermentum erat mattis. Donec congue commodo risus, sit amet molestie nibh hendrerit eu. Nulla maximus ex non eleifend porttitor.",
            btnText: "learn"


        },
        {
            id: 4,
            para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ut felis nunc. Sed molestie rhoncus rutrum. Maecenas lorem mi, hendrerit fermentum congue pretium, iaculis sed orci. Proin vel eros risus. Maecenas non risus eget turpis ultricies pharetra at sed mauris. Maecenas commodo massa consequat auctor lacinia. Sed hendrerit pellentesque placerat. Duis vehicula consectetur tincidunt. Nullam finibus et est non gravida. Maecenas iaculis orci et ante finibus, a fermentum erat mattis. Donec congue commodo risus, sit amet molestie nibh hendrerit eu. Nulla maximus ex non eleifend porttitor.",
            btnText: "learn"


        },
        {
            id: 5,
            para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ut felis nunc. Sed molestie rhoncus rutrum. Maecenas lorem mi, hendrerit fermentum congue pretium, iaculis sed orci. Proin vel eros risus. Maecenas non risus eget placerat. Duis vehicula consectetur tincidunt. Nullam finibus et est non gravida. Maecenas iaculis orci et ante finibus, a fermentum erat mattis. Donec congue commodo risus, sit amet molestie nibh hendrerit eu. Nulla maximus ex non eleifend porttitor.Maecenas lorem mi, hendrerit fermentum congue pretium, iaculis sed orci. Proin vel eros risus. Maecenas non risus eget Maecenas lorem mi, hendrerit fermentum congue pretium, iaculis sed orci. Proin vel eros risus. Maecenas non risus eget Maecenas lorem mi, hendrerit fermentum congue pretium, iaculis sed orci. Proin vel eros risus. Maecenas non risus eget Maecenas lorem mi, hendrerit fermentum congue pretium, iaculis sed orci. Proin vel eros risus. Maecenas non risus eget Maecenas lorem mi, hendrerit fermentum congue pretium, iaculis sed orci. Proin vel eros risus. Maecenas non risus eget Maecenas lorem mi, hendrerit fermentum congue pretium, iaculis sed orci. Proin vel eros risus. Maecenas non risus eget Maecenas lorem mi, hendrerit fermentum congue pretium, iaculis sed orci. Proin vel eros risus. Maecenas non risus eget Maecenas lorem mi, hendrerit fermentum congue pretium, iaculis sed orci. Proin vel eros risus. Maecenas non risus eget Maecenas lorem mi, hendrerit fermentum congue pretium, iaculis sed orci. Proin vel eros risus. Maecenas non risus eget ",
            btnText: "learn"


        },
        {
            id: 6,
            para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ut felis nunc. Sed molestie rhoncus rutrum. Maecenas lorem mi, hendrerit fermentum congue pretium, iaculis sed orci. Proin vel eros risus. Maecenas non risus eget ",
            btnText: "learn"


        }
    ]

    const getButtonName = (sectionId) => {
        switch (sectionId) {
            case 1:
                return 'Managed Services';
            case 2:
                return 'Connectivity';
            case 3:
                return 'Cloud';
            case 4:
                return 'IT Consulting';
            case 5:
                return 'Telephony';
            case 6:
                return 'IT Security';
            default:
                return `Section ${sectionId}`;
        }
    };

    return (
        <>
            <div className='whats_wrapper'>
                <div className='container whats_container'>
                    <div className='row'>
                        <div className='col-lg-6'>
                            <div className='whats_left'>
                                <div className='whats_left_text'>
                                    <div className='whats_left_blur_text'>
                                        <h1>What Is </h1>
                                        <span>IT?</span>
                                    </div>

                                </div>
                                <div className='whats_left_buttons'>
                                    {cardsData.map((section) => (
                                        <button
                                            key={section.id}
                                            className={cards === section.id ? 'btn-active ' : ''}
                                            onClick={() => {
                                                setCards(section.id);
                                                setIsActive("Workstations");
                                            }}
                                           
                                        >
                                            {getButtonName(section.id)} <BussinessButton className="svg-parent" />

                                            <div key={section.id} className={cards === section.id ? 'svg_enable' : 'svg_disable'}>
                                                {/* <BussinessCircle/> */}
                                            </div>
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-6'>
                            <div className='setDisplay'>
                                <div className='whats_right_wrapper'>
                                    {cardsData.map((section) => (
                                        <div key={section.id} className={`whats_right ${cards === section.id ? 'active' : ''}`}>
                                            <div className='whats_navbar'>
                                                <ul>
                                                    <li className={isActive === "Workstations" ? "active" : ""} onClick={() => setIsActive("Workstations")}>Workstations</li>
                                                    <li className={isActive === "Servers" ? "active" : ""} onClick={() => setIsActive("Servers")}>Servers</li>
                                                    <li className={isActive === "Support" ? "active" : ""} onClick={() => setIsActive("Support")}>Support</li>
                                                </ul>
                                            </div>
                                            <div className='whats_line'></div>

                                            <div className='whats_right-content'>
                                                <div className='whats_para'>
                                                    <p>
                                                        {section.para}
                                                    </p>
                                                </div>
                                                <div className='whats_learn_more'>
                                                    <p>Learn More</p>
                                                    <BussinessLearn />
                                                </div>



                                            </div>
                                        </div>
                                    ))}

                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Whats