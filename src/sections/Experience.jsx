import React, { useState, useEffect } from 'react'
import { workExperiences } from "../constants/index.js";

const Experience = () => {
    const [active, setActive] = useState(workExperiences[0]);
    const [imageIndex, setImageIndex] = useState(0);

    const images = active.images || [];

    useEffect(() => {
        setImageIndex(0);
    }, [active]);

    const handleNavigation = (direction) => {
        setImageIndex((prev) => {
            if (direction === 'previous') {
                return prev === 0 ? images.length - 1 : prev - 1;
            }
            return prev === images.length - 1 ? 0 : prev + 1;
        });
    };

    return (
        <section className="c-space my-20">
            <div className="w-full text-white-600">
                <h3 className="head-text">My Work Experience</h3>
                <p className="text-white-500 mt-3 mb-2">
                    Click on any experience below to view related photos and certificates.
                </p>
                <div className="work-container">
                    <div className="work-canvas flex flex-col items-center justify-center p-5 gap-4">
                        <img
                            src={images[imageIndex]}
                            alt={active.name}
                            className="w-full h-[260px] object-cover rounded-lg"
                        />

                        {images.length > 1 && (
                            <div className="flex justify-between items-center w-full mt-2">
                                <button className="arrow-btn" onClick={() => handleNavigation('previous')}>
                                    <img src="/assets/left-arrow.png" alt="left-arrow" className="w-4 h-4" />
                                </button>
                                <button className="arrow-btn" onClick={() => handleNavigation('next')}>
                                    <img src="/assets/right-arrow.png" alt="right-arrow" className="w-4 h-4" />
                                </button>
                            </div>
                        )}
                    </div>
                    <div className="work-content">
                        <div className="sm:py-10 py-5 sm:px-5 px-2.5">
                            {workExperiences.map((exp) => (
                                <div
                                    key={exp.id}
                                    onClick={() => setActive(exp)}
                                    className={`work-content_container group ${active.id === exp.id ? 'bg-black-300' : ''}`}
                                >
                                    <div className="flex flex-col h-full justify-start items-center py-2">
                                        <div className="work-content_logo bg-white p-2 flex items-center justify-center">
                                            <img src={exp.icon} alt="logo" className="w-full h-full object-contain rounded-lg" />
                                        </div>
                                        <div className="work-content_bar" />
                                    </div>
                                    <div className="sm:p-5 px-2.5 py-5">
                                        <p className="font-bold text-white-800">{exp.name}</p>
                                        <p className="text-sm mb-5">{exp.pos} -- {exp.duration}</p>
                                        <p className="group-hover:text-white transition ease-in-out duration-500">{exp.title}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Experience